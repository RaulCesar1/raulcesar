import Head from 'next/head';
import { useState } from 'react';
import Switch from "react-switch";

export default function Home() {
    const [cdb,setCdb] = useState('bg-white')
    const [cdt,setCdt] = useState('text-black')
    const [estado,setEstado] = useState(false)
    const [htc,setHtc] = useState('hover:text-blue-800')

    return (
    <body className={`${cdb} overflow-hidden select-none font-mono`}>
      <Head>
        <title>Raul C. Oliveira</title>
      </Head>

      <div className="ml-5 mt-5">
        <Switch 
        onChange={(op) => {
          if(op===true) {
            setCdb('bg-gray-900')
            setCdt('text-white')
            setHtc('hover:text-pink-600')
            setEstado(true)
          } else {
            setCdb('bg-white')
            setCdt('text-black')
            setHtc('hover:text-blue-800')
            setEstado(false)
          }
        }} 
        checked={estado}
        uncheckedIcon={false}
        checkedIcon={false}
        handleDiameter={25}
        onHandleColor={'#0f98d4'}
        onColor={'#007db3'}
        height={17}
        width={55}
        offHandleColor={'#a6a6a6'}
        activeBoxShadow={'0 0 1px 2px #737373'}
        />
      </div>

      <div className={`${cdt} flex h-screen justify-center items-center`}>
        <div className="text-center">
          <h1 className="text-grande">Raul César</h1>
          <div className="text-medio">
            <a className={`inline ${htc}`} target="_blank" href="https://github.com/RaulCesar1">Github&nbsp;&nbsp;</a>
            <a className={`inline ${htc}`} target="_blank" href="https://www.npmjs.com/~raulcesaroliveira">NPM&nbsp;&nbsp;</a>
            <a className={`inline ${htc}`} target="_blank" href="https://twitter.com/RaulCsrOliveira">Twitter&nbsp;&nbsp;</a>
            <a className={`inline ${htc}`} target="_blank" href="https://www.youtube.com/channel/UCX0TjriOFMsEHv0UDS5eIEQ">Youtube</a>
          </div>
        </div>
      </div>

    </body>
  )
}