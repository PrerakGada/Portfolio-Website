import React, {useState, useContext} from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../../../shared/contexts/StyleContext";

const ToggleSwitch = () => {
  const {isDark} = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  return (
    <label className="relative inline-block w-[50px] h-[26px]">
      <input
        type="checkbox"
        className="scale-50"
        checked={isDark}
        onChange={() => {
          styleContext.changeTheme();
          setChecked(!isChecked);
        }}
      />
      <span
        className={`
          absolute cursor-pointer top-0 left-0 right-0 bottom-0
          rounded-[34px] flex items-center
          transition-all duration-[400ms]
          ${isDark ? 'bg-toggle-check' : 'bg-toggle-slider'}
          before:content-[''] before:absolute before:h-[26px] before:w-[28px]
          before:left-0 before:bottom-0 before:bg-text-light
          before:rounded-full before:grid before:place-items-center
          before:transition-all before:duration-[400ms]
          ${isDark ? 'before:translate-x-[26px]' : ''}
          peer-focus:shadow-[0_0_1px_#2196f3]
        `}
      >
        <span
          className={`
            z-10 flex items-center ml-0.5 transition-transform duration-[400ms]
            ${isDark ? 'translate-x-[26px]' : ''}
          `}
        >
          {isChecked ? emoji("🌜") : emoji("☀️")}
        </span>
      </span>
    </label>
  );
};
export default ToggleSwitch;
