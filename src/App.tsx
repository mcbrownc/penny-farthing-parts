import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from 'react-router-dom';

import Spinner from "./components/spinner/spinner.component";
import { checkUserSession } from "./store/user/user.action";
import { GlobalStyle } from "./global.styles";

const Home = lazy(() => import('./routes/home/home.component'));
const Authentication = lazy(() => import('./routes/sign-in/authentication.component'));
const NavBar = lazy(() => import('./routes/navbar/navbar.component'));
const Checkout = lazy(() => import('./routes/checkout/checkout.component'));
const Shop = lazy(() => import('./routes/shop/shop.component'));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [])

  return (
    <Suspense jljfallback={<Spinner />}>
      {/* <GlobalStyle /> */}
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />}/>
          <Route path='shop/*' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;