import React from "react";
import styles from "./Credits.module.css";
import Card from "./Card";

const Credits = () => {
  const Kedar = require("../../photos/Kedar.jpeg");
  const Riddhi = require("../../photos/Riddhi.jpg");
  const Deborah = require("../../photos/Deborah.jpeg");
  const Rohit = require("../../photos/Rohit.JPG");
  const Deepraj = require("../../photos/Deepraj.jpeg");
  const Vipul = require("../../photos/Vipul.jpeg");
  const Developers = [
    {
      name: "Kedar Devasthali",
      photo: Kedar,
      position: "Team Leader, Ideator, Backend Developer",
      status: "Computer Department",
      github: "https://github.com/kedar-devs",
      twitter: "",
      instagram: "https://www.instagram.com/kedar_devs/",
      linkedin: "https://www.linkedin.com/in/kedar-devasthali-0b8b081b5",
    },
    {
      name: "Riddhi Siddarkar",
      photo: Riddhi,
      position: "Front End Developer (React.js)",
      status: "Computer Department",
      github: "https://github.com/riddhisiddarkar",
      twitter: "https://twitter.com/siddarkar?s=08",
      instagram: "https://www.instagram.com/riddhisiddarkar/",
      linkedin: "https://www.linkedin.com/in/riddhi-siddarkar-075378191/",
    },
    {
      name: "Deborah Mendes",
      photo: Deborah,
      position: "Front End Developer (React.js)",
      status: "Computer Department",
      github: "https://github.com/Deb77",
      twitter: "",
      instagram: "https://www.instagram.com/deb_el_mendes/",
      linkedin: "https://www.linkedin.com/in/deborah-mendes-068a32151",
    },
    {
      name: "Rohit Narulkar",
      photo: Rohit,
      position: "Content Manager",
      status: "Mechanical Department",
      github: "https://github.com/row-hit-wiz",
      twitter: "https://mobile.twitter.com/row_hit_wiz",
      instagram: "https://www.instagram.com/row_hit_wiz/",
      linkedin: "https://www.linkedin.com/in/rohit-narulkar-571a98176/",
    },
    {
      name: "Deepraj Bhonsale",
      photo: Deepraj,
      position: "Content Manager",
      status: "Computer Department",
      github: "https://github.com/DeeprajB",
      twitter: "https://twitter.com/DeeprajB012?s=08",
      instagram: "https://www.instagram.com/deeprajbhosale012/",
      linkedin: "https://www.linkedin.com/in/deepraj-bhosale-70b4ba194/",
    },
    {
      name: "Vipul Chodankar",
      photo: Vipul,
      position: "Suggested Cloudinary as a means of storing our content",
      status: "Computer Department",
      github: "https://github.com/vipulchodankar",
      twitter: "https://twitter.com/vipul_chodankar?s=08",
      instagram: "https://www.instagram.com/vipul_chodankar/",
      linkedin: "https://www.linkedin.com/in/vipulchodankar/",
    },
  ];

  return (
    <div className={styles.top}>
      <p className={styles.header}>Credits</p>
      <div className={styles.container}>
        {Developers.map((dev) => (
          <Card dev={dev} />
        ))}
      </div>
    </div>
  );
};

export default Credits;
