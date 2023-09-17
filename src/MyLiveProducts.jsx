import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from './Product';
import './Product.css'
import './MyLiveProducts.css'
function MyLiveProducts() {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        try {
            const apiData = await axios.get("https://dummyjson.com/products");
            console.log(apiData.status);
            if (apiData.status === 200) {
                const d = apiData.data.products;
                setProductData(d);
                console.log(apiData.data.products);
            }
        }
        catch {
            alert('Sorry Unable to Fetch Product Data...')
        }

    }
    return (
        <>
            <div className="main__container">
                <div className="product__container">
                    {productData.map((item, index) => {
                        return (
                            <>
                                <div key={index} className='live__product__items'>
                                    <Product id={index} title={item.title} image={item.images[0]} price={item.price} rating={Number((item.rating.toFixed()))} />
                                </div>
                            </>
                        )
                    })}
                </div>


            </div>

        </>

    )
}

export default MyLiveProducts
