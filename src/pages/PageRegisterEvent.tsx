import { Autocomplete, Button, TextField, Typography } from '@mui/material'

import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

import dayjs from 'dayjs'
import 'dayjs/locale/es'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar, TimePicker } from '@mui/x-date-pickers'

import type { Dayjs } from 'dayjs'

export const daysjsx = dayjs

type FormEvent = {
  nombreEvento: string
  descripcionEvento: string
  fechaEvento: Dayjs
  horaEvento: Dayjs
  lugarEvento: string
  lugarMapaGoogle: string
  capacidadEvento: string
  precioEntrada: string
  imagenEvento: string
}

export default function PageRegisterEvent() {
  const navigate = useNavigate()

  const {
    // formState: { errors },
    handleSubmit,
    control,
    // register,
  } = useForm<FormEvent>({
    mode: 'onSubmit',
    defaultValues: {
      nombreEvento: '',
      descripcionEvento: '',
      fechaEvento: dayjs(new Date()),
      horaEvento: dayjs(new Date()),
      lugarEvento: '',
      lugarMapaGoogle: '',
      capacidadEvento: '',
      precioEntrada: '',
      imagenEvento: '',
    },
  })

  const onSubmit = handleSubmit((data) => {
    // const { usuario, usuario_clave } = data

    console.log(data)

    navigate('/events', { viewTransition: true })
  })

  const top100Films = [
    { id: 1, tipo: 'General' },
    { id: 2, tipo: 'VIP' },
    { id: 3, tipo: 'Zona A' },
    { id: 4, tipo: 'Zona B' }
  ]

  return (
    <div className='flex flex-col overflow-hidden w-screen h-screen'>
      <div className='ml-2'>
        <form className='flex flex-col h-screen gap-2' onSubmit={onSubmit}>
          <Typography variant='h6' gutterBottom>
            Registrar Evento
          </Typography>

          <div className='flex-1 flex gap-2 flex-col overflow-y-auto pt-1.5'>
            <div className='flex-1 flex gap-2 flex-col !mr-1.5'>
              <TextField
                autoFocus
                size='small'
                className=''
                label={'Titulo del Evento'}
                slotProps={{
                  input: {
                    autoComplete: 'off',
                    spellCheck: false,
                  },
                }}
              />

              <TextField
                size='small'
                label={'Descripción del Evento'}
                multiline
                maxRows={4}
                // slotProps={{
                //   input: {
                //     autoComplete: 'off',
                //     spellCheck: false,
                //   },
                // }}
              />

              {/* <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es'> */}
              {/* <StaticDatePicker /> */}

              <div>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es'>
                  <Controller
                    name='fechaEvento'
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <DateCalendar slotProps={{}} slots={{}} onChange={onChange} value={value} />
                    )}
                  />
                </LocalizationProvider>
              </div>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Controller
                  name='fechaEvento'
                  control={control}
                  render={({ field }) => <TimePicker label='Hora' {...field} />}
                />
              </LocalizationProvider>

              

              <Autocomplete
                multiple
                limitTags={2}
                options={top100Films}
                getOptionLabel={(option) => option.tipo}
                defaultValue={[top100Films[0], top100Films[1]]}
                renderInput={(params) => <TextField {...params} label='Zonas' placeholder='Zonas' />}
                defaultChecked
              />

              <TextField
                size='small'
                label={'Lugar'}
                slotProps={{
                  input: {
                    autoComplete: 'off',
                    spellCheck: false,
                  },
                }}
              />

              <TextField
                size='small'
                label={'Mapa Google'}
                slotProps={{
                  input: {
                    autoComplete: 'off',
                    spellCheck: false,
                  },
                }}
              />



              {/* <TextField
        size='small'
        label={'Lugar'}
        slotProps={{
          input: {
            autoComplete: 'off',
            spellCheck: false,
          },
        }}
      /> */}

              {/* <TextField
        size='small'
        label={'Lugar'}
        slotProps={{
          input: {
            autoComplete: 'off',
            spellCheck: false,
          },
        }}
      /> */}

              {/* </LocalizationProvider> */}
            </div>
          </div>

          {/* <Button loading={false} disableElevation type='submit' variant='contained'>
        Registrar
      </Button> */}

          <div className='py-2 mr-1.5'>
            <Button loading={false} disableElevation fullWidth type='submit' variant='contained'>
              Crear Evento
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
