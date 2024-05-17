import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Card, Col, Row, Button, CardGroup } from 'react-bootstrap';
import image6 from "../../Assets/Suits/OIP.jpg";
import image7 from "../../Assets/Suits/OIP (1).jpg";
import image5 from "../../Assets/Suits/R.jpg";
import image1 from "../../Assets/Home/Screenshot 2024-05-02 203336.png";
import image2 from "../../Assets/Home/Screenshot 2024-05-02 203353.png";
import image3 from "../../Assets/Home/Screenshot 2024-05-02 203421.png";
import Suitsdetails from '../Suits/Suitsdetials';
 import TexT from '../Suits/Suits.module.css'

    
    const Suitsdata = [
      { id: 4, image: image7, title : 'Integer posuere'  },
      { id: 5, image: image6, title : ' This is a wider '  },
      { id: 6, image: image5, title: 'natural lead-in ' },
   

    ];
    
    export default function Suits()  {
      return (
       <div className="container w-75">
         <CardGroup className={` container gap-3 `}>
          
          {Suitsdata.map((Suits) => (
            <Card key={Suits.id} className={``}>
              <Link to={`Suitsdetails/${Suits.id}`}>
                <Card.Img variant="top" className='' src={Suits.image} />
              </Link>
              <Card.Body className='text-center'>
                <Card.Title className={`${TexT.text}`}>{Suits.title}</Card.Title>
                {/* <Card.Text>
           
                </Card.Text> */}    
                <Link to={`suitsdetails/${Suits.id}`}>
                  {/* <Button variant="primary">Click here</Button> */}
                </Link>
              </Card.Body>
            </Card>
          ))}
          <div className="container d-flex justify-content-center ">
            <Link to={`/AllProducts`}> <Button className=' font-monospace' variant="">show more <i class="fa-solid fa-arrow-down ms-2 mt-1"></i> </Button>
            </Link>
          </div>
          
        </CardGroup>
       </div>
      );
    }  

