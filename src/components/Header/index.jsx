// import styles from "./index.module.css";

// const Header = () => {
//   return (
//     <div className={styles.header_container}>
//       <div className={styles.header_wrapper}>
//         <img
//           className={styles.header_img}
//           src="https://upload.wikimedia.org/wikipedia/commons/1/11/Test-Logo.svg"
//         />
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useContext } from "react";
import styles from "./index.module.css";
import { ThemeContext } from "../../ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.header_container}>
      <div className={styles.header_wrapper}>
      </div>
      <div className={styles.theme_toggle}>
        <button onClick={toggleTheme} className={styles.toggle_btn}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default Header;


