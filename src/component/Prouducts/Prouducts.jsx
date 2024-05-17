import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Card, Col, Row, Button, CardGroup } from 'react-bootstrap';
import image6 from "../../Assets/Home/Screenshot 2024-05-02 203336.png";
import image7 from "../../Assets/Home/Screenshot 2024-05-02 203353.png";
import image5 from "../../Assets/Home/Screenshot 2024-05-02 203421.png";
import Productdetials from '../Home/Productdetials';
import TexT from '../Suits/Suits.module.css'
import Footer from '../Footer/Footer';


const productData = [
  { id: 1, image: image7, title : ' This is a wider ' },
  { id: 2, image: image7, title : 'natural lead-in '},
  { id: 3, image: image5,title : 'Integer posuere' },
];

export default function Prouducts() {
  return <>  <div className="container w-75">
      <CardGroup className={`container gap-3 mt-5 mb-5 `}>
      {productData.map((product) => (
        <Card key={product.id} className='  '>
          <Link to={`/Productdetials/${product.id}`}>
            <Card.Img variant="top"className=' ' src={product.image} />
          </Link>
          <Card.Body className='text-center'>
            <Card.Title className={`${TexT.text}`} >{product.title}</Card.Title>
            {/* <Card.Text>
             
            </Card.Text> */}
            <Link to={`/Productdetials/${product.id}`}>
              {/* <Button variant="primary">Click here</Button> */}
            </Link>
          </Card.Body>
        </Card>
      ))}
     
      
    </CardGroup>
    </div>
   
    </>
}