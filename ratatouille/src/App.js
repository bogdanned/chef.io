import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Step from './step.js';
import Menu from './menu.js';
import { Icon, Grid } from 'semantic-ui-react'
import styled from 'styled-components'
import {ThingsClient} from "./things-client.js";


const Card = styled.div`
  width: 200px:
  height: 100px;
`

const username = 'bcx18'
const password = 'bcx18!Open2'
const apitoken = 'db7f4e0cca344d32be72914311f1055f'
const thingid = 'bosch.xdk:9677286257312676'
const topic = 'bosch.xdk/myXDK/things/twin/events/modified'

function prettyPrintJson(json) {
  return JSON.stringify(json, undefined, 2);
}

function tryParseJson(message) {
  try {
      return JSON.parse(message);
  } catch (e) {
      return message;
  }
}


class App extends Component {
  async componentWillMount(){
    const client = new ThingsClient((message) => {
      let json = tryParseJson(message);
      if (json && topic) {
          if (json.topic !== topic) {
              return;
          }
      }
      console.log(json)
    })
    
    await client.connect(username, password, apitoken);
    await client.retrieve(username, password, apitoken, thingid)
    
  }
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
          <Card></Card>
        </Grid.Row>
      </Grid>



          
  
      </div>
    );
  }
}

export default App;
