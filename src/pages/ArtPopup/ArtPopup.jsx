import React from "react";
import "./artpopup.css";
import imgurl from "../../assets/W2.png";
import { motion } from "framer-motion";

const img = imgurl;

function ArtPopup(props) {
  return props.trigger ? (
    <>
      <motion.div
        className="pop"
        initial={{
          opacity: 0,          transition: { duration: 0.1 },
        }}
        animate={{ opacity: 1, width: 100 ,           transition: { duration: 0.1 },}}
        exit={{
          transition: { duration: 0.1 },
          // x: window.innerHeight,
        }}
      >
        <div className="popup">
          <button onClick={() => props.setTrigger(false) }>x</button>
          <img src={img} alt="Art 1" />
          {props.children}
        </div>
      </motion.div>
    </>
  ) : (
    ""
  );
}

export default ArtPopup;
