import React,{useState,useEffect} from "react";
import styles from "./Display.module.css";
import { useHistory } from 'react-router-dom';

export default function Display({ posts }) {
  const [clicked,setClicked] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const goToViewPage = () => history.push("/view");
    if(clicked){
      goToViewPage();
    }
    return () => {
      setClicked(false);
    }
  }, [clicked,history])

  const redirect = (data) => {
    localStorage.setItem("data", data);
    setClicked(true);
  };
  return (
    <div className={styles.top}>
    <div className={styles.container}>
        {posts.map((post, k) => (
          <div
            key={k}
            className={styles.card}
            data-aos="fade-down"
            data-aos-offset="-100"
          >
            <img
              className={styles.image}
              src="https://images.unsplash.com/photo-1598391990342-311775e3d374?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              alt="couldn't load"
            />
            <div className={styles.body}>
              <div className={styles.title}>{post.poet || post.Author}</div>
              <div className={styles.subtitle}>{post.title}</div>
              <button
                className={styles.btn}
                onClick={() => redirect(post.content)}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
}
