import React from 'react'
import { Outlet } from 'react-router-dom'
import style from './Lyout.module.css'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Footer from '../Footer/Footer'

export default function layout() {


  return <>
    <Nav/>
    <Outlet>
      
    </Outlet>
    
    {/* <Footer/> */}
  </>
}
