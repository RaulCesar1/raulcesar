import Head from 'next/head';

export default function Home() {
    return (
      <body className="overflow-hidden select-none font-mono bg-black">
        <Head>
          <title>Raul C. Oliveira</title>
        </Head>

        <div className="flex h-screen justify-center items-center text-white">
          <div className="text-center">
            <h1 className="text-grande">Raul César</h1>
            <div className="text-medio space-x-5">
              <a className="inline hover:text-indigo-600" target="_blank" href="https://github.com/RaulCesar1">Github</a>
              <a className="inline hover:text-indigo-600" target="_blank" href="https://www.npmjs.com/~raulcesaroliveira">NPM</a>
              <a className="inline hover:text-indigo-600" target="_blank" href="https://twitter.com/RaulCsrOliveira">Twitter</a>
              <a className="inline hover:text-indigo-600" target="_blank" href="https://www.youtube.com/channel/UCX0TjriOFMsEHv0UDS5eIEQ">Youtube</a>
            </div>
          </div>
        </div>

      </body>
  )
}