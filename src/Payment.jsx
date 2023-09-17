import React, { useEffect, useState } from 'react'
import "./Payment.css"
import { Link } from 'react-router-dom';
import CheckoutProducts from './CheckoutProducts';
import { useStateValue } from './StateProvider'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [clientSecret, setClientSecret] = useState('')

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(null);
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    useEffect(() => {
        //generate the specia stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `./payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)

        }
        getClientSecret();
    }, [basket])
    const handleSubmit = async (event) => {
        // do all fancy stripe stuff
        event.preventDefault();
        setProcessing(true)
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:
            {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            setSucceded(true)
            setError(null)
            setProcessing(false)

        })

    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.massage : "");
    }
    return (
        <div className='payment'>
            <div className="payment__container">
                {/* Payment section - Delivery Address*/}
                <h1>Checkout (<Link to={'/checkout'}>
                    {basket?.length} items
                </Link>) </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>

                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                {/* Payment section - Review Item*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payement__item">
                        {basket.map(item => (
                            <CheckoutProducts
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}

                    </div>
                </div>
                {/* Payment section - Payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">

                        {/* stripe magic will go */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <div className="">
                                    <>
                                        <p><strong>Order Total:
                                            {formatter.format(getBasketTotal(basket))}
                                        </strong>
                                        </p>
                                        <button disabled={processing || disabled || succeeded}>
                                            <span>{processing ? <p>Processing</p> : "Buy Now"} </span>
                                        </button>
                                    </>

                                </div>
                            </div>
                            {/* error */}
                            {error && <div>{ }error</div>}
                        </form>
                    </div>
                </div>y

            </div>
        </div>

    )
}

export default Payment