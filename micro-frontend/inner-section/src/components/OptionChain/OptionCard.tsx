import React from "react"
import styles from "@/styles/global.module.css";
import { OptionCardProps } from "@/types/optionChain/OptionCard.types"
import Image from "next/image";

const OptionCard:React.FC<OptionCardProps> = ({
    title,
    description,
    icon,
})=>{
    return(
        <>
        <div className={styles.optionCard}>
            <Image src={icon} width={40} height={40} alt={title} />
            <h1 className={styles.optionCard__title}>{title}</h1>
            <p className={styles.optionCard__description}>{description}</p>
        </div>
        </>
    )
}

export default OptionCard