import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import toast, { Toaster } from 'react-hot-toast';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer';
import Allproduct from './components/allproduct/Allproduct';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';
import Navbar from './components/Navbar/Navbar'
import Singleproduct from './pages/Singleproduct';
import Contact from './components/Contact/Contact';
import { auth } from './FirebaseAuth/FirebaseAuth';
import About from './components/About/About';








const App = () => {

  const [cart, setCart] = useState([])
  const [promoCode, setPromoCode] = useState('')
  const [discount , setDiscount] = useState(0)
  const[match , setMatch] = useState('Invalid PromoCode')
  const [userName , setUserName]= useState('')
     
 



  // add to cart

  const AddToCart = (allproduct) => {
   
    const productExist = cart.find((finditem) => finditem.id === allproduct.id)
    if (productExist) {
   
      const upDateProduct = cart.map((product) => (
        product.id === allproduct.id ? { ...product, Quantity: product.Quantity + 1 } : product
      )) 
      setCart(upDateProduct)
     
    }
    else {
      setCart([...cart, { ...allproduct, Quantity: 1 }])
     
    }

  }


  // Incress quantity 


  const handelInc = (id) => {
    const pluscart = cart.map((item) => (
      item.id === id ? { ...item, Quantity: item.Quantity + 1 } : item
    ))
    setCart(pluscart)
  }


  //  decres Quantity


     const handeldec = (id) => {
    const minuscart = cart.map((item) => (
      item.id === id && item.Quantity>1 ? { ...item, Quantity: item.Quantity - 1 } : item
    ))
    setCart(minuscart)
  }

  // Remove Cart  Item 

    const handelremove=(id)=>{
      const removecart =  cart.filter((filteritem)=>filteritem.id !== id)  
      setCart(removecart)
    }


    // calculate Total price

    const getTotalPrice =  ()=>{
     const totalPrice =   cart.reduce((total , cartReduceItem)=>{
        return   total + cartReduceItem.price * cartReduceItem.Quantity
    },0)
    return  totalPrice - discount ; 
    }


    // PromoCode Section 

  const matchPromoCode = ()=>{
        if(promoCode === "DISCOUNT10"){

          setDiscount(getTotalPrice () * 0.1)
          setPromoCode('')
          setMatch('')

        } else{
          setMatch(match)
        }
      }

// userName display

useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    if (user){
      setUserName(user.displayName)
    }else{
      setUserName('')
    }
  })
},[])



  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar cart={cart} userName={userName} />
          <Routes>
            <Route path='/' element={<Home AddToCart={AddToCart}/>}></Route>
            <Route path='/cart' 
            element={<Cart cart={cart} 
            handeldec={handeldec}
            handelInc={handelInc}
            handelremove={handelremove} 
            getTotalPrice={getTotalPrice}  
            matchPromoCode={matchPromoCode} 
            promoCode={promoCode}
            setPromoCode={setPromoCode}
            match={match}
              />} ></Route>
            <Route path='/allproducts' element={<Allproduct AddToCart={AddToCart} />} ></Route>
            <Route path='/singleProduct/:productId' element={<Singleproduct  AddToCart={AddToCart}  />} ></Route>
            <Route path='/login' element={<Login />} ></Route>
            <Route path='/signup' element={<Signup />} ></Route>
            <Route path='/contact' element={<Contact/>} ></Route>
            <Route path='/about' element={<About/>} ></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App