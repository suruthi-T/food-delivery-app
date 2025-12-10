import React from 'react'
import './non_rest.scss'
import { useNavigate } from 'react-router-dom';

function Non_rest() {
    const navigate= useNavigate();
    return (
        <div className='non-section'>
            <div className='non-rest-container'>
                <div className='top-bar'>
                <img src="images/arrow.png" className='back-arrow' onClick={()=>navigate("/items")} />
                <input type='Search' placeholder='Search for food' className='search' />
</div>
                <div className='non-parent'>
                    <div>
                        <img src='images/non/nimg9.jpeg' className='non-food-img' />
                    </div>
                    <div>
                        <h3>Non Veg</h3>
                        <h1>Ya Rahman Biryani</h1>
                        <img src="images/non-veg-icon.png" className='non-rat-icon' />
                        <span>3.9(17k+)</span>
                        <p>Briyani</p>
                        <p>Medavakkam</p>
                    </div>
                </div>

                <div className='non-parent'>
                    <div>
                        <img src='images/non/6nimg.jpeg' className='non-food-img' />
                    </div>
                    <div>
                        <h3>Non Veg</h3>
                        <h1>Dindigul Thalappakati</h1>
                        <img src="images/non-veg-icon.png" className='non-rat-icon' />
                        <span>4.2(28k+)</span>
                        <p>Briyani,Barbecue,South Indian,...</p>
                        <p>Karappakam</p>
                    </div>
                </div>

                <div className='non-parent'>
                    <div>
                        <img src='images/non/kfcimg7.jpeg' className='non-food-img' />
                    </div>
                    <div>
                        <h3>Non Veg</h3>
                        <h1>Kfc</h1>
                        <img src="images/non-veg-icon.png" className='non-rat-icon' />
                        <span>4.3(7.5k+)</span>
                        <p>Burgers,Fast Food, Rolls & Wraps</p>
                        <p>Sholinganallur</p>
                    </div>
                </div>

                <div className='non-parent'>
                    <div>
                        <img src='images/non/nimg5.jpeg' className='non-food-img' />
                    </div>
                    <div>
                        <h3>Non Veg</h3>
                        <h1>Zaitoon</h1>
                        <img src="images/non-veg-icon.png" className='non-rat-icon' />
                        <span>4.3(3.2k+)</span>
                        <p>Chinese, South Indian,...</p>
                        <p>Injambakkam</p>
                    </div>
                </div>

                <div className='non-parent'>
                    <div>
                        <img src='images/non/nimg2.jpeg' className='non-food-img' />
                    </div>
                    <div>
                        <h3>Non Veg</h3>
                        <h1>Anjappar</h1>
                        <img src="images/non-veg-icon.png" className='non-rat-icon' />
                        <span>4.1(28k+)</span>
                        <p>Chettinad,Biryani South Indian,...</p>
                        <p>Thurapakkam</p>
                    </div>
                </div>

                <div className='non-parent'>
                    <div>
                        <img src='images/non/nimg3.jpeg' className='non-food-img' />
                    </div>
                    <div>
                        <h3>Non Veg</h3>
                        <h1>The Grill Station</h1>
                        <img src="images/non-veg-icon.png" className='non-rat-icon' />
                        <span>3.8(255)</span>
                        <p>Chinese,South Indian</p>
                        <p>Pallikaranai</p>
                    </div>
                </div>

                <div className='non-parent'>
                    <div>
                        <img src='images/non/nimg1.jpeg' className='non-food-img' />
                    </div>
                    <div>
                        <h3>Non Veg</h3>
                        <h1>Mani's Dum Biryani</h1>
                        <img src="images/non-veg-icon.png" className='non-rat-icon' />
                        <span>4.6(27k+)</span>
                        <p>Andhra, Biryani</p>
                        <p>Thuraippakkam</p>
                    </div>
                </div>

                <div className='non-parent'>
                    <div>
                        <img src='images/non/nimg8.jpg' className='non-food-img' />
                    </div>
                    <div>
                        <h3>Non Veg</h3>
                        <h1>Hyderabad Biryani House</h1>
                        <img src="images/non-veg-icon.png" className='non-rat-icon' />
                        <span>4.2(356)</span>
                        <p>Biryani,Fast Food</p>
                        <p>Karappakam</p>
                    </div>
                </div>

                <div className='non-parent'>
                    <div>
                        <img src='images/non/nimg10.jpeg' className='non-food-img' />
                    </div>
                    <div>
                        <h3>Non Veg</h3>
                        <h1>selam RR Biriyani Unavagam</h1>
                        <img src="images/non-veg-icon.png" className='non-rat-icon' />
                        <span>4.1(17k+)</span>
                        <p>Biryani,Chettinad,Tandoor,...</p>
                        <p>Sholinganallur</p>
                    </div>
                </div>

                <div className='non-parent'>
                    <div>
                        <img src='images/non/pimg.jpeg' className='non-food-img' />
                    </div>
                    <div>
                        <h3>Non Veg</h3>
                        <h1>Pizza Hut</h1>
                        <img src="images/non-veg-icon.png" className='non-rat-icon' />
                        <span>4.2(3.6k+)</span>
                        <p>Pizza Hut</p>
                        <p>Thoraipakkam</p>
                    </div>
                </div>

            </div>
        </div>

    )


}

export default Non_rest