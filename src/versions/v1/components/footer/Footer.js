import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../../../shared/contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="mt-8 pb-4">
        <p className={`text-center ${isDark ? 'text-text-light' : 'text-text-subtitle'}`}>
          {emoji("Made with ❤️ by Prerak Gada")}
        </p>
        {/* <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a href="https://github.com/PrerakGada/portfolio-website">
            developerFolio
          </a>
        </p> */}
      </div>
    </Fade>
  );
}
