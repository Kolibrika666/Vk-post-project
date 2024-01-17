import React from "react";
import { ButtonLogin, ButtonRegistration } from "../Button";
import s from "./Sidebar.module.scss";
function Sidebar() {
  return (
    <section className={s.sidebar}>
      <form className={s.loginForm}>
        <label>Email</label>
        <input type="text" name="name"></input>
        <label>Пароль</label>
        <input type="pass" name="name"></input>
      </form>
      <article>
        <ButtonLogin />
        <ButtonRegistration />
      </article>
    </section>
  );
}

export default Sidebar;
