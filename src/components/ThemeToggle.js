import {FaMoon, FaSun} from "react-icons/fa";
import "./ThemeToggle.css";

function ThemeToggle({ dark, setDark }) {
  return (
    <button className="theme-btn" onClick={() => setDark(!dark)}>
      {dark ? <FaSun /> : <FaMoon /> }
    </button>
  );
}

export default ThemeToggle;
