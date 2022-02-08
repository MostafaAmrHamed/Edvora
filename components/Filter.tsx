import React from 'react'

const Filter = () => {
  return (
    <div className="h-fit w-[200px] rounded-2xl bg-primary-2 p-5 text-white">
      <h1 className="text-subtex mb-7 border-b-[1px] border-subtext pb-2 font-light text-[#A5A5A5]">
        Filters
      </h1>
      <select className="mb-3 w-full rounded bg-primary-1 p-1">
        <option value="">Products</option>
        <option value="">Products</option>
        <option value="">Products</option>
      </select>
      <select className="mb-3 w-full rounded bg-primary-1 p-1">
        <option value="">State</option>
        <option value="">Products</option>
        <option value="">Products</option>
      </select>
      <select className="mb-3 w-full rounded bg-primary-1 p-1">
        <option value="">City</option>
        <option value="">Products</option>
        <option value="">Products</option>
      </select>
    </div>
  )
}

export default Filter
