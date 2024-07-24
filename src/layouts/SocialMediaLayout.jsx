import React from "react";

import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="https://www.facebook.com/bestelerim.com.tr" target="_blank">
        <BsFacebook />
      </a>
      <a href="https://www.instagram.com/bestelerim.com.tr" target="_blank">
        <BsInstagram />
      </a>
      <a href="https://x.com/BestelerimCom" target="_blank">
        <RiTwitterXFill />
      </a>
      <a href="https://www.youtube.com/@bestelerimcom" target="_blank">
        <BsYoutube />
      </a>
    </div>
  );
};
