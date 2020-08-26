import React from 'react';
import Header from './ui/Header';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme'


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />

          <Switch>
            <Route exact path="/" component={() => (<div>Home</div>)} />
            <Route exact path="/about" component={() => (<div>About</div>)} />
            <Route exact path="/contact" component={() => (<div>Contact</div>)} />
            <Route exact path="/revolution" component={() => (<div>Revolution</div>)} />
            <Route exact path="/service" component={() => (<div>Services</div>)} />

          </Switch>


        </BrowserRouter>




      </ThemeProvider>


    </>
  );
}

export default App;



///// 2 18