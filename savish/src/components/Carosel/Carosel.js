import React,{useEffect,useState} from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Carosel.module.css'
function Carosel() {
	const [state, setState] = useState({})
	useEffect(() => {
        const img1 = require('../../photos/sa2.JPG');
        const img2 = require('../../photos/sa4.JPG');
        const img3 = require('../../photos/sa5.JPG');
        const img4 = require('../../photos/sa6.JPG');
        const img5 = require('../../photos/sa7.JPG');
        const img6 = require('../../photos/sa8.JPG');
        const img7 = require('../../photos/sa3.JPG');
        const img8 = require('../../photos/saboii.JPG');
        setState({
            index: 0,
            imgList: [ img1, img2, img3, img4, img5, img6, img7, img8],
            name: ['Rohit Narulkar', 'Suniti Gaonkar', 'Aishwarya Parab', 'Shivam Raikar', 'Aarushi Raghav', 'Vritika Naik', 'Erisha Ferrao', 'Deepraj Bhosle'],
            designation: ['President', 'Chairperson', 'Literature section', 'Art Section', 'PR & Managment', 'Technical Adviser', 'Secretary', 'Assistance Technical Advisar']
        })
	},[])
	const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1000 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1000, min: 700},
          items: 2
        },
        mobile: {
          breakpoint: { max: 700 , min: 0 },
          items: 1
        }
	  };
	  
		if(!state.imgList)
	  		return<></>
	else{
	return (
    <>
    {/* <h1 className={styles.heading}><span>Saviskar Council 2019-2020</span></h1> */}
    <h1 className={styles.heading} data-aos="fade-down" 
    data-aos-offset="50"  data-aos-delay="10" 
    data-aos-duration="1000">Saviskar Council 2019-2020</h1>
		<div className={styles.spacing}>
            <Carousel responsive={responsive}>
				{state.imgList.map((e,i)=>
					<div className={styles.card} key={i} >
					<img src={e} alt="Avatar" className={styles.image}/>
					<div className={styles.container}>
				<h4 className={styles.name}>{state.name[i]}</h4> 
						<p className={styles.designation}>{state.designation[i]}</p> 
					</div> 
					</div>	
				)}
			{/* <div className={styles.card} >
				<img src="https://cdn.pixabay.com/photo/2014/05/03/01/03/macbook-336704_960_720.jpg" alt="Avatar" style={{width:"100%"}}/>
				<div className={styles.container}>
					<h4><b>John Doe</b></h4> 
					<p>Architect & Engineer</p> 
				</div> 
				</div>*/}
			</Carousel>
        </div>
        <h1 className={styles.heading} data-aos="fade-down" 
    data-aos-offset="50"  data-aos-delay="10" 
    data-aos-duration="1000">From the Faculty</h1>
        </>
	)}
}

export default Carosel
