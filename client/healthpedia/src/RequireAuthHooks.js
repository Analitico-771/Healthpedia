
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const RequireAuthHooks = (props) => {
  const history = useHistory();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if(!auth){
        history.push('/')
    }
  }, [auth])
  
  return props.children;
};

export default RequireAuthHooks;