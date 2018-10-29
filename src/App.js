import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`   
  *, html, body {        
    font: 16px 'Montserrat', sans-serif;
  }  
  * { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0; 
  }
  body, #root {
    min-height: 100vh;
  }
`
const App = ({ history }) => {
  return (
    <Fragment>
      <ConnectedRouter history={history}>
        { routes }      
      </ConnectedRouter>
      <GlobalStyle />
    </Fragment>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App