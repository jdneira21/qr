import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Chip, Typography } from '@mui/material'
import { useNavigate } from 'react-router'

export default function Event({ id, titulo, active }: { id: string; titulo: string; active: boolean }) {
  const navigate = useNavigate()

  const onNavigateAdminEvent = () => {
    navigate('/event/' + id, { viewTransition: true })
  }

  return (
    <Card elevation={2} sx={{ boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.14)' }}>
      <CardHeader
        title={titulo}
        subheader='Octubre 14 - 2025'
        action={
          <Chip
            label={active ? 'Activo' : 'Inactivo'}
            variant='filled'
            color={active ? 'primary' : 'secondary'}
            size='small'
          />
        }
      />
      <CardMedia
      // component='circle'
      // svg={<img src="/static/images/cards/paella.jpg" alt="Paella dish" />}

      // height="194"
      // // image="/static/images/cards/paella.jpg"
      // alt="Paella dish"
      />
      <CardContent className='!p-2'>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of
          frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing className='flex justify-end'>
        <Button size='small' disableElevation variant='contained' onClick={onNavigateAdminEvent}>
          Administrar Evento
        </Button>
        {/* <Button size='small'>Learn More</Button> */}
      </CardActions>
    </Card>
  )
}
