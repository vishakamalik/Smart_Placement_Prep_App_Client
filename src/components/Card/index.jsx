import styles from "./index.module.css";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext"; 

const Card = (props) => {
  const { name = "", imageUrl = "" } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.card_container} ${styles[theme]}`}>
      <img
        className={styles.card_img}
        src={imageUrl}
        alt={name}
      />
      <p>{name}</p>
    </div>
  );
};

export default Card;
