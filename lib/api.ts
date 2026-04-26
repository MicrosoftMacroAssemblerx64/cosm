export interface CustomField {
  name: string;
  default?: string;
  [key: string]: any;
}

export interface Product {
  uniqid: string;
  title: string;
  price: number;
  stock: number;
  custom_fields?: CustomField[];
  image_url?: string;
  cdn_image_url?: string;
  detail_image_url?: string;
  images?: string[];
  [key: string]: any;
}

export interface ProductGroup {
  title: string;
  products_bound: Product[];
  cdn_image_url?: string;
  image?: string;
  banner?: string;
  [key: string]: any;
}

export interface ProductsResponse {
  data: {
    groups: ProductGroup[];
  };
}

export interface ShoppexGroupsResponse {
  data?: ProductGroup[];
  [key: string]: any;
}

export interface Review {
  id: string;
  uniqid: string;
  shop_id: string;
  invoice_id: string;
  product_id: string;
  message: string;
  reply?: string;
  rating: number;
  is_automated: boolean;
  title?: string;
  product_title: string;
  customer_email: string;
  customer_name: string;
  replied_at?: number;
  is_approved: boolean;
  created_at: number;
  updated_at: number;
}

export interface ReviewsResponse {
  data: Review[];
  pagination: {
    next_cursor: string | null;
    has_more: boolean;
  };
}

export async function getProducts(): Promise<ProductsResponse> {
  const groupsRes = await fetch(
    `https://api.shoppex.io/dev/v1/groups?timestamp=${Date.now()}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.SHOPPEX_API_KEY}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    }
  );

  const productsRes = await fetch(
    `https://api.shoppex.io/dev/v1/products?timestamp=${Date.now()}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.SHOPPEX_API_KEY}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    }
  );

  if (!groupsRes.ok || !productsRes.ok) {
    console.error("Failed to fetch products:", groupsRes.status, productsRes.status);
    return {
      data: {
        groups: [],
      },
    };
  }

  const groupsJson: ShoppexGroupsResponse = await groupsRes.json();
  const productsJson: { data?: Product[] } = await productsRes.json();

  const groups = groupsJson?.data ?? [];
  const allProducts = productsJson?.data ?? [];

  const productMap = new Map<string, Product>();
  allProducts.forEach((product) => {
    productMap.set(product.uniqid, product);
  });

  const groupsWithImages = groups.map((group) => {
    const productsWithImages = group.products_bound?.map((product) => {
      const fullProduct = productMap.get(product.uniqid);
      return fullProduct ? { ...fullProduct, ...product } : product;
    }) ?? [];
    return { ...group, products_bound: productsWithImages };
  });

  const groupedProductIds = new Set<string>();
  groupsWithImages.forEach((group) => {
    group.products_bound?.forEach((product) => {
      groupedProductIds.add(product.uniqid);
    });
  });

  const ungroupedProducts = allProducts.filter(
    (product) => !groupedProductIds.has(product.uniqid)
  );

  const finalGroups = [...groupsWithImages];
  if (ungroupedProducts.length > 0) {
    finalGroups.push({
      title: "Other Products",
      products_bound: ungroupedProducts,
    } as ProductGroup);
  }

  return {
    data: {
      groups: finalGroups,
    },
  };
}

export async function getReviews(): Promise<ReviewsResponse> {
  const reviewsRes = await fetch(
    `https://api.shoppex.io/dev/v1/reviews?timestamp=${Date.now()}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.SHOPPEX_API_KEY}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 300 },
    }
  );

  if (!reviewsRes.ok) {
    console.error("Failed to fetch reviews:", reviewsRes.status);
    return {
      data: [],
      pagination: {
        next_cursor: null,
        has_more: false,
      },
    };
  }

  const reviewsJson: ReviewsResponse = await reviewsRes.json();

  const approvedReviews = (reviewsJson.data ?? []).filter(
    (review) => review.is_approved
  );

  return {
    data: approvedReviews,
    pagination: reviewsJson.pagination,
  };
}

export async function getRandomReviews(): Promise<Review[]> {
  const reviewsResponse = await getReviews();
  const reviews = reviewsResponse.data;

  const shuffled = [...reviews].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}
