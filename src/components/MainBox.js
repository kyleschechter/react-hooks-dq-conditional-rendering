import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  /*
    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.
    Think of a way to track which menu item was selected. 
    - Which component should have state? 
    - Which component should have methods to control state? 
    - Where should these methods be called?
  */
  let detailsToDisplay 
  const [displayedItem, setDisplayeditem] = useState("Profile")

  if (displayedItem === "Profile") {
    detailsToDisplay = <Profile />
  } else if (displayedItem === "Photos") {
    detailsToDisplay = <Photos />
  } else if (displayedItem === "Cocktails") {
    detailsToDisplay = <Cocktails />
  } else if (displayedItem === "Pokemon") {
    detailsToDisplay = <Pokemon />
  }

  const handleTabChange = (e) => {
    setDisplayeditem(e.target.id)
  }
  

  return (
    <div>
      <MenuBar 
      displayedItem={displayedItem}
      handleTabChange={handleTabChange}
      />
      {detailsToDisplay}
    </div>
  );
}

export default MainBox;
