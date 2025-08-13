import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  styled,
  TableCell,
  tableCellClasses,
  Button,
  Chip,
} from '@mui/material'
import { useNavigate, useParams } from 'react-router'

import { ImQrcode } from 'react-icons/im'

export default function PageEvent() {
  const { id } = useParams() as { id: string }
  const navigate = useNavigate()

  const onNavigateScanQR = () => {
    navigate('/event-scantqr/' + id, { viewTransition: true })
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }))

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }))

  function createData(nombres: string, codigo: string, estado: boolean, tentrada: string, hingreso: string) {
    return { nombres, codigo, estado, tentrada, hingreso }
  }

  const rows = [
    createData('Marco Granados Neira', 'dFAFdsfdsfd', true, 'General', '07:00 PM'),
    createData('Miguel Rodriguez ', 'Fdsffdst34', false, 'General', '07:30 PM'),
    createData('Miguel Rodriguez ', 'kjhkjJFfF', true, 'General', '08:00 PM'),
    createData('Luis Rodriguez', 'LLijÑLFII', false, 'VIP', '08:30 PM'),
    createData('Junior Granados', 'FKkIJMkkYHH', true, 'VIP', '09:00 PM'),
  ]

  return (
    <div className='flex flex-col gap-2 p-2'>
      <h1>Evento {id}</h1>

      <div className='grid grid-cols-1 gap-2 m-2'>
        <Button disableElevation variant='contained' color='primary' startIcon={<ImQrcode />} onClick={onNavigateScanQR}>
          Scanear QR
        </Button>
        {/* <Button>a</Button>
        <Button>a</Button>
        <Button>a</Button> */}
      </div>

      {/* <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.884511967361!2d-76.77777350710863!3d-12.390663223355336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91059ed50ed3ba37%3A0xed904ff1d189cc1a!2zQ2ViaWNoZXLDrWEgIlJvc2l0YSI!5e0!3m2!1ses-419!2spe!4v1754323539231!5m2!1ses-419!2spe'
        width='600'
        height='450'
        loading='lazy'
      ></iframe> */}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombres</StyledTableCell>
              <StyledTableCell align='center'>Codigo</StyledTableCell>
              <StyledTableCell align='center'>Estado</StyledTableCell>
              <StyledTableCell align='center'>T. Entrada</StyledTableCell>
              <StyledTableCell align='center'>Hora de Ingreso</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.codigo}>
                <StyledTableCell component='th' scope='row'>
                  {row.nombres}
                </StyledTableCell>
                <StyledTableCell align='right'>{row.codigo}</StyledTableCell>
                <StyledTableCell align='right'>
                  {/* {row.estado ? 'Activo' : 'Inactivo'} */}

                  <Chip
                    label={row.estado ? 'Activo' : 'Inactivo'}
                    variant='filled'
                    color={row.estado ? 'primary' : 'secondary'}
                    size='small'
                  />
                </StyledTableCell>
                <StyledTableCell align='right'>{row.tentrada}</StyledTableCell>
                <StyledTableCell align='right'>{row.hingreso}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
