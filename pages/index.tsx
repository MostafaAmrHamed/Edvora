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
        <div className="flex flex-col gap-5 lg:flex-row">
          <Filter />
          <div>
            <h1 className="mb-4 text-4xl font-bold text-[#FFFFFFDE]">Edvora</h1>
            <h1 className="mb-10 text-2xl font-medium text-subtext">
              Products
            </h1>
            <SliderProducts />
          </div>
        </div>
      </div>
    </div>
  )
}
