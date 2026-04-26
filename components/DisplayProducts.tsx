"use client";

import React, { useState } from "react";
import { Layers, MoveRight, DotIcon, InfinityIcon, X, Package, Zap, ShoppingBag, User, MoreHorizontal, Sparkles } from "lucide-react";
import RevealAnimation from "./framer/RevealAnimation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const DisplayProducts = ({ products }: { products: any }) => {
  const productGroups = products?.data?.groups ?? [];
  const [selectedGroup, setSelectedGroup] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All", icon: Package },
    { id: "nitro", label: "Nitro", icon: Zap },
    { id: "boosts", label: "Server Boost", icon: ShoppingBag },
    { id: "decoration", label: "Decoration", icon: Sparkles },
    { id: "accounts", label: "Account", icon: User },
    { id: "services", label: "Services", icon: Layers },
    { id: "members", label: "Discord Members", icon: MoreHorizontal },
  ];

  const getProductCategory = (product: any) => {
    const title = product?.title?.toLowerCase() || "";
    if (title.includes("nitro") || title.includes("token")) return "nitro";
    if (title.includes("boost")) return "boosts";
    if (title.includes("decoration") || title.includes("profile")) return "decoration";
    if (title.includes("account") || title.includes("aged")) return "accounts";
    if (title.includes("service")) return "services";
    if (title.includes("member")) return "members";
    return "services";
  };

  const getProductFeatures = (productFields: any[]) => {
    let features = [] as any;

    productFields?.map((field: any) => {
      if (field?.name === "Features") {
        features = field?.default?.split("|") ?? [];
      }
    });
    return features;
  };

  const setProductsInAscendingOrder = (products: any) => {
    return [...products].sort((a: any, b: any) => a.price - b.price);
  };

  const getLowestPrice = (products: any[]) => {
    if (!products || products.length === 0) return 0;
    return Math.min(...products.map((p) => p.price));
  };

  const groupCollections = productGroups.filter((group: any) => 
    (group?.products_bound || []).length > 1
  );

  const singleProducts = productGroups.flatMap((group: any) => {
    const products = group?.products_bound || [];
    if (products.length === 1) {
      return [{
        ...products[0],
        groupName: group?.title,
        category: getProductCategory(products[0]),
      }];
    }
    return [];
  });

  const filteredGroups = selectedCategory === "all"
    ? groupCollections
    : groupCollections.filter((group: any) => {
        const categories = new Set((group?.products_bound || []).map((p: any) => getProductCategory(p)));
        return categories.has(selectedCategory);
      });

  const filteredProducts = selectedCategory === "all"
    ? singleProducts
    : singleProducts.filter((p: any) => p.category === selectedCategory);

  return (
    <div className="px-4 mt-10">
      <div className="middle">
        <div className="relative flex items-center justify-center mb-8">
          <div className="relative w-full max-w-7xl mx-auto">
            <div className="relative bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-xl p-1.5">
              <div className="relative flex items-center justify-center gap-1.5 md:gap-2 flex-wrap">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = selectedCategory === category.id;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={cn(
                        "relative z-10 flex items-center gap-2 px-4 md:px-5 py-2 rounded-lg whitespace-nowrap text-sm md:text-base font-medium transition-colors duration-200",
                        isActive ? "text-white" : "text-neutral-400 hover:text-neutral-200"
                      )}
                    >
                      <Icon size={16} className={isActive ? "text-green-400" : ""} />
                      <span>{category.label}</span>
                      {isActive && (
                        <>
                          <div className="absolute inset-0 rounded-lg bg-neutral-700 -z-10"></div>
                          <div className="absolute bg-green-400 rounded-full -z-10 shadow-lg shadow-green-500/50" style={{ width: "1px", height: "1px", left: "15%", top: "30%" }}></div>
                          <div className="absolute bg-green-300 rounded-full -z-10 shadow-lg shadow-green-500/50" style={{ width: "1.5px", height: "1.5px", left: "35%", top: "20%" }}></div>
                          <div className="absolute bg-green-400 rounded-full -z-10 shadow-lg shadow-green-500/50" style={{ width: "1px", height: "1px", left: "50%", top: "50%" }}></div>
                          <div className="absolute bg-green-300 rounded-full -z-10 shadow-lg shadow-green-500/50" style={{ width: "1.5px", height: "1.5px", left: "65%", top: "80%" }}></div>
                          <div className="absolute bg-green-400 rounded-full -z-10 shadow-lg shadow-green-500/50" style={{ width: "1px", height: "1px", left: "85%", top: "70%" }}></div>
                          <div className="absolute bg-green-400 rounded-full -z-10 shadow-lg shadow-green-500/50" style={{ width: "1px", height: "1px", left: "25%", top: "75%" }}></div>
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/10 via-green-500/10 to-green-500/10 -z-10"></div>
                        </>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {filteredGroups.map((group: any, index: number) => {
            const products = group?.products_bound ?? [];
            const lowestPrice = getLowestPrice(products);
            const isBestSelling = index === 0;

            return (
              <RevealAnimation
                delay={index * 0.1}
                screenReveal={true}
                key={group.uniqid}
              >
                <div className="group relative h-full">
                  {/* Best Selling Badge */}
                  {isBestSelling && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="px-4 py-1 bg-[#34A350] text-white text-[10px] font-bold tracking-widest rounded-full shadow-lg shadow-green-500/30 uppercase border border-green-400/50">
                        best selling
                      </div>
                    </div>
                  )}

                  <div className="relative h-full bg-neutral-900/80 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg border-green-500/50 hover:border-green-400 hover:shadow-green-500/20">
                    <div className="relative w-full h-48 overflow-hidden bg-neutral-800">
                      {group?.cdn_image_url ? (
                        <img
                          src={group.cdn_image_url}
                          alt={group.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => console.error('Group image failed to load:', group.cdn_image_url)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          No Image
                        </div>
                      )}
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-green-500/20 text-green-400 text-xs font-medium flex items-center gap-1.5 border border-green-500/30">
                        <Layers size={12} />
                        <span>Collection</span>
                      </div>
                    </div>

                    <div className="p-4 space-y-3">
                      <h3 className="font-semibold text-lg text-white line-clamp-2 min-h-[3rem]">{group?.title}</h3>
                      <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm text-neutral-400">Starting at $</span>
                          <span className="text-2xl font-bold text-transparent bg-clip-text brand_gradient">{lowestPrice}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => setSelectedGroup(group)}
                        className="group/arrow relative inline-flex items-center justify-center overflow-hidden px-6 font-medium shadow-md duration-300 ease-out w-full rounded-lg bg-background py-2.5 text-sm border border-neutral-700 hover:border-green-500/50 transition-colors"
                      >
                        <span className="ease absolute inset-0 flex h-full w-full brand_gradient -translate-x-full items-center justify-center bg-white text-white duration-300 group-hover/arrow:translate-x-0">
                          <MoveRight style={{ color: '#fff' }} />
                        </span>
                        <span className="absolute flex h-full w-full transform items-center justify-center font-bold transition-all duration-300 ease-in-out group-hover/arrow:translate-x-full text-white">
                          View Collection
                        </span>
                        <span className="invisible relative">Button</span>
                      </button>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            );
          })}

          {filteredProducts.map((product: any, index: number) => {
            const isBestSelling = filteredGroups.length === 0 && index === 0;

            return (
              <RevealAnimation
                delay={(filteredGroups.length + index) * 0.1}
                screenReveal={true}
                key={product.uniqid}
              >
                <div className="group relative h-full">
                  {/* Best Selling Badge */}
                  {isBestSelling && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                      <div className="px-4 py-1 bg-[#34A350] text-white text-[10px] font-bold tracking-widest rounded-full shadow-lg shadow-green-500/30 uppercase border border-green-400/50">
                        best selling
                      </div>
                    </div>
                  )}

                  <div className="relative h-full bg-neutral-900/80 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg border-green-500/50 hover:border-green-400 hover:shadow-green-500/20">
                    <div className="relative w-full h-48 overflow-hidden bg-neutral-800">
                      {product?.image_url ? (
                        <img
                          src={product.image_url}
                          alt={product.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => console.error('Image failed to load:', product.image_url)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          No Image
                        </div>
                      )}
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-green-500/20 text-green-400 text-xs font-medium flex items-center gap-1.5 border border-green-500/30">
                        <Layers size={12} />
                        <span>{product.category}</span>
                      </div>
                    </div>

                    <div className="p-4 space-y-3">
                      <h3 className="font-semibold text-lg text-white line-clamp-2 min-h-[3rem]">{product?.title}</h3>
                      <div className="flex items-center justify-between pt-2 border-t border-neutral-800">
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm text-neutral-400">$</span>
                          <span className="text-2xl font-bold text-transparent bg-clip-text brand_gradient">{product?.price}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="text-xs text-neutral-400">Stock:</div>
                          {product?.stock !== -1 ? (
                            <div className={cn("text-xs", product?.stock == 0 ? "text-red-500" : "text-green-500")}>
                              {product?.stock}
                            </div>
                          ) : (
                            <InfinityIcon size={16} className="text-green-500" />
                          )}
                        </div>
                      </div>

                      <button
                        data-shoppex-product-id={product?.uniqid}
                        data-shoppex-quantity="1"
                        data-shoppex-theme="auto"
                        data-shoppex-flow="embed"
                        type="submit"
                        className="group/arrow relative inline-flex items-center justify-center overflow-hidden px-6 font-medium shadow-md duration-300 ease-out w-full rounded-lg bg-background py-2.5 text-sm border border-neutral-700 hover:border-green-500/50 transition-colors"
                      >
                        <span className="ease absolute inset-0 flex h-full w-full brand_gradient -translate-x-full items-center justify-center bg-white text-white duration-300 group-hover/arrow:translate-x-0">
                          <MoveRight style={{ color: '#fff' }} />
                        </span>
                        <span className="absolute flex h-full w-full transform items-center justify-center font-bold transition-all duration-300 ease-in-out group-hover/arrow:translate-x-full text-white">
                          Purchase
                        </span>
                        <span className="invisible relative">Button</span>
                      </button>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            );
          })}
        </div>

        {selectedGroup && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-[#0a2418] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-[#0a2418] p-4 border-b border-muted-foreground/20 flex justify-between items-center">
                <h2 className="text-2xl font-bold">{selectedGroup?.title}</h2>
                <button
                  onClick={() => setSelectedGroup(null)}
                  className="p-2 hover:bg-[#2a2a2b] rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-4">
                <div className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-2 gap-5">
                  {setProductsInAscendingOrder(selectedGroup?.products_bound ?? [])?.map(
                    (product: any, index: number) => (
                      <div
                        key={index}
                        className="bg-[#2a2a2b] rounded-lg p-4"
                      >
                        {product?.image_url && (
                          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-[#0a2418]">
                            <img
                              src={product.image_url}
                              alt={product.title}
                              className="w-full h-full object-cover"
                              onError={(e) => console.error('Image failed to load:', product.image_url)}
                            />
                          </div>
                        )}

                        <div className="text-xl font-semibold mb-2">{product?.title}</div>
                        <div className="flex flex-row justify-between items-end mb-4">
                          <div className="text-3xl font-semibold brand_gradient text-transparent bg-clip-text">
                            {`$${product?.price}`}
                          </div>
                          <div className="flex flex-row items-center">
                            <div className="text-xs text-muted-foreground">{`Stock:`}</div>
                            {product?.stock !== -1 ? (
                              <div
                                className={cn(
                                  "text-xs ml-1",
                                  product?.stock == 0
                                    ? "text-red-500"
                                    : "text-green-500 "
                                )}
                              >
                                {product?.stock}
                              </div>
                            ) : (
                              <InfinityIcon
                                size={16}
                                className="text-green-500 ml-1"
                              />
                            )}
                          </div>
                        </div>

                        <div className="w-full border-t border-[1px] border-muted-foreground/20 my-2"></div>
                        <div className="text-muted-foreground/80 text-sm mb-2">
                          Features
                        </div>
                        <div className="flex flex-col gap-1 mb-4">
                          {getProductFeatures(product?.custom_fields)?.map(
                            (feature: any, index: number) => (
                              <div
                                key={index}
                                className="flex flex-row items-center"
                              >
                                <DotIcon
                                  size={25}
                                  className="text-[#34A350]"
                                />
                                <span className="text-sm">{feature}</span>
                              </div>
                            )
                          )}
                        </div>

                        <div className="brand_gradient rounded-md p-[1px]">
                          <button
                            data-shoppex-product-id={product?.uniqid}
                            data-shoppex-quantity="1"
                            data-shoppex-theme="auto"
                            data-shoppex-flow="embed"
                            type="submit"
                            className="w-full rounded-md bg-[#0a2418] py-2 text-sm hover:bg-gradient-to-tr from-[#34A350] to-[#1a5228] duration-200"
                          >
                            Purchase
                          </button>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayProducts;
