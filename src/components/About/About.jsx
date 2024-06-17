import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Engineer</h3>
              <p>
                I'm a Software engineer with experience in building responsive,
                optimized sites and developing fast and optimised back-end
                system APIs. I have expertise in various languages and
                proficiency in frameworks, AWS services, and front end
                technologies.Additionally, I have created an e-commerce platform
                leveraging Vue.js, Django, and PostgreSQL, showcasing my prowess
                and deep understanding of software development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data science and AI expertise</h3>
              <p>
                I have worked with Large Language Models (LLMs) for generating
                insightful data and utilized GeoPandas to derive solutions
                showcasing my analytical abilities. My recent projects include
                developing an innovative AI platform using OpenAI APIs within a
                Django framework, designed to interpret and analyze the content
                of uploaded files.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analysis Engineer</h3>
              <p>
                I am passionate about data analysis engineering and have worked
                on projects that required transforming raw data into actionable
                insights. I am proficient in AWS services, GeoPandas, and
                building scalable data pipelines. Committed to driving
                data-driven decision-making and optimizing business processes.
              </p>
            </div>
          </li>
          <h3>
            I have undertaken diverse projects that demonstrate my ability to
            bridge the gap between theoretical knowledge and practical
            application. Notably, I developed a Twitter search engine using
            Django, PyLucene, and BERT, which harnesses advanced data retrieval
            and natural language processing techniques. This project underlines
            my skills in efficiently handling and analyzing large datasets.
          </h3>
        </ul>
      </div>
    </section>
  );
};
