import React, { useEffect } from 'react'
import Header from './Header'
import Home from './Home'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Payment from './Payment'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Footer from './Footer'

const promise = loadStripe("pk_test_51NloKwSA2MFLNEkUryU1nFrIaPR0QYSHtYVjQi4q4sGQCyx7iWWGD54ZH4JB12baRSjSiShsadbMIZkP9vC9WKL200aTRNxvQj")
// import { useStateValue } from './StateProvider'
const App = () => {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>.> ', authUser);
      if (authUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  }, [])

  return (
    <BrowserRouter>

      <div className=''>
        {/* <Switch> */}
        <Routes> {/* it is alternet of switch */}
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={
            <>
              <Header />
              <Checkout />
            </>
          } />
          <Route path='/payment' element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>

            </>
          } />

          <Route path='/' element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
        </Routes>
        {/* </Switch> */}
      </div>
    </BrowserRouter >
  )
}
export default App