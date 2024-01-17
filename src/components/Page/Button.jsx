import React from "react";
export function Button({ value, onButtonClick, type }) {
  return (
    <button type={type} onClick={onButtonClick}>
      {value}
    </button>
  );
}

export function ButtonLogin() {
  return <Button type="submit" value="вход" onClick={() => {}} />;
}

export function ButtonRegistration() {
  return <Button type="button" value="регистрация" onClick={() => {}} />;
}

export function ButtonHelp() {
  return <Button type="button" value="помощь" onClick={() => {}} />;
}
