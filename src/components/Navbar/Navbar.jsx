import React from "react";
import "./Navbar.css";
import logo from "../../assets/MenuList/logo.png";
import { AiFillHome, AiOutlineHeart, AiOutlineMenu  } from "react-icons/ai";
import { BsSearch, BsCollectionPlayFill, BsPlusSquare } from "react-icons/bs";
import { ImCompass2 } from "react-icons/im";
import { RiMessengerLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="menuList__container">
      <div id="menuList__wrapper">
        <div id="menuList">
          <main>
            <Link to={"/"}>
              <img src={logo} alt="Instagram" />
            </Link>
          </main>
          <div>
            <span className="px-2 fs-4">
              <AiFillHome />
            </span>
            <Link className="px-3 text-decoration-none text-dark mt-2 fw-bold" to={"/"}>Home</Link>
          </div>
          <div>
            <span className="px-2 fs-4">
              <BsSearch />
            </span>
            <span className="px-3 text-decoration-none text-dark mt-2">Search</span>
          </div>
          <div>
            <span className="px-2 fs-4">
              <ImCompass2 />
            </span>
            <Link className="px-3 text-decoration-none text-dark mt-2" to={"/explore"}>Explore</Link>
          </div>
          <div>
            <span className="px-2 fs-4">
              <BsCollectionPlayFill />
            </span>
            <Link className="px-3 text-decoration-none text-dark mt-2" to={"/reels"}>Reels</Link>
          </div>
          <div>
            <span className="px-2 fs-4">
              <RiMessengerLine />
            </span>
            <Link className="px-3 text-decoration-none text-dark mt-2" to={"/direct"}>Messages</Link>
          </div>
          <div>
            <span className="px-2 fs-4">
              <AiOutlineHeart />
            </span>
            <span className="px-3 text-decoration-none text-dark mt-2">Notifications</span>
          </div>
          <div>
            <span className="px-2 fs-4">
              <BsPlusSquare />
            </span>
            <span className="px-3 text-decoration-none text-dark mt-2">Create</span>
          </div>
          <div>
            <span className="px-2 fs-4">
              <CgProfile />
            </span>
            <span className="px-3 text-decoration-none text-dark mt-2">Profile</span>
          </div>
        </div>
        <div id="settings">
          <div className="ms-3 mb-3">
            <span className="px-2 fs-4">
              <AiOutlineMenu />
            </span>
            <span className="px-3 text-decoration-none text-dark mt-2">More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
