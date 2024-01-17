import React from "react";
import { ButtonHelp, ButtonLogin, ButtonRegistration } from "../Button";
import s from "./Header.module.scss";
function Header() {
  return (
    <header className={s.header}>
      <img
        src="https://oprosmoskva.ru/wp-content/uploads/vk-logo-psd.png"
        alt="logo"
      ></img>
      <article>
        <ButtonLogin />
        <ButtonRegistration />
        <ButtonHelp />
      </article>
    </header>
  );
}

export default Header;
