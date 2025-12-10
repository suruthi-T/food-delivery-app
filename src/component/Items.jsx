import React from 'react'
import './Items.scss'
import {Link, useNavigate } from 'react-router-dom';

function Items() {
  const navigate= useNavigate();
  return (
    
    
    <div className='item-container'>
      <div className='box'>
        <h1 className='title'> ORDER FOOD</h1>
        <h2 className='content'>What kind of food likes to eat!</h2>

        <div className='parent'>
          <div className='veg' onClick={() => navigate('/veg_rest')}>
            <div className='child'>
              <h1>Veg</h1>
              <img src="images/veg-icon.png" alt="veg-icon"  className='v-icon'></img>
              </div>
              <img src='./images/img1.jpeg' alt="veg" width="250px" height="250px"></img>
            </div>

            <div className='non-veg' onClick={() => navigate('/non_rest')}>
              <div className='child2'>
              <h1>Non - Veg</h1>
              <img src='images/non-veg-icon.png' className='n-icon'></img>
              </div>
              <img src="./images/img2.jpg" alt="non-veg" width="250px" height="250px"></img>
            </div>
          </div>

           <Link to="/" className="back-link">Back to Home</Link>
        </div>
      </div>
      
      )
}

      export default Items