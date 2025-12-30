import React from "react";
import { useLocation } from "react-router-dom";

import InspirationBlog from "../components/blog/InspirationBlog";
import NewsBlog from "../components/blog/NewsBlog";
import ProductUpdatesBlog from "../components/blog/ProductUpdatesBlog";
import CaseStudiesBlog from "../components/blog/CaseStudiesBlog";
import SustainabilityBlog from "../components/blog/SustainabilityBlog";

const Blog = () => {
  const { pathname } = useLocation();

  const isInspiration = pathname.includes("/inspiration");
  const isNews = pathname.includes("/news");
  const isProductUpdates = pathname.includes("/product-updates");
  const isCaseStudies = pathname.includes("/case-studies");
  const isSustainability = pathname.includes("/sustainability");


  return (
    <div className="w-full">
      {/* ✅ Main Professionals page → show ALL */}
      {pathname === "/blog" && (
        <>
          <InspirationBlog />
          <NewsBlog />
          <ProductUpdatesBlog />
          <CaseStudiesBlog />
          <SustainabilityBlog/>
        </>
      )}

      {/* ✅ Architects */}
      {isInspiration && <InspirationBlog />}

      {/* ✅ Interior Designers */}
      {isNews && <NewsBlog />}
      {isProductUpdates && <ProductUpdatesBlog />}
      {isCaseStudies && <CaseStudiesBlog />}
      {isSustainability && <SustainabilityBlog />}






    </div>
  );
};

export default Blog;