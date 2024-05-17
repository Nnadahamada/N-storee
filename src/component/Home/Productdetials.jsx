import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import image6 from "../../Assets/Home/Screenshot 2024-05-02 203336.png";
import image7 from "../../Assets/Home/Screenshot 2024-05-02 203353.png";
import image5 from "../../Assets/Home/Screenshot 2024-05-02 203421.png";
import size from "../../Assets/Home/OIP (2).jpg";
import Button from 'react-bootstrap/Button';


const productData = [
  { id: 1, image: image6, title: ' Womens suits come in a variety of styles, colors, and materials, ranging from classic black or navy blue to more trendy and  ', price: 10.99 },
  { id: 2, image: image7, title: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', price: 15.99,  },
  { id: 3, image: image5, title: 'his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer', price: 19.99, },
];

export default function Productdetials() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const product = productData.find((p) => p.id === parseInt(id));
    if (product) {
      setProduct(product);
    } else {
      console.log(`Product with id ${id} not found`);
    }
  }, [id]);

  return (
     <div className="container mt-5  ">
      <div className="row mb-5">
        <div className='col-md-5'>
          {product.image && (
            <img className='w-100'  src={product.image} alt={product.title} />
          )}
        </div>

        <div className="col-md-7  ">
          <h4 className='mt-5 ' >{product.title}</h4>
          <div className="container d-flex justify-content-end">
            <img width={500} height={350} src={size} alt="" />
        </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <Button variant="primary">Click here</Button>
            </div>
            <div className="col-md-6">
              <p className=' text-lg-end mt-4'> Price : {product.price} EG</p>
            </div>

          </div>
          {product.description && <p>{product.description}</p>}


        </div>
      </div>
      
    </div>
    
  );
}

