import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import store from './redux/store.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

// Подключите компоненты к Redux store, используя `connect`.

// Настройте `index.js`:

// Используйте `ReactDOM.render`, чтобы отобразить приложение в DOM







