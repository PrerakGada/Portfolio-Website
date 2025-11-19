import React, {useContext} from "react";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {greeting, splashScreen} from "../../../../shared/data/portfolio";
import StyleContext from "../../../../shared/contexts/StyleContext";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center ${
        isDark ? "bg-[var(--color-dark-background)]" : "bg-[var(--color-light-background-1)]"
      }`}
    >
      <div className="h-[50vh] w-full max-w-xl">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="mt-6 text-4xl">
        <span className="text-[var(--color-subtitle)]">&lt;</span>
        <span className="px-5 font-[var(--font-signature)] text-[2.5rem] font-bold">
          {greeting.username}
        </span>
        <span className="text-[var(--color-subtitle)]">/&gt;</span>
      </div>
    </div>
  );
}
