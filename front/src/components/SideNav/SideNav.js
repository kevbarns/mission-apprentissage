import React from "react";
import Sidebar from "react-sidebar";
import { push } from "connected-react-router";
import { Nav, NavLink, NavItem } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

import { setMenuState } from "../../redux/menu/menuAction";
import TopBar from "../TopBar/TopBar";

import menu from "../../menu";
import closeButton from "../../media/close-light.svg";

import "./navbar.css";

const NavContent = ({ dispatch }) => {
  const handleClick = (link) => {
    dispatch(setMenuState(false));
    dispatch(push(link));
  };

  return (
    <div>
      <div className="title p-3">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="font-weight-bold m-0">Menu</h5>
          <img alt="logo-fermeture" src={closeButton} onClick={() => dispatch(setMenuState(false))} />
        </div>
      </div>
      <Nav vertical>
        {menu.map(({ title, link, icon }, key) => (
          <NavItem key={key}>
            <NavLink className="pointer" onClick={() => handleClick(link)}>
              <span className={`${icon} mr-2`} />
              {title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
};

export default ({ children }) => {
  const { state } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const handleChange = () => dispatch(setMenuState(!state));

  return (
    <Sidebar
      sidebar={<NavContent dispatch={dispatch} />}
      open={state}
      onSetOpen={() => dispatch(setMenuState(!state))}
      styles={{ sidebar: { background: "white", zIndex: "1031" } }}
    >
      {/* <button onClick={() => handleChange()}>Open sidebar</button> */}
      <TopBar handleChange={handleChange} state={state} />
      {children}
    </Sidebar>
  );
};
// const Sidebar = withRouter(Side);
