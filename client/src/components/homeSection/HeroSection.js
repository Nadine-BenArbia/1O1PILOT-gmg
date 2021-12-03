import React from 'react';
import './HeroSection.css'
import { Button } from '../Button/Button';

function HeroSection() {
    return (
    <div className='hero-container'>
           <img src="https://digi117.com/wp-content/uploads/2017/05/photo5195332693854891117-900x600.jpg" alt="workspace"/>
            <h1> Let's make your next great hire. Fast!</h1>
            <p> Ready to post a job? post an open 
                role in minutes Jobes you pay to post  </p>
         <p> Source,screen,and hire faster </p>
        <div classname='hero-btns'> 
         <Button 
         className='btns' 
         buttonStyle='btn--outline'
          buttonSize='btn--large'
          > 
          GET STARTED 
          </Button>
        </div>
       
    </div>
    )
}

export default HeroSection
