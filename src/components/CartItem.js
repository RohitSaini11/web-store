import React from "react";

const CartItem= (props) => { //inherits properties from React.component
    
    const { img , price , title , qty } = props.product;
    const { product, 
        onIncreaseQuantity , 
        onDecreaseQuantity, 
        onDeleteProduct } = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={img} alt=""/>
            </div>
            <div className="right-block">
                <div style={ {fontSize:25} }>{title}</div>
                <div style={ {color:'#777'} }>Rs:{price}</div>
                <div style={ {color:'#777'} }>Qty:{qty}</div>
                <div className="cart-item-actions">
                    {/* BUTTONS */}
                    <img alt="increase" 
                    className="action-icons" 
                    src="plus.png"
                    onClick={() => onIncreaseQuantity(product) }
                    />
                    <img alt="decrease" 
                    className="action-icons" 
                    src="minus.png"
                    onClick={() => onDecreaseQuantity(product)}
                    />
                    <img alt="delete" 
                    className="action-icons" 
                    src="delete.png"
                    onClick={() => onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>
    );
}

const styles = {
    image:{
        height:210,
        width:210,
        borderRadius:4,
        
    }
}

export default CartItem;