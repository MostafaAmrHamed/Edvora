import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-3xl font-semibold text-white">Edvora</h1>
      </div>
    </div>
  )
}
