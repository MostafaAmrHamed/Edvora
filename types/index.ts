export type product = {
  product_name: string
  brand_name: string
  price: number
  address: { state: string; city: string }
  discription: string
  date: string
  time: string
  image: string
}
export type products = {
  brand_name: string
  items: {
    product_name: string
    brand_name: string
    price: number
    address: { state: string; city: string }
    discription: string
    date: string
    time: string
    image: string
  }[]
}
export type filterProducts = {
  items: {
    product_name: string
    brand_name: string
    price: number
    address: { state: string; city: string }
    discription: string
    date: string
    time: string
    image: string
  }[]
}
