import styles from './Image.module.css';

const Image = (props) => {
    return (
        <div className={styles.div}>
            <img src={props.path} alt="" className={styles.img} />
        </div>
    );
}

export default Image;