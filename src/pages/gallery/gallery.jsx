import React from "react";
import { useState } from "react";
import "./gallery.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ArtPopup from "../ArtPopup/ArtPopup";

function Gallery() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <motion.div
        id="def"
        className="gallery-container"
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        exit={{
          transition: { duration: 0.2 },
          x: window.innerHeight,
        }}
      >
        <div>
          <h1 className="title">Gallery</h1>
        </div>
        <div className="gcontainer">
          <ArtPopup
            trigger={buttonPopup}
            setTrigger={setButtonPopup}
          ></ArtPopup>

          <div className="info">
            <h1>Flow of TImE</h1>
            <span className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              exercitationem esse nostrum aliquam sed corrupti nulla laudantium
              ex unde, dolorem, eos excepturi dicta officiis aperiam recusandae,
              dolore numquam. Sint facere nisi numquam magni fuga placeat?
              exercitationem esse nostrum aliquam sed corrupti nulla laudantium
              ex unde, dolorem, eos excepturi dicta officiis aperiam recusandae,
              dolore numquam. Sint facere nisi numquam magni fuga placeat?
            </span>
          </div>
          <div className="righttab">
            <div className="container-6">
              <div className="btn btn-six" onClick={() => setButtonPopup(true)}>
                <span>Reveal The ART</span>
              </div>
            </div>
            <h1>18$</h1>
            <Link to="/" href="/">
              <div className="container-4">
                <div className="btn btn-four">
                  <span>Buy Now</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="pag">
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
        </div>
      </motion.div>
    </>
  );
}

export default Gallery;
