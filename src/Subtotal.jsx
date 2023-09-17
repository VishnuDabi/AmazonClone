import React from 'react'
import './Subtotal.css'
// import { format } from 'currency-formatter'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';
function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    return (
        <div className="subtotal">
            <>
                <p>Subtotal ( {basket.length} items:) <strong>
                    {formatter.format(getBasketTotal(basket))}
                </strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" />
                    this contains a gift
                    <br /><br />
                    <button onClick={e => navigate('/payment')} >Proceed to checkout</button>
                </small>
            </>
            {/* <p>Amount:{amount}</p>
            <p>Formatted </p> */}

        </div>
    );
}

export default Subtotal

