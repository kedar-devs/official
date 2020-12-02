import React from "react";
import styles from "./Credits.module.css";
import Card from "./Card";

const Credits = () => {
  const Kedar = require("../../photos/Kedar.jpeg");
  const Riddhi = require("../../photos/Riddhi.jpg");
  const Deborah = require("../../photos/Deborah.jpeg");
  const Rohit = require("../../photos/Rohit.JPG");
  // const Deepraj = require("../../photos/Deepraj.jpeg");
  const Vipul = require("../../photos/Vipul.jpeg");
  // const i = require("../../photos/Rohit.JPG");
  const Suniti = require('../../photos/suniti.jpg');
  const Aishwarya = require('../../photos/aish.jpg');
  const Shivam = require('../../photos/shivam.jpg');
  const Arushi = require('../../photos/aru.jpg');
  const Vritika = require('../../photos/vri.jpg');
  const Erisha = require('../../photos/eri.jpg');
  const Deepraj = require('../../photos/deep.jpg');
  
  const Developers = [
    {
      name: "Rohit Narulkar",
      photo: Rohit,
      position: "President",
      status: "Mechanical Department",
      github: "https://github.com/row-hit-wiz",
      twitter: "https://mobile.twitter.com/row_hit_wiz",
      instagram: "https://www.instagram.com/row_hit_wiz/",
      linkedin: "https://www.linkedin.com/in/rohit-narulkar-571a98176/",
    },
    {
      name: "Suniti Gaonkar",
      photo: Suniti,
      position: "Chairperson",
      status: "Computer Department",
      github: "https://github.com/kedar-devs",
      twitter: "",
      instagram: "https://www.instagram.com/kedar_devs/",
      linkedin: "https://www.linkedin.com/in/kedar-devasthali-0b8b081b5",
    },
    {
      name: "Aishwarya Parab",
      photo: Aishwarya,
      position: "Literature section",
      status: "Electronics and Telecommunication Department",
      github: "https://github.com/kedar-devs",
      twitter: "",
      instagram: "https://www.instagram.com/kedar_devs/",
      linkedin: "https://www.linkedin.com/in/kedar-devasthali-0b8b081b5",
    },
    {
      name: "Shivam Raikar",
      photo: Shivam,
      position: "Art Section",
      status: "Mechanical Department",
      github: "https://github.com/kedar-devs",
      twitter: "",
      instagram: "https://www.instagram.com/kedar_devs/",
      linkedin: "https://www.linkedin.com/in/kedar-devasthali-0b8b081b5",
    },
    {
      name: "Aarushi Raghav",
      photo: Arushi,
      position: "PR & Managment",
      status: "Computer Department",
      github: "https://github.com/kedar-devs",
      twitter: "",
      instagram: "https://www.instagram.com/kedar_devs/",
      linkedin: "https://www.linkedin.com/in/kedar-devasthali-0b8b081b5",
    },
    {
      name: "Vritika Naik",
      photo: Vritika,
      position: "Technical Advisor",
      status: "Computer Department",
      github: "https://github.com/kedar-devs",
      twitter: "",
      instagram: "https://www.instagram.com/kedar_devs/",
      linkedin: "https://www.linkedin.com/in/kedar-devasthali-0b8b081b5",
    },
    {
      name: "Erisha Ferrao",
      photo: Erisha,
      position: "Secretary",
      status: "Electronics and Telecommunication Department",
      github: "https://github.com/kedar-devs",
      twitter: "",
      instagram: "https://www.instagram.com/kedar_devs/",
      linkedin: "https://www.linkedin.com/in/kedar-devasthali-0b8b081b5",
    },
    {
      name: "Deepraj Bhosule",
      photo: Deepraj,
      position: "Assistance Technical Advisar",
      status: "Computer Department",
      github: "https://github.com/DeeprajB",
      twitter: "https://twitter.com/DeeprajB012?s=08",
      instagram: "https://www.instagram.com/deeprajbhosale012/",
      linkedin: "https://www.linkedin.com/in/deepraj-bhosale-70b4ba194/",
    },
    {
      name: "Kedar Devasthali",
      photo: Kedar,
      position: "Website(Team Leader, Ideator, Backend Developer (Node.js))",
      status: "Computer Department",
      github: "https://github.com/kedar-devs",
      twitter: "",
      instagram: "https://www.instagram.com/kedar_devs/",
      linkedin: "https://www.linkedin.com/in/kedar-devasthali-0b8b081b5",
    },
    {
      name: "Riddhi Siddarkar",
      photo: Riddhi,
      position: "Website(Front End Developer (React.js))",
      status: "Computer Department",
      github: "https://github.com/riddhisiddarkar",
      twitter: "https://twitter.com/siddarkar?s=08",
      instagram: "https://www.instagram.com/riddhisiddarkar/",
      linkedin: "https://www.linkedin.com/in/riddhi-siddarkar-075378191/",
    },
    {
      name: "Deborah Mendes",
      photo: Deborah,
      position: "Website(Front End Developer (React.js))",
      status: "Computer Department",
      github: "https://github.com/Deb77",
      twitter: "",
      instagram: "https://www.instagram.com/deb_el_mendes/",
      linkedin: "https://www.linkedin.com/in/deborah-mendes-068a32151",
    },
    {
      name: "Vipul Chodankar",
      photo: Vipul,
      position: "Website(For your suggestions regarding heroku and cloudinary)",
      status: "Computer Department",
      github: "https://github.com/vipulchodankar",
      twitter: "https://twitter.com/vipul_chodankar?s=08",
      instagram: "https://www.instagram.com/vipul_chodankar/",
      linkedin: "https://www.linkedin.com/in/vipulchodankar/",
    },
  ];

  return (
    <div className={styles.top}>
      <p className={styles.header}>Team</p>
      <div className={styles.container}>
        {Developers.map((dev) => (
          <Card dev={dev} />
        ))}
      </div>
    </div>
  );
};

export default Credits;
