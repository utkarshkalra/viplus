import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategoryUser } from "../../actions";
import { generatePublicUrl } from "../../urlConfig";

import black from "../../images/categories/black.jpg";
import designer from "../../images/categories/designer.jpg";
import pattern from "../../images/categories/pattern.jpg";

import "./style.category.css";
const Categories = () => {
  const categoryUser = useSelector((state) => state.categoryUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategoryUser());
  }, []);

  useEffect(() => {
    console.log("category cat====>", categoryUser);
  }, [categoryUser]);
  return (
    <div className="categories-div">
      <h2 className="pb-4">Categories</h2>
      <div className="category-wrapper">
        {categoryUser?.categoriesUser?.map((category, index) => {
          if (category.categoryImage)
            return (
              <div className="category flex" key={index}>
                <p>{category.name}</p>
                {category.categoryImage && (
                  // <a href={`/${category.slug}?cid=${category._id}`}>
                  //   <div className="rounded-circle z-depth-2 shadow category-img">
                  //     <img
                  //       alt="category-options"
                  //       src={generatePublicUrl(category.categoryImage)}
                  //       data-holder-rendered="true"
                  //     ></img>
                  //   </div>
                  // </a>
                  <a href={`/${category.slug}?cid=${category._id}`}>
                    <div className="rounded-circle z-depth-2 shadow category-img">
                      <img
                        alt="category-options"
                        src={
                          (index + 1) % 3 === 0
                            ? designer
                            : (index + 1) % 3 === 1
                            ? pattern
                            : black
                        }
                        data-holder-rendered="true"
                      ></img>
                    </div>
                  </a>
                )}
              </div>
            );
        })}
        {categoryUser?.categoriesUser?.map((category, index) => {
          if (category.categoryImage)
            return (
              <div className="category flex" key={index}>
                <p>{category.name}</p>
                {category.categoryImage && (
                  // <a href={`/${category.slug}?cid=${category._id}`}>
                  //   <div className="rounded-circle z-depth-2 shadow category-img">
                  //     <img
                  //       alt="category-options"
                  //       src={generatePublicUrl(category.categoryImage)}
                  //       data-holder-rendered="true"
                  //     ></img>
                  //   </div>
                  // </a>
                  <a href={`/${category.slug}?cid=${category._id}`}>
                    <div className="rounded-circle z-depth-2 shadow category-img">
                      <img
                        alt="category-options"
                        src={
                          (index + 1) % 3 === 0
                            ? designer
                            : (index + 1) % 3 === 1
                            ? pattern
                            : black
                        }
                        data-holder-rendered="true"
                      ></img>
                    </div>
                  </a>
                )}
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Categories;