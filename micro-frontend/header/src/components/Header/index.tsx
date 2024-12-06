import React, { useLayoutEffect, useState } from "react";
import styles from "./Header.module.css";
import { ImagePath } from "@/utils/imagePath";
import Searchbar from "../commonComponent/Searchbar";
import { NavLinksProps } from "@/types/header/NavLinks.types";
import NavLinks from "./NavLinks";
import { FaCrown, FaGripLines } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MdOutlineNotificationsActive } from "react-icons/md";
import Avatar from "../commonComponent/Avatar";
import { IoMdCloseCircle } from "react-icons/io";

const Header: React.FC = () => {
  const [menuItems, setMenuItems] = useState<NavLinksProps[]>([])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
      const fetchData = async () => {
        try {
          const response = await fetch("/data/headerData.json");
          const data = await response.json();
          console.log(data, "<=== data");
          setMenuItems(data.data.menu);
        } catch (error) {
          console.error("Error fetching JSON:", error);
        }
      };
      useLayoutEffect(() => {
        fetchData();
      }, []);
  const handleToggleTheme = () => {
    document.body.classList.toggle("dark");
  };
  const handleSearch =(val:string)=>{
    console.log(val)
  }
  const handleOpenMobileMenu = ()=>{
    setIsMenuOpen(true)
  }
  const handleCloseMobileMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <h1 className={styles.logo}>
            <img src={ImagePath.logo} width={"100%"} alt="logo" />
          </h1>
          <div className={styles.header__search}>
            <Searchbar placeholder="Search Stock..." onSearch={handleSearch} />
          </div>
        </div>
        <nav>
          <ul className={styles.navList}>
            {menuItems?.map((menu, i) => (
              <NavLinks
                title={menu.title}
                as={menu.as}
                submenu={menu.submenu}
                key={i}
              />
            ))}
            <li>
              <div className={styles.navList__refer}>
                <div>
                  <FaCrown fill="#FFC107" />
                </div>
                <h3>Refer and Earn</h3>
              </div>
            </li>
            <li>
              <ul className={styles.navList__icons}>
                <li>
                  <IoReorderThreeOutline />
                </li>
                <li>
                  <HiOutlineShoppingCart />
                </li>
                <li>
                  <MdOutlineNotificationsActive />
                </li>
              </ul>
            </li>
            <li>
              <Avatar firstName="Rahul" lastName="Sharma" isPremium />
            </li>
          </ul>
          {!isMenuOpen && <div className={styles.hamburger}>
            <button onClick={handleOpenMobileMenu}>
              <FaGripLines />
            </button>
          </div>}
        </nav>
        {/* mobile menu */}
        <div
          className={`${styles.mobileMenu} ${
            !isMenuOpen && styles["mobileMenu--collapse"]
          }`}
        >
          <button
            className={styles.mobileMenu__closeBtn}
            onClick={handleCloseMobileMenu}
          >
            <IoMdCloseCircle />
          </button>
          <div className={styles.mobileMenu__inner}>
            <div className={styles.mobileMenuContent}>
              <div className={styles.mobileMenuContent__userDetails}>
                <div>
                  <Avatar firstName="Rahul" lastName="Sharma" isPremium />
                </div>
                <ul className={styles.navList__icons}>
                  <li>
                    <IoReorderThreeOutline />
                  </li>
                  <li>
                    <HiOutlineShoppingCart />
                  </li>
                  <li>
                    <MdOutlineNotificationsActive />
                  </li>
                </ul>
              </div>
              <div className={styles.mobileMenuContent__search}>
                <Searchbar
                  placeholder="Search Stock..."
                  onSearch={handleSearch}
                />
              </div>

              <nav>
                <ul>
                  {menuItems?.map((menu, i) => (
                    <NavLinks
                      title={menu.title}
                      as={menu.as}
                      submenu={menu.submenu}
                      key={i}
                    />
                  ))}
                  <li></li>
                  <li>
                    <div className={styles.navList__refer}>
                      <div>
                        <FaCrown fill="#FFC107" />
                      </div>
                      <h3>Refer and Earn</h3>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
