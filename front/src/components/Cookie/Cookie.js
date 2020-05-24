import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCookieState } from "../../redux/cookie/cookieAction";

import "./cookie.css";
import icon from "../../media/close.svg";

export default () => {
  const dispatch = useDispatch();
  const { state } = useSelector((state) => state.cookie);
  const message =
    "Les cookies assurent le bon fonctionnement de nos services, en utilisant ces derniers, vous acceptez l'utilisation des cookies. Voir les Conditions Générales d'Utilisations";

  if (!state) return null;

  return (
    <div className="fixed-bottom cookie p-2">
      <div />
      <div>
        <p className="m-0 text-center">{message}</p>
      </div>
      <div onClick={() => dispatch(setCookieState())}>
        <img alt="logo-fermeture" src={icon} />
      </div>
    </div>
  );
};
