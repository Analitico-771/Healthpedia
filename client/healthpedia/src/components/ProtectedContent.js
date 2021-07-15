import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';

const apiKEY = process.env.REACT_APP_API_KEY;

const Healthpedia = () => {
  return <div style={{height: "100vh"}} className="d-flex flex-column justify-content-center align-items-center">
  <h1 className="text-white">Healthpedia Page</h1>

  <h3 className="text-warning">This is a protected page</h3>
  <h5 className="text-info">This page should only be seen if user is logged in</h5>
 </div>
};

export default Healthpedia;
