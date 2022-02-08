import Head from 'next/head'
import Filter from '../components/Filter'
export default function Home() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col p-5 xl:px-0">
      <Head>
        <title>Edvora</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="flex flex-col gap-5 md:flex-row">
          <Filter />
          <div>
            <h1 className="mb-4 text-3xl font-semibold text-white">Edvora</h1>
            <h1 className="mb-4 text-xl text-subtext">Products</h1>
            <div>Slider 1</div>
            <div>Slider 2</div>
          </div>
        </div>
      </div>
    </div>
  )
}
