import { useEffect ,useState } from 'react';
import React from "react";
import CartItem from '../components/CartItem';
import { auth,firestore } from "../firebase/firebase";
import GetUser from '../components/GetUser';
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
      console.log("order Placed");
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

                <button onClick={placeOrder}>Place order!</button>
              </div> 
            }  

            {/* {showOrderBtn && <button className='text-orange-400 px-2 py-1 border border-orange-400 rounded-md hover:bg-orange-400 hover:text-orange-50 duration-300'>Place Order</button>} */}
             {/* <button >orderBTn</button>  */}
      </div>        
    );
}

export default Cart; 