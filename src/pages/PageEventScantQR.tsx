import { Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'

export default function PageEventScantQR() {
  const [result, setResult] = useState('')

  return (
    <div className='flex flex-col gap-2 p-2'>
      <Scanner
        onScan={(result) => {
          const x = result.find((r) => r.rawValue == 'dFAFdsfdsfd')
          if (x?.rawValue == 'dFAFdsfdsfd') {
            setResult('Marco Granados Neira')
          }
        }}
      />

      <div className='bg-gray-500 text-white text-center p-2 rounded-md'>{result}</div>
    </div>
  )
}
