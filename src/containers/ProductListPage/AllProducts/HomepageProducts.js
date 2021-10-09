import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions";
import "./style.product.css";
import logo from "../../../images/2.jpg";
import logo2 from "../../../images/37.jpg";
import { BiRupee } from "react-icons/bi";
import { IoIosArrowForward, IoIosStar, IoMdCart } from "react-icons/io";
import { AiFillStar, AiFillThunderbolt } from "react-icons/ai";
import { generatePublicUrl } from "../../../urlConfig";
import Loading from "../../../components/UI/Loading/loading";

import { MaterialButton } from "../../../components/MaterialUI";
import { addToCart } from "../../../actions";

import { Alert, Spinner } from "react-bootstrap";

const NoProductsFound = () => {
  return (
    <div className="loading-div">
      <h1 className="Noprod">
        There are presently no products in selected category.
      </h1>
      <a href="/">go back</a>
    </div>
  );
};

const HomePageProducts = () => {
  const product = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsBySlug("Special-Designer-caps-TNSFikXkm8"));
  }, []);

  useEffect(() => {
    console.log("allProducts", product);
    console.log("allProducts", cart);
  }, [cart]);

  useEffect(() => {
    !cart.updatingCart &&
      setTimeout(() => {
        setShowAlert(false);
      }, 2500);
  }, [cart]);

  return (
    <>
      {showAlert && (
        <div className="alerts">
          {cart.updatingCart ? (
            <Alert variant="secondary">
              <Spinner animation="border" role="status" className="mx-2">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
              Adding to cart ...
            </Alert>
          ) : (
            <Alert variant="success">Added to cart </Alert>
          )}
        </div>
      )}
      {product.productRequest ? (
        <Loading />
      ) : product.products.length > 0 ? (
        <div className="product-container p-4" style={{ minHeight: "60vh" }}>
          <h2 className="pb-4 ">Best Seller</h2>

          <div class="row allproduct">
            {product?.products.map((prod, index) => {
              return (
                <div key={index} class="col-md-3 col-sm-6 my-2">
                  <div class="product-grid gap-1 rounded-3">
                    <div class="product-image">
                      <a href={`/${prod.slug}/${prod._id}/p`} class="image">
                        <img class="pic-1" src={prod.productPictures[0]} />
                        <img class="pic-2" src={prod.productPictures[1]} />
                      </a>
                    </div>
                    <div class="product-content">
                      <h3 class="title">
                        <a href="#">{prod.name}</a>
                      </h3>
                      <p>{prod.description.substring(0, 30) + "..."}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div class="price">
                          <BiRupee />
                          {prod.price}
                        </div>
                        <ul class="rating d-flex">
                          <li>
                            <AiFillStar />
                          </li>
                          <li>
                            <AiFillStar />
                          </li>
                          <li>
                            <AiFillStar />
                          </li>
                          <li>
                            <AiFillStar />
                          </li>
                          <li>
                            <AiFillStar />
                          </li>
                        </ul>
                      </div>
                      <div className="flexRow">
                        <MaterialButton
                          title="ADD TO CART"
                          bgColor="#ff9f00"
                          textColor="#ffffff"
                          style={{
                            marginRight: "5px",
                          }}
                          icon={<IoMdCart />}
                          onClick={() => {
                            const { _id, name, price } = prod;
                            const img = prod.productPictures[0].img;
                            setShowAlert(true);
                            dispatch(addToCart({ _id, name, price, img }));
                          }}
                        />
                      </div>
                    </div>{" "}
                  </div>
                </div>
              );
            })}
                        
          </div>
        </div>
      ) : (
        <NoProductsFound />
      )}
    </>
  );
};

export default HomePageProducts;
