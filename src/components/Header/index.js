import React, { useEffect, useState } from "react";
import "./style.css";
import ViplusLogo from "../../images/logo/viplus.svg";
import goldenStar from "../../images/logo/golden-star.png";
import { IoIosArrowDown, IoIosCart, IoIosSearch } from "react-icons/io";
import { Dropdown, Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu,
} from "../MaterialUI";
import { useDispatch, useSelector } from "react-redux";
import { login, signout, getCartItems, signup as _signup } from "../../actions";
import Cart from "../UI/Cart";

const Header = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // state cart value
  const cart = useSelector((state) => state.cart);

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    dispatch(_signup(user));
  };

  const userLogin = () => {
    if (signup) {
      userSignup();
    } else {
      dispatch(login({ email, password }));
    }
  };

  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, []);

  const renderLoggedInMenu = () => {
    return (
      <NavDropdown title={auth.user.fullName} id="basic-nav-dropdown">
        <NavDropdown.Item href="#">My Profile</NavDropdown.Item>
        <NavDropdown.Item href="/account/orders">Orders</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#" onClick={logout}>
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    );
  };

  const newUserNavBar = () => {
    return (
      <a
        className="nav-bar-btn mx-3 p-2 rounded-2"
        onClick={() => {
          setSignup(false);
          setLoginModal(true);
        }}
      >
        Login/Signup
      </a>
    );
  };

  return (
    <>
      <Navbar bg="light" variant="light" expand="md" sticky="top">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
              alt="viplus logo"
              src={ViplusLogo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            Viplus
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/photo-gallery">Gallery</Nav.Link>
            </Nav>
            <Navbar.Text>
              <div>
                <a href={`/cart`} className="cart nav-bar-btn px-2 py-1 mx-3">
                  <Cart count={Object.keys(cart.cartItems).length} />
                  <span style={{ margin: "0 10px" }}>Cart</span>
                </a>
              </div>
            </Navbar.Text>
            <Navbar.Text>
              {auth.authenticate ? renderLoggedInMenu() : newUserNavBar()}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
        <div className="authContainer">
          <div className="row">
            <div className="leftspace col">
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="rightspace col">
              <div className="loginInputContainer">
                {auth.error && (
                  <div style={{ color: "red", fontSize: 12 }}>{auth.error}</div>
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                )}

                <MaterialInput
                  type="text"
                  label="Email/Mobile Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MaterialInput
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // rightElement={<a href="#">Forgot?</a>}
                />
                <MaterialButton
                  title={signup ? "Register" : "Login"}
                  bgColor="var(--brand-color)"
                  textColor="#ffffff"
                  style={{
                    margin: "40px 0 20px 0",
                  }}
                  onClick={userLogin}
                />

                {!signup ? (
                  <p className="m-4 text-center w-75 mx-auto">
                    Don't have an account ?
                    <span
                      onClick={() => {
                        setLoginModal(true);
                        setSignup(true);
                      }}
                      style={{ color: "#2874f0" }}
                    >
                      Sign Up
                    </span>
                  </p>
                ) : (
                  <p className="m-4 text-center w-75 mx-auto">
                    Already a User ?
                    <span
                      onClick={() => {
                        setSignup(false);
                        setLoginModal(true);
                      }}
                      style={{ color: "#2874f0" }}
                    >
                      Login
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Header;
