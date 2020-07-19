import  React from "react";

function Footer(){
    const year = new Date().getFullYear();
    const footertext= "Copyright"+year;
  return (<footer><p>{footertext}</p></footer>);
}

export default Footer;
