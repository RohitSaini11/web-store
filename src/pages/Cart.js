import { useEffect ,useState } from 'react';
import React from "react";
import CartItem from '../components/CartItem';
import { firestore } from "../firebase/firebase";

import {useNavigate } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

const Cart = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = {...props.user};
    const navigate = useNavigate();
    // const [showOrderBtn, setShowOrderBtn] = useState(false);
    
    // const db=firestore.collection("cart");
    const db=firestore.collection(`${user.uid}`);
    
    useEffect(() => {
        if(user.uid === undefined){
          navigate('/');
        }
        const unsubscribe = db
          .orderBy('price', 'asc')
          .onSnapshot((snapshot) => {
            const products = snapshot.docs.map((doc) => {
              const data = doc.data();
              data["id"] = doc.id;
              return data;
            });
    
            setProducts(products);
            setLoading(false);
          });
    
        return () => unsubscribe(); // Cleanup the listener on unmount
    }, [db]);

    

    const handleIncreaseQuantity = (product) => {
        const index = products.indexOf(product);
        const docRef = db.doc(products[index].id);
    
        docRef
          .update({
            qty: products[index].qty + 1
          })
          .then(() => {
            console.log("Updated Successfully");
          })
          .catch((error) => {
            console.log("ERROR :", error);
          });
    };   

    const handleDecreaseQuantity = (product) => {
        const index = products.indexOf(product);
    
        if (products[index].qty === 0) {
          return;
        }
    
        const docRef = db.doc(products[index].id);
    
        docRef
        .update({
            qty: products[index].qty - 1
        })
        .then(() => {
            console.log("Updated Successfully");
        })
        .catch((error) => {
            console.log("ERROR :", error);
        });
      };

    const handleDeleteProduct = (id) => {
        const docRef = db.doc(id);
    
        docRef
          .delete()
          .then(() => {
            NotificationManager.info('Item Deleted from Cart.')
        })
        .catch((error) => {
            console.log("ERROR :", error);
        });
    };

    const getCartTotal = () => {
        let cartTotal = 0;
    
        products.forEach((product) => {
          cartTotal += product.qty * product.price;
        });
    
        return cartTotal;
    };

    const placeOrder = () =>{
      // const config={
      //   Username:'webstore546@gmail.com',
      //   Password:'517BBF2866CB3B48C0C20D6829F65E343677',
      //   Host:'smtp.elasticemail.com',
      //   Port: 2525 ,
      //   To : "rrs0118032@gmail.com",
      //   From : "rs0118032@gmail.com", //******change this******
      //   Subject : "Order Confirmation.",
      //   Body : `Hello ${user.displayName} Your order has been received and will be delivered in the next 5-10 working days. Thank You for Shopping with us.`
      // }
      // console.log('placed', user.email);
      // if(window.Email){
      //     window.Email.send(config).then( console.log('Email Sent!') ).catch((error)=> console.log(error));
      // }
      NotificationManager.success('Will be delivered in 5-7 working days','Order Placed',5000);
    }

    return(
      <div className="cart min-h-[85vh]"> 
            
            {loading && <h1 className='font-semibold text-2xl text-center mt-40'>Loading....</h1>}
            
            {products.length === 0 && !loading ? 
              // <div className='h-[5rem] flex items-center justify-center'>
              //   <h1 className='font-semibold text-2xl'>Your cart is empty.</h1>
              // </div>  
              <h1 className='font-semibold text-2xl text-center mt-40'>Your cart is empty.</h1>
              :
              <></>
            }
          <div className='grid grid-cols-3 '>    
            { 
              products.map((product) => {
                return <CartItem  
                    product={product}
                    key={product.id}
                    onIncreaseQuantity={handleIncreaseQuantity}
                    onDecreaseQuantity={handleDecreaseQuantity}
                    onDeleteProduct={handleDeleteProduct}
                />
               })
            }    
          </div> 
            
            {
              products.length !== 0 && 
              <div style={{ padding: 10, fontSize: 20, fontWeight: 'bolder' ,textAlign:'center'}} className='w-[100%] flex justify-center'>
                <p className=' w-[10rem]  bg-orange-400 text-white rounded-md p-1'>Total: {getCartTotal()} $</p>
                {/* Place order buttun here */}
                <button onClick={placeOrder}>Place order!</button>
              </div> 
            }  

            {/* {showOrderBtn && <button className='text-orange-400 px-2 py-1 border border-orange-400 rounded-md hover:bg-orange-400 hover:text-orange-50 duration-300'>Place Order</button>} */}
             {/* <button >orderBTn</button>  */}
      </div>        
    );
}

export default Cart; 