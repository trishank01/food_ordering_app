import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Model.module.css";
const Backdrop = (props) => {
  return <button onClick={props.onbackdrop}  className={classes.backdrop}></button>;
};

const ModalOverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById('overlays')
const Model = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onbackdrop={props.onClose} /> , portalElement )}
      {ReactDOM.createPortal(<ModalOverLay >{props.children}</ModalOverLay> , portalElement)}
    </Fragment>
  );
};

export default Model;
