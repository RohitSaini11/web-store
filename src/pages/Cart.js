import { useEffect ,useState } from 'react';
import React from "react";
import CartItem from '../components/CartItem';
import { firestore } from "../firebase/firebase";

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const db=firestore.collection("cart");
    
    useEffect(() => {
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
            console.log("Deleted Successfully");
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



    return(
        <div className="cart"> 
            {loading && <h1 className='font-semibold text-2xl text-center'>Loading....</h1>}
            
            {products.length === 0 && <div className='h-[5rem] flex items-center justify-center'><h1 className='font-semibold text-2xl'>Your cart is empty.</h1></div>}         
            { products.map((product) => {
                return <CartItem  
                    product={product}
                    key={product.id}
                    onIncreaseQuantity={handleIncreaseQuantity}
                    onDecreaseQuantity={handleDecreaseQuantity}
                    onDeleteProduct={handleDeleteProduct}
                />
            })} 
            
            {products.length !== 0 && 
              <div style={{ padding: 10, fontSize: 20, fontWeight: 'bolder' }}>
                Total: {getCartTotal()}
              </div> 
            }  
        </div>        
    );
}

export default Cart; 