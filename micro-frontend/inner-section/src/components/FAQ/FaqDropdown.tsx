import { FaqPropsTypes } from "@/types/faq/FaqDropdown.type";
import React, { useRef, useState } from "react";
import styles from "@/styles/global.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useCloseWhenClickOutside } from "@/hooks/useCloseWhenClickOutside";


const FaqDropdown:React.FC<FaqPropsTypes> = ({ question, answer }) => {
    const [isOpen, SetIsOpen] = useState(false)
    const dropdowmContainerRef = useRef(null)
    const handleToggle =()=>{
        SetIsOpen(!isOpen)
    }
    useCloseWhenClickOutside(isOpen,SetIsOpen,dropdowmContainerRef)
  return (
    <>
      <div className={styles.faqDropdown}
      onClick={handleToggle}
      ref={dropdowmContainerRef}
      >
        <h1 className={styles.faqDropdown__title}>
          <h3>{question}</h3>
          <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
        </h1>
        <div
          className={`${styles.faq__content} 
          ${
            isOpen ? styles["faq__content--expande"] : styles["faq__content--collapse"]
          }
          `}
        >
          {answer}
        </div>
      </div>
    </>
  );
};

export default FaqDropdown