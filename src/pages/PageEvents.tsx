
import { Button } from '@mui/material'
import Event from '../componets/Event'
import { useNavigate } from 'react-router'

export default function PageEvents() {

  const navigate = useNavigate()

  const onNavigateCreateEvent = () => {
    navigate('/register-event', { viewTransition: true })
  }

  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center m-2'>
        <Button disableElevation type='submit' variant='contained' onClick={onNavigateCreateEvent}>
          Crear Evento
        </Button>
      </div>
      <div className='grid grid-cols-1 gap-2 m-2'>
        <Event titulo='Evento 1' id='1' active={true} />
        <Event titulo='Evento 2' id='2' active={false} />
        <Event titulo='Evento 3' id='3' active={false} />
        <Event titulo='Evento 4' id='4' active={false} />
      </div>
    </div>
  )
}
