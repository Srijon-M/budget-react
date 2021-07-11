import './App.css';
import { Container, Header, Statistic, Segment, Grid, Icon, Form, Button } from 'semantic-ui-react'

function App() {
  return (
    <Container>
      <Header as='h1'>Budget</Header>
      <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
        <Segment>
          <Grid columns={2}  textAlign='center' divided>
            <Grid.Row>
              <Grid.Column>
                <Statistic size='tiny' color='green'>
                  <Statistic.Label style={{textAlign: 'center'}}>
                    Income
                  </Statistic.Label>
                  <Statistic.Value>1,045.50</Statistic.Value>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
              <Statistic size='tiny' color='red'>
                  <Statistic.Label style={{textAlign: 'center'}}>
                    Expenses
                  </Statistic.Label>
                  <Statistic.Value>623.50</Statistic.Value>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Statistic>

      <Header as='h3'>
        History
      </Header>
      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Expense Type</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$10.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='green'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Income Type</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$100.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Expense Type 2</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$20.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>Add transactions</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon='tags'
            width={12}
            label='Description' 
            placeholder='New shiney thing'
          />
          <Form.Input
            width={4}
            label='Value'
            placeholder='100.00'
            icon='dollar'
            iconPosition='left'
          />
        </Form.Group>
        <Button.Group style={{ marginTop: '20px' }}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Submit</Button>
        </Button.Group>
      </Form>

    </Container>
  );
}

export default App;
