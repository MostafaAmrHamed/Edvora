import React from 'react'
import { convertDate } from '../logic'
import { product } from '../types'

const ProductCard: React.FC<product> = ({
  address,
  brand_name,
  date,
  discription,
  image,
  price,
  product_name,
  time,
}) => {
  return (
    <div className="max-w-[300px] rounded bg-primary-1 p-4 text-subtext transition ease-in-out hover:scale-110">
      <div className="mb-3 flex gap-8">
        <img
          src={image}
          alt="product image"
          className="h-[70px] w-[70px] rounded"
        />
        <div>
          <p className="text-lg text-white">{product_name}</p>
          <p className="text-sm">{brand_name}</p>
          <p className="text-base text-white">
            <span className="text-xl">$</span> {price}
          </p>
        </div>
      </div>
      <div className="mb-2 flex justify-between text-sm">
        <p>
          {address.state}, {address.city}
        </p>
        <p>Date: {convertDate(date)}</p>
      </div>
      <p className="text-sm">{discription}</p>
    </div>
  )
}

export default ProductCard
