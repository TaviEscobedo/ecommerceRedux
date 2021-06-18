import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const ProductComponent = () => {
    const products= useSelector(state=>state.allProducts.products)
    // console.log('useSelector',products);
    // const {id, title,category,price,image}= products
    return (

        
            products.map(item =>(
                
                
                <div className="link_card" key={item.id}>
                    <Link to={`/product/${item.id}`}>
            <div className="card">
                    <div className="card_image">
                        <img src={item.image} alt={item.title} />
                    </div>

                    <div className="card_content">
                        <div className="card_header">
                            {item.title}
                        </div>
                        <div className="card_price">
                            $ {item.price}
                        </div>
                        <div className="card_meta">
                            {item.category}
                        </div>
                    </div>
                
            </div>
            </Link>
        </div>
       
            ))
        
        
    )
}

export default ProductComponent
