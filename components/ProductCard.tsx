import React from 'react'

const ProductCard = () => {
  return (
    <div className="max-w-[300px] rounded bg-primary-1 p-4 text-subtext transition ease-in-out hover:scale-110">
      <div className="mb-3 flex gap-8">
        <img
          src={
            'https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg'
          }
          alt="img"
          className="h-[70px] w-[70px] rounded"
        />
        <div>
          <p className="text-lg text-white">Product Name</p>
          <p className="text-sm">Brand Name</p>
          <p className="text-base text-white">$ 29.99</p>
        </div>
      </div>
      <div className="mb-2 flex justify-between text-sm">
        <p>Location </p>
        <p>Date: 10:12:2021</p>
      </div>
      <p className="text-sm">Description of the Product</p>
    </div>
  )
}

export default ProductCard
