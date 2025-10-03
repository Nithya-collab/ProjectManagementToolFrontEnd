import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import { store } from './Redux/Store'
import MetricsDashboard from './pages/Metrics/Dashboard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Provider store={store}>
        <App />
        <MetricsDashboard />
        </Provider>
    </BrowserRouter>
  </StrictMode>,
)
