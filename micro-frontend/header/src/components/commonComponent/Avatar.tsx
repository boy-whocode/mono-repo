import AvatarProps from "@/types/commonComponent/Avatar.types";
import React from "react";
import styles from "../Header/Header.module.css";
import { FaCrown } from "react-icons/fa";



const Avatar: React.FC<AvatarProps> = ({ firstName, lastName, isPremium }) => {
  const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();

  return (
    <div className={styles.avatar}>
      {isPremium && (
        <div className={styles.avatar__premium}>
          <FaCrown fill="#FFC107" />
        </div>
      )}
      {initials}
    </div>
  );
};

export default Avatar;
