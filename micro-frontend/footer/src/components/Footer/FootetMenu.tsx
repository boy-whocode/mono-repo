import Link from "next/link"
import React, { useRef, useState } from "react"
import styles from "@/styles/global.module.css";
import FooterMenuProps, { FooterMenuItemsProps } from "@/types/Footer/footerMenu.types"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useCloseWhenClickOutside } from "@/hooks/useCloseWhenClickOutside";

const FooterMenuItem:React.FC<FooterMenuItemsProps> = ({title, submenu})=>{
    const [isOpen, setIsOpen] = useState(false)
    const submenuOptionRef = useRef(null)
    useCloseWhenClickOutside(isOpen, setIsOpen, submenuOptionRef)
    return (
      <div className={styles.footerItems} ref={submenuOptionRef}>
        <h3 className={styles.footerItems__title}
        onClick={()=>setIsOpen(!isOpen)}
        >
          <MdOutlineKeyboardArrowRight />
          {title}
        </h3>
        <ul
          className={`${styles.footerItems__options} ${
            !isOpen && styles["footerItems__options--collapse"]
          }`}
        >
          {submenu?.map((sub, i) => {
            return (
              <li key={i}>
                <Link href={sub.href}>{sub.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
}

const FooterMenu:React.FC<FooterMenuProps> = ({data})=>{
    return (
      <>
        <div className={styles.footerMenu}>
          <h3 className={styles.footerMenu__title}>{data.title}</h3>
          <ul>
            {data.options.map((menu, i) => {
              return (
                <>
                  {menu.as === "submenu" ? (
                    <FooterMenuItem
                      title={menu.title}
                      submenu={menu.submenu!}
                    />
                  ) : (
                    <div>
                        <Link href={menu.href!}>{menu.title}</Link>
                    </div>
                  )}
                </>
              );
            })}
          </ul>
        </div>
      </>
    );
}

export default FooterMenu