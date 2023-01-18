import React from "react";
import styles from "./MenuIcon.module.scss";

interface MenuIconProps {
  children: string | React.ReactNode;
}
export default function MenuIcon(props: MenuIconProps) {
  return <div className={styles.IconBox}>{props.children}</div>;
}
