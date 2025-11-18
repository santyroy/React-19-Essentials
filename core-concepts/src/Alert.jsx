// import "./Alert.css";
import styles from "./Alert.module.css";

export const Alert = ({ children, type = "success" }) => {
  return (
    <div
      //   style={{
      //     backgroundColor: type === "success" ? "#10B981" : "#EF4444",
      //     color: "black",
      //     padding: "16px",
      //     borderRadius: "8px",
      //     marginBottom: "16px",
      //   }}

      //   className={`alert ${type}`}

      className={`${styles.alert} ${styles[type]}`}
    >
      {children}
    </div>
  );
};
