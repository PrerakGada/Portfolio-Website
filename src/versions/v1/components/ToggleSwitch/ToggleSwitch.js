import React, {useState, useContext} from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../../../shared/contexts/StyleContext";

const ToggleSwitch = () => {
  const styleContext = useContext(StyleContext);
  const {isDark} = styleContext;
  const [isChecked, setChecked] = useState(isDark);

  const handleToggle = () => {
    styleContext.changeTheme();
    setChecked(prev => !prev);
  };

  return (
    <label className="switch relative inline-flex h-[26px] w-[50px] items-center">
      <input
        type="checkbox"
        checked={isDark}
        onChange={handleToggle}
        className="peer absolute inset-0 z-10 cursor-pointer opacity-0"
        aria-label="Toggle theme"
      />
      <span className="pointer-events-none absolute inset-0 rounded-[34px] bg-[var(--toggle-slider-bg)] transition-colors duration-300 peer-checked:bg-[var(--toggle-check)] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[rgba(33,150,243,0.35)]"></span>
      <span
        className="pointer-events-none absolute left-0 top-0 flex h-[26px] w-[28px] items-center justify-center rounded-full bg-[var(--color-text-dark)] text-[0.875rem] text-[var(--color-dark-background)] transition-transform duration-300 peer-checked:translate-x-[24px] max-md:text-[0.75rem]"
        aria-hidden="true"
      >
        {isChecked ? emoji("🌜") : emoji("☀️")}
      </span>
    </label>
  );
};
export default ToggleSwitch;
