import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Step from './step.js';
import Menu from './menu.js';
import { Icon, Grid } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
              <header className="App-header">
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
          <img src={'https://movieplayer.net-cdn.it/images/2007/09/13/remy-uno-dei-personaggi-protagonisti-di-ratatouille-47446.jpg'} className="App-logo" alt="logo" />
          <h1 className="App-title">Chef.ai</h1>
          <p className="App-intro">
          Taking cooking to the next level.
          </p>
        </header>
      <Grid>

        <Grid.Row>

        </Grid.Row>

        <Grid.Row>
        <Menu></Menu>

        </Grid.Row>
        <Grid.Row>
        <Step></Step>

        </Grid.Row>
      </Grid>



          
  
      </div>
    );
  }
}

export default App;
