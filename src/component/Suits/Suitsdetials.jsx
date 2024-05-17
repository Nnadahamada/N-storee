import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import image6 from "../../Assets/Suits/OIP.jpg";
import image7 from "../../Assets/Suits/OIP (1).jpg";
import image5 from "../../Assets/Suits/R.jpg";
import image1 from "../../Assets/Home/Screenshot 2024-05-02 203336.png";
import image2 from "../../Assets/Home/Screenshot 2024-05-02 203353.png";
import image3 from "../../Assets/Home/Screenshot 2024-05-02 203421.png";
import Button from 'react-bootstrap/Button';
import Suits from './Suits';
import size from "../../Assets/Home/OIP (2).jpg";


const Suitsdata = [
    { id: 4, image: image7, title: ' Womens suits come in a variety of styles, colors, and materials, ranging from classic black or navy blue to more trendy and  ', price: 10.99 },
    { id: 5, image: image6, title: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', price: 15.99, },
    { id: 6, image: image5, title: 'his is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer', price: 19.99, },
    { id: 1, image: image1, title : ' This is a wider '  },
    { id: 2, image: image2, title : 'natural lead-in '},
    { id: 3, image: image3,title : 'Integer posuere' },
];

export default function Suitsdetials() {
    const { id } = useParams();
    const [Suits, setSuits] = useState({});

    useEffect(() => {
        const Suits = Suitsdata.find((p) => p.id === parseInt(id));
        if (Suits) {
            setSuits(Suits);
        } else {
            console.log(`Product with id ${id} not found`);
        }
    }, [id]);

    return (
        <div className="container mt-5  ">
            <div className="row mb-5">
                <div className='col-md-5'>
                    {Suits.image && (
                        <img className='w-75' src={Suits.image} alt={Suits.title} />
                    )}
                   </div>
                   <div className="col-md-7  ">
                    <h4 className='mt-5 ' >{Suits.title}</h4>
                    <div className="container d-flex justify-content-end">
            <img width={500} height={350} src={size} alt="" />
        </div>

                    <div className="row mt-5">
                    <div className="col-md-6 d-flex justify-content-start">
                   <a href={`https://wa.me/+971543686466?text=I%20want%20to%20order%20this%20Item%20${Suits.Title}%20for%20${Suits.price}`}>
                        <Button className='d-flex justify-content-end'> order Now </Button>
                        
                    </a>
                    </div>
                        <div className="col-md-6">
                            <p className=' text-lg-end mt-4'>{Suits.price}</p>
                        </div>
                    </div>
                    {/* {Suits.description && <p>{Suits.description}</p>} */}
                </div>
            </div>
           
        </div>
       
    );
}

