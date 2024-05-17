

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'
import size from "../../Assets/Home/OIP (2).jpg";
import text from '../All Products/AllProducts.module.css'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export default function Allpage() {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3005/posts/${id}`);
            const data = await response.json();
            setPost(data);
        };
        fetchData();
    }, [id]);

    const handleClick = () => {
        // window.open(`https://wa.me/+971543686466?text=I%20want%20to%20order%20${post.title}%20for%20${post.price}`);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-5">
                    <img src={post.img} alt={post.title} />
                </div>

                <div className="col-md-7">
                    <p>{post.prefix}</p>
                    <h1>{post.description}</h1>
                    <img className='mt-1' width={500} height={350} src={size} alt="" />
              <div className="container">
                <div className="row">
               
                   <div className="col-md-6 d-flex justify-content-start">
                   <a href={`https://wa.me/+971543686466?text=I%20want%20to%20order%20this%20Item%20${post.img}%20for%20${post.price}`}>
                        <Button className='d-flex justify-content-end btn-light' onClick={handleClick}> Order now </Button>
                        
                    </a>
                    
                   </div>
                   <div className="col-md-6 d-flex justify-content-start    ">
              <p className={`${text.text}  mt-4 text-black-100`}> Price: {post.price} EG</p>
            </div>
                </div>
              </div>
                   
                </div>
              
              


            </div>
        </div>
    );
}

