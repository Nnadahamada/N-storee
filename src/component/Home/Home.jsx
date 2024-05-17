import { BallTriangle, Watch } from 'react-loader-spinner'
import React, { useState ,useEffect } from 'react'
import  { Suspense } from 'react';
import style from './Home.module.css'
import { Link } from 'react-router-dom';
import Prouducts from '../Prouducts/Prouducts';
import HomeSlider from '../HomeSlider/homeslide';
import Table from '../Our story/ourstory';
import Suits from '../Suits/Suits';
import VideoHome from '../Video comp/Video';
import Footer from '../Footer/Footer';
import { FidgetSpinner } from 'react-loader-spinner';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading? (
        <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
         (<Watch
          visible={true}
          height="100"
          width="100"
          radius="48"
          color="#000000"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />)
        </div>
      ) : (
        <>
          <HomeSlider />
          <div className="container w-75">
            <div className="div">
              <h1 className={`${style.Font}`}>Chosen By Neu</h1>
            </div>
          </div>

          <Prouducts />
          <div className="container w-75 mb-5">
            <div className="div">
              <h1 className={`${style.Font}`}>Your Fav Suit</h1>
            </div>
          </div>
          <Suits />
          <VideoHome />
          <Table />
          <Footer />
        </>
      )}
    </div>
  );
}