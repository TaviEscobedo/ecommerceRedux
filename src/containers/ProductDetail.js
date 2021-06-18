import React, {useEffect} from 'react'
import axios from 'axios'
import Loader from  './Loader'
import { useParams } from 'react-router'
import {useDispatch,useSelector} from 'react-redux'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productsAction'

const ProductDetail = () => {
   
     const product = useSelector(state => state.product)
     const {productId}=useParams()
     const dispatch = useDispatch()
    
     console.log('useSelecctor',product);
    const fetchProductDetail=async()=>{
        const res= await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(err=>
        console.log("Error",err))
        dispatch(selectedProduct(res.data))
        // console.log("params",res);
    }

 useEffect(() => {
     if(productId && productId !=="")fetchProductDetail()

     return ()=>{
         dispatch(removeSelectedProduct());
     }
    
    
}, [productId])

    return (
        
              
            <div className="detail_container">
            { Object.keys(product).length === 0?(<Loader/>):
            (
                <>
            <div className="detail_image">
                <img src={product.image} alt=""/>
            </div>
            <div className="detail_description">
                <h1 className="product_title">{product.title}</h1>
                <div className="product_price">
                    <p className="circle_price"></p>
                   <p> ${product.price}</p>
                </div>
                <p className="product_category">{product.category}</p>
                <div className="product_description">
                    {product.description}
                </div>
                <button> Add to cart</button>
            </div>
            </>
           ) }
        </div>  
        
        
    )
}

export default ProductDetail
