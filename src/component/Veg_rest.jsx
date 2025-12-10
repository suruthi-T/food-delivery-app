import React from 'react'
import './veg_rest.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Veg_rest() {
  const navigate= useNavigate();
  const [searchTerm, setSearchTerm]=useState('');

    
  const handleChange=(e)=>{
    setSearchTerm(e.target.value);
  }

  

  return (
    <div className='section'>
    <div className='veg-rest-container'>
      <div className='top-bar'>
      <img src="images/arrow.png" className='back-arrow' onClick={()=>navigate("/items")} />
      <input type='Search' placeholder='Search for food' className='search' onChange={handleChange} />
    </div>
      <div className='veg-parent'>
        <div>
          <img src='images/veg/vimg.jpeg' className='food-img' />
        </div>
        <div>
          <h3>Pure Veg</h3>
          <h1>A2B - Adyar Ananda Bhavan</h1>
          <img src="images/rating.png" className='rat-icon' />
          <span>4.4(11k+)</span>
          <p>Chinese,south Indian, Sweets...</p>
          <p>OMR Navalur</p>
        </div>
      </div>

      <div className='veg-parent'>
        <div>
          <img src='images/veg/vimg2.jpg' className='food-img2' />
        </div>
        <div>
          <h3>Pure Veg</h3>
          <h1>Geetham Veg Restaurant</h1>
          <img src="images/rating.png" className='rat-icon' />
          <span>4.6(54k+)</span>
          <p>Beverages,south Indian, Sweets...</p>
          <p>Thoraipakkam</p>
        </div>
      </div>

      <div className='veg-parent'>
        <div>
          <img src='images/veg/vimg3.jpeg' className='food-img2' />
        </div>
        <div>
          <h3>Pure Veg</h3>
          <h1>Sageetha Veg Restaurant</h1>
          <img src="images/rating.png" className='rat-icon' />
          <span>4.6 (476)</span>
          <p>south Indian</p>
          <p>Medavakkam</p>
        </div>
      </div>

      <div className='veg-parent'>
        <div>
          <img src='images/veg/vimg4.jpeg' className='food-img2' />
        </div>
        <div>
          <h3>Pure Veg</h3>
          <h1>Aruvi Veg Restaurant</h1>
          <img src="images/rating.png" className='rat-icon' />
          <span>4.5 (24k+)</span>
          <p>south Indian, North Indian, Chinese...</p>
          <p>Tambaram</p>
        </div>

      </div>


      <div className='veg-parent'>
        <div>
          <img src='images/veg/vimg5.jpeg' className='food-img2' />
        </div>
        <div>
          <h3>Pure Veg</h3>
          <h1>Nandavanam Veg Restaurant</h1>
          <img src="images/rating.png" className='rat-icon' />
          <span>4.5 (5.6k+)</span>
          <p>south Indian</p>
          <p>Mettukuppam</p>
        </div>
      </div>

      <div className='veg-parent'>
        <div>
          <img src='images/veg/vimg6.jpeg' className='food-img2' />
        </div>
        <div>
          <h3>Pure Veg</h3>
          <h1>Shri Ramanaas</h1>
          <img src="images/rating.png" className='rat-icon' />
          <span>4.6 (24k+)</span>
          <p>south Indian, Chinese, Beverages...</p>
          <p>Medavakkam</p>
        </div>
      </div>

      <div className='veg-parent'>
        <div>
          <img src='images/veg/vimg7.jpeg' className='food-img2' />
        </div>
        <div>
          <h3>Pure Veg</h3>
          <h1>Namo Andhra</h1>
          <img src="images/rating.png" className='rat-icon' />
          <span>4.4 (818)</span>
          <p>south Indian, Biryani, Andhra</p>
          <p>OMR Perungudi</p>
        </div>
      </div>

      <div className='veg-parent'>
        <div>
          <img src='images/veg/vimg8.jpeg' className='food-img2' />
        </div>
        <div>
          <h3>Pure Veg</h3>
          <h1>Vaasam Veg Restaurant</h1>
          <img src="images/rating.png" className='rat-icon' />
          <span>4.3 (1.0k+)</span>
          <p>south Indian, North Indian</p>
          <p>Sholinganalur</p>
        </div>
      </div>

      <div className='veg-parent'>
        <div>
          <img src='images/veg/vimg9.jpeg' className='food-img2' />
        </div>
        <div>
          <h3>Pure Veg</h3>
          <h1>Astoria Veg </h1>
          <img src="images/rating.png" className='rat-icon' />
          <span>4.6 (17k+)</span>
          <p> Indian, Chinese,Beverages</p>
          <p>Thuraipakkam</p>
        </div>
      </div>

      <div className='veg-parent'>
        <div>
          <img src='images/veg/vimg10.jpeg' className='food-img2' />
        </div>
        <div>
          <h3>Pure Veg</h3>
          <h1>Vasanta Bhavan </h1>
          <img src="images/rating.png" className='rat-icon' />
          <span>4.6 (47k+)</span>
          <p> South Indian</p>
          <p>Neelankarai</p>
        </div>
      </div>

    </div>
</div>

  )
}

export default Veg_rest