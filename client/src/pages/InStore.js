import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import "./InStore.css";

const InStore = () => {

let count = 0;
const googleTranslateElementInit = () => {
if(count === 0){
  console.log("HERE");
    new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
}
count++;
}
useEffect(() => {
var addScript = document.createElement('script');
  addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
}, [])

  return (
    <div className="in-store-div">
      <div id = "google_translate_element"></div>
      <Link className="image-2" to="/desktop-1" />
      <div className="find-us-in-store">Find Us In Store!</div>
      <iframe
        className="frame-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.767698759445!2d-96.34349628455644!3d30.612314898476512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864683cfb6d8cfe5%3A0x92e1351d7a3258e2!2sChick-fil-A!5e0!3m2!1sen!2sus!4v1668966577313!5m2!1sen!2sus"
      />
    </div>
  );
};

export default InStore;
