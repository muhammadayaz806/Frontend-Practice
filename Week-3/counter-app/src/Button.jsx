import styles from "./Button.module.css";

export default function Button({onClick, text}) {
  return <button style={styles.button} onClick={onClick}>{text}</button>;
}
