import Head from 'next/head'
import Filter from '../components/Filter'
import SliderProducts from '../components/SliderProducts'

export default function Home() {
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
              <SliderProducts />
            </div>
            <div>
              <SliderProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
