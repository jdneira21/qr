import { Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

type IFormLogin = {
  usuario: string
  usuario_clave: string
}

export default function PageLogin() {
  const navigate = useNavigate()

  const {
    // formState: { errors },
    handleSubmit,
    // register,
  } = useForm<IFormLogin>({ mode: 'onSubmit', defaultValues: { usuario: 'JD', usuario_clave: '1111' } })

  const onSubmit = handleSubmit((_) => {
    // const { usuario, usuario_clave } = data

    navigate('/events', { viewTransition: true })

    // setButtonDisabled(true)
    // if (buttonDisabled) return

    // if (usuario === '0000' && usuario_clave === '0000') {
    //   navigate('/first-config', { viewTransition: true })
    //   return
    // }

    // mutateLoginCaja(data)
  })

  return (
    <div className='grid place-items-center h-screen'>
      <form className='flex flex-col gap-y-3' onSubmit={onSubmit}>
        <TextField
          autoFocus
          size='small'
          label={'Usuario'}
          slotProps={{
            input: {
              autoComplete: 'off',
              spellCheck: false,
            },
          }}
        />
        <TextField size='small' label={'Contraseña'} type='password' />

        <Button loading={false} disableElevation type='submit' variant='contained'>
          Conectar
        </Button>
      </form>
    </div>
  )
}
