import React from 'react'
import './Checkout.css'
import CheckoutProducts from './CheckoutProducts';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    console.warn(basket)
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div >
                    <h2> Hello,{user?.email}</h2>
                    <h2 className="checkout__title">your shopping basket</h2>
                    {basket.map(item => (
                        // console.log(item.id)
                        < CheckoutProducts
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))

                    }
                </div>
            </div>
            <div className="checkout_right">

                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout