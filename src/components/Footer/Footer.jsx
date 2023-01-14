import styles from './Footer.module.css';
console.log(styles);

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Kazan, 2023</p>
        </footer>
    )
}

export default Footer;