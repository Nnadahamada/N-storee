import React from 'react'
import style from './Footer.module.css'

export default function Footer() {


  return <> 

{/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
<div className=" mt-5 ">
  <footer className={`${style.back} text-black text-center text-lg-start bg-main`}>
    {/* <!-- Grid container --> */}
    <div className="container p-2">
      {/* <!--Grid row--> */}
      <div className="row mt-4">
        {/* <!--Grid column--> */}
        <div className="col-lg-6   col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">About Brand</h5>

          <p>
           Our Bra <i class="fa-solid fa-n"></i> d based in ismalia ,Egypt 
          </p>        

          <div className="mt-5">
            {/* <!-- Facebook --> */}
            <a type="button" className="btn btn-floating  btn-lg m-1"><i className="fab fa-facebook-f"></i></a>
            {/* <!-- Dribbble --> */}
            {/* <!-- Twitter --> */}
            <a type="button" className="btn btn-floating  btn-lg m-1"><i className="fab fa-twitter"></i></a>
            {/* <!-- Google + --> */}
            <a type="button" className="btn btn-floating  btn-lg m-1"><i className="fab fa-instagram"></i></a>
            
          </div>
        </div>
       
        <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
          <ul className="fa-ul" >
            <li className="mb-4">
              <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Ismailia , Egypt</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">hamadan736@gmail.com</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+201205789501</span>
            </li>
          </ul>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        {/* <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Opening hours</h5>

          <table className="table text-center text-white">
            <tbody className="fw-normal">
              <tr>
                <td>Mon - Thu:</td>
                <td>8am - 9pm</td>
              </tr>
              <tr>
                <td>Fri - Sat:</td>
                <td>8am - 1am</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9am - 10pm</td>
              </tr>
            </tbody>
          </table>
        </div> */}
        {/* <!--Grid column--> */}
      </div>
      {/* <!--Grid row--> */}
    </div>
    {/* <!-- Grid container --> */}

    {/* <!-- Copyright --> */}
    <div className="text-center p-3" >
      © 2024 Copyright:
      <a className="text-white" href="https://www.instagram.com/hima.hamoda/">IH-studio</a>
    </div>
    {/* <!-- Copyright --> */}
  </footer>

</div>

  </>
}