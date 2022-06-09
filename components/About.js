import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h2>About</h2>
      <hr />
      <p>
      As a full-stack developer my preferred programming language is JavaScript. I can also utilize technologies such as Next.js, React.js, React
      Native, Express.js and MongoDB. I enjoy solving complex problems using clean, reusable code. I am primarily self-taught, however, I have also completed a Front End Web Development Bootcamp through
       <a href = 'https://www.nucamp.co/' className={styles.link}> Nucamp</a>.
      </p>
    </div>
  );
}