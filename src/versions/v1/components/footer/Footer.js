import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../../../shared/contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const textClasses = `footer-text text-center text-[var(--color-subtitle)] ${
    isDark ? "!text-[var(--color-text-dark)]" : ""
  }`;
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div mt-8 pb-4">
        <p className={textClasses}>
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
