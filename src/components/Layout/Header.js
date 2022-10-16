import React, { Fragment } from "react";
import classes from "./Header.module.css";
import meals from "../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img src={meals} alt="meals" />
      </div>
    </Fragment>
  );
};

export default Header;
