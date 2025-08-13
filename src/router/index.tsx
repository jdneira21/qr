import { createHashRouter } from 'react-router'
import PageLogin from '../pages/PageLogin'
import PageEvents from '../pages/PageEvents'
import PageRegisterEvent from '../pages/PageRegisterEvent'
import PageEvent from '../pages/PageEvent'
import PageEventScantQR from '../pages/PageEventScantQR'

export const router = createHashRouter([
  {
    path: '/',
    element: <PageLogin />,
  },
  {
    path: '/events',
    element: <PageEvents />,
  },
  {
    path: '/register-event',
    element: <PageRegisterEvent />,
  },
  {
    path: '/event/:id',
    element: <PageEvent />,
  },
  {
    path: '/event-scantqr/:id',
    element: <PageEventScantQR />,
  }
])
