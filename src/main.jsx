import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router, Route, Switch } from 'wouter'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Switch>
        <Route path="/" component={App} />
        <Route>
          <App />
        </Route>
      </Switch>
    </Router>
  </StrictMode>,
)
