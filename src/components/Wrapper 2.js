import React from "react";
import Nav from "./Nav";
// import Nav from "./Nav";

const Wrapper = (props) => {
  const { includeNav } = props;

  return (
    <React.Fragment>
      {includeNav && <Nav/>}
      {props.children}
    </React.Fragment>
  );
};

export default Wrapper;


