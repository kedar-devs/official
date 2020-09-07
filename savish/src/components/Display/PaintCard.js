import React,{useState} from 'react'
import { Lightbox } from "react-modal-image";
import styles from './Display.module.css';

const PaintCard = ({post,ondelete,onAdd,data}) => {
    const [open,setOpen] = useState(false);
    return (
        <div>
            <div>
                <div className={styles.card} data-aos="fade-down" data-aos-offset="-100">
                <img className={styles.image} src={post.content} alt="couldn't load"/>
                <div className={styles.body}>
                    <div className={styles.title}>{post.painter||(post.firstname+post.lastname)}</div>
                    <div className={styles.subtitle}>{post.title}</div>
                    {ondelete&&(
                        <div className={styles.box}>
                            <button className={styles.outline} onClick={() => onAdd(data)}>Add</button>
                            <button className={styles.outline} onClick={() => ondelete(data)}>Delete</button>
                        </div>
                        
                    )}
                    <button className={styles.btn} onClick={() => setOpen(true)}>View</button>
                </div>
                </div>
              {
                open && (
                    <Lightbox medium={post.content} hideZoom={true} hideDownload={true} onClose={() => setOpen(false)}/>
                )
              }
            </div>
        </div>
    )
}

export default PaintCard
