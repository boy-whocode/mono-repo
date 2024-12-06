import React from "react"
import { ButtonProps } from "@/types/commonComponents/Button.types"
import styles from "@/styles/global.module.css";


const Button:React.FC<ButtonProps> =({text, type, varient, onClick, icon})=>{
    const className = `${styles.btn} ${varient == "primary" ? styles["btn--primary"]:
    varient === "bold" ? styles["btn--bold"] :
    varient === "outlined" ? styles["btn--outlined"] : styles.btn}`
    
    return (
      <>
        <button type={type} onClick={onClick} className={className}>
          <div className={styles.btn__title}>
            <h1>
          {text}
            </h1>
          {icon && <span>{icon}</span>}
          </div>
        </button>
      </>
    );
}

export default Button