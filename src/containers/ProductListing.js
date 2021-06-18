import React,{useEffect} from 'react'
import axios from 'axios'
import ProductComponent from './ProductComponent'
import {setProducts} from '../redux/actions/productsAction'
 import {useDispatch} from 'react-redux'

const ProductListing = () => {

     const dispatch= useDispatch()
    

    const fetchProducts= async()=>{
        const res= await axios.get('https://fakestoreapi.com/products').catch(error=>{
            console.log('error', error)
        })
        dispatch(setProducts(res.data));
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    return (
        <div className="product_listing">
            <ProductComponent/>
        </div>
    )
}

export default ProductListing
