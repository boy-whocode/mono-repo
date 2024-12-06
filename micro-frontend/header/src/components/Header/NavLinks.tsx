import styles from "./Header.module.css";
import { useCloseWhenClickOutside } from "@/hooks/useCloseWhenClickOutside";
import { NavLinksProps } from "@/types/header/NavLinks.types";
import Link from "next/link";
import React, { useRef, useState } from "react"
import { FaChevronDown } from "react-icons/fa";

const SubmenuDropdown:React.FC<{title:string,submenu:{title:string,href:string,as:"link"}[]}> =({title,submenu})=>{
    const [isOpen, setIsOpen] = useState(false)
  const menuItemRef = useRef(null);
useCloseWhenClickOutside(isOpen, setIsOpen, menuItemRef)
  return (
    <>
      <div ref={menuItemRef} className={styles.submenu}>
        <div
          className={styles.submenu__title}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <h1>{title}</h1>
          <span><FaChevronDown /></span>
        </div>
        <div
          className={`${styles.subemenu__options} ${
            !isOpen && styles["subemenu__options--collapse"]
          }`}
        >
          <ul>
            {submenu?.map((sub, i) => {
              return (
                <li>
                  <Link href={sub.href} title={sub.title}>
                    {sub.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
const NavLinks: React.FC<NavLinksProps> = ({ title, as, submenu, href=""}) => {


  return (
    <>
      <div>
        {as == "submenu" ? (
            <SubmenuDropdown title={title} submenu={submenu!}/>
        ) : (
            <Link href={href} title={title} />
        )}
      </div>
    </>
  );
};

export default NavLinks