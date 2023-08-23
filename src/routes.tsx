import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { checkUserSession } from './store/user/user.action'

import Home from './routes/home/home.component'
import GNB from './routes/gnb'
import SignUp from './routes/sign-up/sign-up.component'
import LogIn from './routes/log-in/log-in.component'
import Shop from './routes/shop/shop.component'
import Cart from './routes/cart/cart.component'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <Routes>
      <Route path="/" element={<GNB />}>
        <Route index element={<Home />}></Route>
        <Route path="log-in" element={<LogIn />}></Route>
        <Route path="sign-up" element={<SignUp />}></Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="cart" element={<Cart />}></Route>
      </Route>
    </Routes>
  )
}

export default App