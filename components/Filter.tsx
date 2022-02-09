import React, { useEffect, useState } from 'react'
import { filterProducts } from '../types'

const Filter: React.FC<filterProducts> = ({ items }) => {
  const [filter, setFilter] = useState({ product: '', state: '', city: '' })
  useEffect(() => {
    console.log({ ...filter })
  }, [filter])

  return (
    <div className="h-fit w-[228px] rounded-2xl bg-primary-2 p-5 text-white">
      <h1 className="text-subtex mb-7 border-b-[1px] border-subtext pb-2 font-light text-[#A5A5A5]">
        Filters
      </h1>
      <select
        className="mb-3 w-full rounded bg-primary-1 p-1"
        onChange={(e) => {
          setFilter({ product: e.target.value, city: '', state: '' })
        }}
      >
        <option value="" key={'product'}>
          Products
        </option>
        {items.map((item, index) => {
          return (
            <option value={item.product_name} key={`product ${index}`}>
              {item.product_name}
            </option>
          )
        })}
      </select>

      <select
        className="mb-3 w-full rounded bg-primary-1 p-1"
        onChange={(e) => {
          setFilter({ ...filter, state: e.target.value })
        }}
      >
        <option value="" key={'state'}>
          State
        </option>
        {items.map((item, index) => {
          return filter.product ? (
            filter.product === item.product_name && (
              <option value={item.address.state} key={`state ${index}`}>
                {item.address.state}
              </option>
            )
          ) : (
            <option value={item.address.state} key={`state ${index}`}>
              {item.address.state}
            </option>
          )
        })}
      </select>

      <select
        className="mb-3 w-full rounded bg-primary-1 p-1"
        onChange={(e) => {
          setFilter({ ...filter, city: e.target.value })
        }}
      >
        <option value="" key={'city'}>
          City
        </option>
        {items.map((item, index) => {
          return filter.state ? (
            filter.state === item.address.state && (
              <option value={item.address.city} key={`city ${index}`}>
                {item.address.city}
              </option>
            )
          ) : (
            <option value={item.address.city} key={`city ${index}`}>
              {item.address.city}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default Filter
