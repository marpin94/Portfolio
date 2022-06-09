import styles from "../styles/Header.module.css";


export default function Header() {
  return (
    <main className={styles.header}>
      <img src="/assets/images/profilePic.jpg" className={styles.dp} />

      <h1 className={styles.name}>Martin Arpin</h1>

      <p className={styles.about}>
       Full Stack Web Developer
        <br />

      </p>
    </main>
  );
}