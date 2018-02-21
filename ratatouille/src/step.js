import React from 'react'
import { Icon, Step, Grid } from 'semantic-ui-react'
import Progress from './progress.js';

const StepExampleVertical = () => (
    <Grid columns={1} divided>
    <Grid.Row>
      <Grid.Column computer={12}>
      <Step.Group vertical style={{width: '80%'}}>
      <h1>Pasta de lo chef</h1>
      <Step completed>
        <Icon name='truck' />
        <Step.Content>
          <Step.Title>Boling the water</Step.Title>
          <Step.Description>Choose your shipping options</Step.Description>
        </Step.Content>
      </Step>
  
      <Step completed>
        <Icon name='payment' />
        <Step.Content>
          <Step.Title>Add the pasta</Step.Title>
          <Step.Description>Enter billing information</Step.Description>
        </Step.Content>
      </Step>
  
      <Step completed>
        <Icon name='payment' />
        <Step.Content>
          <Step.Title>Add the pasta</Step.Title>
          <Step.Description>Enter billing information</Step.Description>
        </Step.Content>
      </Step>
  
      <Step active>
        <Step.Content>
          <Step.Title>Cooking the mushrroms</Step.Title>
          <Progress></Progress>
        </Step.Content>
      </Step>
    </Step.Group>      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default StepExampleVertical