import { createBrowserRouter } from 'react-router-dom'

import { RootLayout } from './components/shared/layout/RootLayout'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <h1>Formulário de Simulação</h1>,
      },
      {
        path: '/resultado',
        element: <h1>Resultado da simulação</h1>,
      },
      {
        path: '/historico',
        element: <h1>Historico da simulação</h1>,
      },
    ],
  },
])
