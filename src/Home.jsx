import React from 'react'
import './Home.css'
import MyLiveProducts from './MyLiveProducts'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className="home_container">

                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB4286844220_.jpg" alt="" />
                <div className="home__row">

                </div>
                <div className="home__row">
                    <Product id='1' title='Mi Step Out 12 L Mini Backpack (Small Size, Black, Water Repellant)'
                        price={29.99} image='https://m.media-amazon.com/images/I/71edjA10hZL._AC_UL400_.jpg'
                        rating={4} />
                    <Product id='1656' title='boAt Airdopes 141 Bluetooth Truly Wireless in Ear Headphones with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth...'
                        price={40.99} image='https://m.media-amazon.com/images/I/61KNJav3S9L._SL1500_.jpg'
                        rating={5} />


                </div>
                <div className="home__row">
                    <Product id='2' title='Redgear MP35 Speed-Type Gaming Mousepad (Black/Red)'
                        price={2.99} image='https://m.media-amazon.com/images/I/61G5-hNFMYL._SX522_.jpg'
                        rating={5} />
                    <Product id='3' title='HP Pavilion 14 11th Gen Intel Core i7 16GB/1TB SSD 14 inches Laptop, FHD Micro-Edge Anti-Glare Display/Iris X Graphics/Backlit KB/B&O Audio/Fingerprint Reader/Windows 11 Ready/1.41kg, 14-dv0058TU'
                        price={199.99} image='https://m.media-amazon.com/images/I/71hmqIQJFdL._SX679_.jpg'
                        rating={3} />
                    <Product id='4' title='TAGG Verve NEO Smartwatch 1.69’’ HD Display | 60+ Sports Modes | 10 Days Battery | 150+ Maximum Watch Face Library | Waterproof | 24 * 7 HeartRate & Blood Oxygen Tracking | Games & Calculator | Blue'
                        price={19.99} image='https://m.media-amazon.com/images/I/71pH9oKvCDL._SX679_.jpg'
                        rating={4} />
                </div>
                <div className="home__row">
                    <Product id='5' title='Redgear MP35 Speed-Type Gaming Mousepad (Black/Red)'
                        price={2.99} image='https://m.media-amazon.com/images/I/61G5-hNFMYL._SX522_.jpg'
                        rating={5} />
                </div>
                <MyLiveProducts />
            </div>

        </div>
    )
}

export default Home