import React from 'react'
import productsData from './data/Products';
import ProductDetails from './Product'


export default function ProductsList() {
    const productsList = productsData.map(product =>
        <ProductDetails data={product} />
    )
    return (
        <div class="products-list">
            {productsList}
        </div>
    )
}