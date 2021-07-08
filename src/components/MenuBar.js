import React from "react";

function MenuBar({ displayedItem, handleTabChange }) {
  /*

  The 'span' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

const tabChange = (e) => {
  if (e.target.className === "item") {
    return handleTabChange(e)
  }
}

  return (
    <div className="ui four item menu">
      <span onClick={tabChange} id="Profile" className={displayedItem === "Profile" ? "item active" : "item"}>
        <i className="user large icon" />
      </span>

      <span onClick={tabChange} id="Photos" className={displayedItem === "Photos" ? "item active" : "item"}>
        <i className="photo large icon" />
      </span>

      <span onClick={tabChange} id="Cocktails" className={displayedItem === "Cocktails" ? "item active" : "item"}>
        <i className="cocktail large icon" />
      </span>

      <span onClick={tabChange} id="Pokemon" className={displayedItem === "Pokemon" ? "item active" : "item"}>
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;
