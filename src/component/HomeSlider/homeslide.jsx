import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


import Image4 from '../../Assets/HomeSlider/beach-towel-in-wind (1).jpg'
import Image5 from '../../Assets/HomeSlider/slow-fashion-dress-from.jpg'
import Image6 from '../../Assets/HomeSlider/womens-tshirts.jpg'
export default function homeslide() {
  return (
    <div className="container-lg title  mb-5 w-75 ">
    <Carousel interval={1000} className=' '>
       <Carousel.Item>
         <img  className='w-100' src={Image4} alt="" />
         <Carousel.Caption>
           <h3 className=' text-black'>First slide label</h3>
           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
         </Carousel.Caption>
       </Carousel.Item>
      <Carousel.Item >  
       <img className='w-100' src={Image5} alt="" />
         <Carousel.Caption>
           <h3 className=' text-black'>Second slide label</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
       <img className='w-100' src={Image6} alt="" />
         <Carousel.Caption>
           <h3 className=' text-black'>Third slide label</h3>
           <p>
             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
           </p>
         </Carousel.Caption>
       </Carousel.Item>
     </Carousel>
     <br />
    </div>
  
  )
}
