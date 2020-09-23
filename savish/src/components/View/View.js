import React from "react";
import FileViewer from "react-file-viewer";
import styles from "./View.module.css";
//filename.split('.').pop()
const View = () => {
  const type=localStorage.getItem("data")
  return (
    <div className={styles.top}>
      <div className={styles.container}>
        <FileViewer className={styles.file} fileType={type.split('.').pop()} filePath={localStorage.getItem("data")} />
      </div>
    </div>
  );
};

export default View;
