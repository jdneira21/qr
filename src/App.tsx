// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { RouterProvider } from 'react-router'
import { router } from './router/index'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { blue } from '@mui/material/colors'
// import { Button, TextField } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import '@fontsource/open-sans/400.css'
import { esES } from '@mui/x-date-pickers/locales'

const theme = createTheme(
  {
    palette: {
      mode: 'light',

      background: {
        default: '#e8eaecff',
        // paper: '#1e1e1e',
      },
      primary: {
        main: '#1282ff',
        // contrastText: 'red',
      },
    },
    typography: {
      fontFamily: 'Open Sans',
      fontSize: 13.5,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: blue[600],
            color: 'white',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            // backgroundColor: blue[600],
            color: 'white',
          },
        },
      },
    },
  },
  esES
)

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <div className='flex flex-col overflow-hidden w-screen h-screen'>
        <div className='mb-auto flex flex-col overflow-hidden'> */}
          <RouterProvider router={router} />
        {/* </div>
      </div> */}
    </ThemeProvider>
  )
}

export default App
