import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
import { product } from '../types'
import { cal_brands } from '../logic'
import Filter from '../components/Filter'
import SliderProducts from '../components/SliderProducts'

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="container mx-auto flex min-h-screen flex-col p-5 xl:px-0">
      <Head>
        <title>Edvora</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="lg:grid lg:grid-cols-12 lg:gap-5">
          <div className="mb-10 lg:col-span-2 lg:mb-0">
            <Filter />
          </div>
          <div className="lg:col-span-10 lg:col-start-4">
            <h1 className="mb-4 text-4xl font-bold text-[#FFFFFFDE]">Edvora</h1>
            <h1 className="mb-5 text-2xl font-medium text-subtext">Products</h1>
            <div className="mb-5">
              {cal_brands(products).map((item, index) => {
                console.log(item)

                return (
                  <SliderProducts
                    items={products}
                    key={index}
                    brand_name={item}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export const getStaticProps = async () => {
  const res = await fetch('https://assessment-edvora.herokuapp.com/')
  const products: product[] = await res.json()
  return {
    props: {
      products,
    },
  }
}
