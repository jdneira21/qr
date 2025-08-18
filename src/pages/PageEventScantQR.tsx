import { Button } from '@mui/material'
import { Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { TbSquareRoundedChevronLeftFilled } from 'react-icons/tb'

export default function PageEventScantQR() {
  const navigate = useNavigate()
  const [result, setResult] = useState('')

  const navigateToEvent = () => {
    navigate(`/event/`)
  }

  return (
    <div className='flex flex-col gap-2 p-2'>
      <Scanner
        onScan={(result) => {
          const x = result.find((r) => r.rawValue == 'dFAFdsfdsfd')
          if (x?.rawValue == 'dFAFdsfdsfd') {
            setResult('Miguel Angel Rodriguez Irupailla')
          }
        }}
      />

      <div className='bg-gray-500 text-white text-center p-2 rounded-md'>{result}</div>

      <Button
        onClick={navigateToEvent}
        loading={!result.length}
        // loadingIndicator={<span>sdasd</span>}
        // l
        disableElevation
        variant='contained'
        className='!capitalize'
        startIcon={<TbSquareRoundedChevronLeftFilled />}
      >
        Confirmar Asistencia
      </Button>

      <Button
        disableElevation
        variant='contained'
        className='!capitalize'
        startIcon={<TbSquareRoundedChevronLeftFilled />}
      >
        Cancelar
      </Button>
    </div>
  )
}
