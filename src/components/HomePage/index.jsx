import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homepage}>
      <div className={styles.home_img}>
        <img className={styles.img} src="/home.jpg" />
      </div>
      <div className={styles.home_section}>
        <div className={styles.logo_wrapper}>
          <img className={styles.logo} src="/logo.png" />
        </div>
        <div className={styles.home_text}>
          <h1>Ready to Ace your Next Interview?</h1>
          <h3>Start the Quiz and Sharpen your Skills! <br></br>Practice Makes Perfect.</h3>
        </div>
        <div className={styles.btn_wrapper}>
          <button className={styles.btn} onClick={() => navigate("/home")}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
