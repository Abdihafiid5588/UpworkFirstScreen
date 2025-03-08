import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Main from './components/Main'


createRoot(document.getElementById('root')).render(
  <div>
    <Header></Header>
    <Main></Main>
  </div>
)
