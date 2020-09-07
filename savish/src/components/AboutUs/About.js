import React from 'react'
import princalsir from '../../photos/pricy.jpg';
import habbusir from '../../photos/habbu.jfif';
import teampic from '../../photos/IMG_7245.JPG';
import styles from "./AboutUs.module.css"
import Carosel from "../Carosel/Carosel"
import "../../css/important.css"
import classnames from 'classnames';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
const About=()=>{ 
//     useEffect(() => {
//     AOS.init();
//     AOS.init({
//       delay:"100",
//     duration:"3000",
//     easing:"ease-in-out"
//     })
// }, [])
    // constructor() {
    //     super()

    //     this.onClickLeft = this.onClickLeft.bind(this)
    //     this.onClickRight = this.onClickRight.bind(this)

    //     const img0 = require('../../photos/sa1.JPG');
    //     const img1 = require('../../photos/sa2.JPG');
    //     const img2 = require('../../photos/sa4.JPG');
    //     const img3 = require('../../photos/sa5.JPG');
    //     const img4 = require('../../photos/sa6.JPG');
    //     const img5 = require('../../photos/sa7.JPG');
    //     const img6 = require('../../photos/sa8.JPG');
    //     const img7 = require('../../photos/sa3.JPG');
    //     const img8 = require('../../photos/saboii.JPG');
    //     this.state = {
    //         index: 0,
    //         imgList: [img0, img1, img2, img3, img4, img5, img6, img7, img8],
    //         name: ['Savishkar', 'Rohit Narulkar', 'Suniti Gaonkar', 'Aishwarya Parab', 'Shivam Raikar', 'Aarushi Raghav', 'Vritika Naik', 'Erisha Ferrao', 'Deepraj Bhosle'],
    //         designation: ['Council', 'President', 'Chairperson', 'Literature section', 'Art Section', 'PR & Managment', 'Technical Adviser', 'Secretary', 'Assistance Technical Advisar']
    //     }
    // }
    // onClickLeft() {
    //     if (this.state.index - 1 === -1) {
    //         this.setState({
    //             index: this.state.imgList.length - 1
    //         })
    //     }
    //     else {
    //         this.setState({
    //             index: this.state.index - 1
    //         })
    //     }
    // }

    // onClickRight() {
    //     if (this.state.index === this.state.imgList.length - 1) {
    //         this.setState({
    //             index: 0
    //         })
    //     }
    //     else {
    //         this.setState({
    //             index: this.state.index + 1
    //         })
    //     }
    // }
    // render() {
        return (
            <>
            <h1 className={classnames(styles.abtheading,"heading")} data-aos="fade-down" 
    data-aos-offset="50">About Us</h1>
            <div className={styles.teamimagediv} data-aos="zoom-in" data-aos-anchor-placement="center-bottom">
                <img src={teampic} className={styles.teampic} alt="team"/>
                <p className={styles.whatissavishkar}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now u</p>
            </div>
            <Carosel />
            <div className={styles.gecfacultyvoice} data-aos="fade-down">
                    <img src={princalsir} alt="sir" />
                    <h4 >From the Principals desk</h4>
                    <p >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distri<br />
                        <span>-Principal <br />Goa College Engineering<br /></span>
                    </p>
            </div>
            <div className={styles.gecfacultyvoice}  data-aos-easing="ease-in-out" data-aos="fade-down">
                    <img src={habbusir} alt="habbu sir" />
                    <h4 >From the Faculty </h4>
                    <p >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distri<br />
                        <span>-Habbu Sir <br />Goa College Engineering<br /></span>
                    </p>
            </div>
            </>
             )
    }
// }

export default About
