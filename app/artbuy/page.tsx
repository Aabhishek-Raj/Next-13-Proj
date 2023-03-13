import React from 'react'
import ProductItem from './components/ProductItem'
import data from '../utils/data'

export default function ArtPage() {
  return (
    <section>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {data.products.map(product => (
          <ProductItem key={product.slug} product={product}/>
        ))}
        </div>
    </section>
  )
}
