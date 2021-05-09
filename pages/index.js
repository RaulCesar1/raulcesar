import Head from 'next/head';

export default function Home() {
    return (
    <body className={`bg-gray-900 overflow-hidden select-none font-mono`}>
      <Head>
        <title>Raul C. Oliveira</title>
      </Head>

      <div className={`text-yellow-300 flex h-screen justify-center items-center`}>
        <div className="text-center">
          <h1 className="text-grande">Raul César</h1>
          <div className="text-medio">
            <a className={`inline hover:text-indigo-600`} target="_blank" href="https://github.com/RaulCesar1">Github&nbsp;&nbsp;</a>
            <a className={`inline hover:text-indigo-600`} target="_blank" href="https://www.npmjs.com/~raulcesaroliveira">NPM&nbsp;&nbsp;</a>
            <a className={`inline hover:text-indigo-600`} target="_blank" href="https://twitter.com/RaulCsrOliveira">Twitter&nbsp;&nbsp;</a>
            <a className={`inline hover:text-indigo-600`} target="_blank" href="https://www.youtube.com/channel/UCX0TjriOFMsEHv0UDS5eIEQ">Youtube</a>
          </div>
        </div>
      </div>

    </body>
  )
}