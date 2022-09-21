import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"

function Index() {
  return (
    <motion.div className="index-body" initial={{opacity : 0, width : 0}}  animate={{opacity : 1, width : "100%"}} exit={{opacity : 0, x : -window.innerHeight, transition: {duration: 0.3 } }} >
      <div id="abc">
        <nav>
          <ul>
            <li>
              <a className="atag">
                <Link to="/about" href="/about">About</Link>
              </a>
            </li>
          </ul>
        </nav>
        <div className="qut"></div>
        <div className="main">
          <h1 data-shadow="dang!">The aim of art is to represent not the outward appearance of things, but their inward significance.</h1>
          <Link to="/gallery" href="/gallery">  
          <button className="button-86 shopbtn" role="button" >
            Gallery
          </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Index;
