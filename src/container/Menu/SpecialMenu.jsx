import React from "react";

import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";

import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMeny flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Le titre du menu mon gars" />
      <h1 className="headtext__cormorant">Today's menu</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu_menu_heading">wine and beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <p>{wine.title}</p>
          ))}
        </div>
      </div>
      <div className='app_specialMenu-menu_img'>
          <img src={images.menu} alt="coktail" />
      </div>
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu_menu_heading">wine and beer</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <p>{cocktail.title}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
