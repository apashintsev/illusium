import { FC } from "react";

import logo from "./../../assets/images/logo.svg";
import styles from "./Header.module.scss";
import { ConnectCustom } from "../ConnectCustom/CustomConnect";
type IProps = {};

export const Header: FC<IProps> = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <a href="/">
              <img src={logo} alt="logo" width="300" />
            </a>
          </div>
          
          <div className={styles.connect_wallet}>
            <ConnectCustom></ConnectCustom>
          </div>
        </div>
      </header>
    </>
  );
};
