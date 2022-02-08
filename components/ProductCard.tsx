import React from 'react'

const ProductCard = () => {
  return (
    <div className="w-[250px] rounded bg-primary-1 p-4 text-subtext">
      <div className="mb-3 flex gap-4">
        <img
          src={
            'https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg'
          }
          alt="img"
          className="h-[70px] w-[70px] rounded"
        />
        <div>
          <p className="text-lg text-white">Product Name</p>
          <p>Brand Name</p>
          <p className="text-base text-white">$ 29.99</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p>Location </p>
        <p>Date: 10:12:2021</p>
      </div>
      <p>Description of the Product</p>
    </div>
  )
}

export default ProductCard
