import React from "react";
import { useTypewriter } from "react-simple-typewriter";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const { text } = useTypewriter({
    words: ["Software Engineer", "Data Science and Analysis Enthusiast"],
    loop: {},
    typeSpeed: 75,
    deleteSpeed: 50
  });
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Saranya</h1>
        <p className={styles.description}>
          I'm a {text} with 3 years of experience using programming languages
          including Java, C#, Golang and Python, along with proficiency in
          frameworks like SQL, SSMS, Django and React. Reach out if you'd like
          to learn more!
        </p>
        <a href="mailto:saranyanunna@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
