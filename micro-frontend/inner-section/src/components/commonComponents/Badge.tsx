import styles from "@/styles/global.module.css";
import { BadgeProps } from "@/types/commonComponents/Badge.types";
import React from "react";

const Badge:React.FC<BadgeProps> = ({ type, text }) => {
  let className = `${styles.badge} 
  ${type === "danger"?styles["badge--danger"]:
    type === "outlined"?styles["badge--outlined"]:""}`;
  return <div className={className}>{text}</div>;
};

export default Badge;
