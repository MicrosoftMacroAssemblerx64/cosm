"use client";

import React, { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispApp = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Crisp.configure(`618b226e-5706-40ea-b12b-f08eea49a81a`);
    }
  }, []);

  return null;
};

export default CrispApp;
