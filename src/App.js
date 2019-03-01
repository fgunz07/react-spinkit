import React from 'react'
import Flipbox from './components/Flipbox'
import Bouncebounce from './components/Bouncebounce'
import RectBoxes from './components/RectBoxes'
import Cubes from './components/Cubes'
import Drops from './components/Drops'
import Spinning from './components/Spinning'
import Dots from './components/Dots'
import Circledots from './components/Circledots'
import Puzzle from './components/Puzzle'
import Spinningdots from './components/Spinningdots'
import Fold from './components/Fold'

import { Container, 
          Card, 
          Header,
          Segment,
          List,
          Label,
          Grid } from 'semantic-ui-react'

class App extends React.Component {

  render () 
  {

    const style = {
      margin: 10
    }

    const textMuted = {
      color: '#bdc3c7'
    }

    const options = [
      {id: 1, name: 'width', example: '40px'},
      {id: 2, name: 'height', example: '40px'},
      {id: 3, name: 'bgColor', example: '#2c3e50'},
      {id: 4, name: 'margin', example: '100px auto'}
    ]

    let option1 = options.map(function(item) {
      return <List.Item key={item.id}>{item.name} = "{item.example}"</List.Item>
    })

    return (
      <div style={style}>
        <Container>
          <Header as='h2'>React SpinKit Wrapper <small style={textMuted}>v1.0.3</small> <Label color="blue">yarn add react-spinkit-wrapper or npm i react-spinkit-wrapper</Label></Header>
          <Grid columns={3} container>
            <Grid.Row>
              <Grid.Column>
                <Card>
                  <Card.Content>
                    <Flipbox margin="100px auto"/>

                    <Card.Header>Flipbox</Card.Header>
                    <Card.Meta>
                      <Label as='a' color='red' tag>
                          import &#123; Flipbox &#125; from 'spinkit-react'
                      </Label>
                    </Card.Meta>
                    <Card.Description>
                      
                      <Segment>
                        <strong>&#60; Flipbox &#47;&#62;</strong>
                          <br />
                          <br />
                          Optional props:
                          <List>
                            {option1}
                          </List>
                      </Segment>

                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Card.Content>
                    <Bouncebounce 
                        margin="100px auto"/>

                    <Card.Header>Bouncebounce</Card.Header>
                    <Card.Meta>
                      <Label as='a' color='red' tag>
                        import &#123; Bouncebounce &#125; from 'spinkit-react'
                      </Label>
                    </Card.Meta>
                    <Card.Description>

                      <Segment>
                        <strong>&#60; Bouncebounce &#47;&#62;</strong>
                          <br />
                          <br />
                          Optional props:
                          <List>
                            {option1}
                          </List>
                      </Segment>

                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Card.Content>
                    <RectBoxes 
                        margin="100px auto"/>

                    <Card.Header>RectBoxes</Card.Header>
                    <Card.Meta>
                      <Label as='a' color='red' tag>
                        import &#123; RectBoxes &#125; from 'spinkit-react'
                      </Label>
                    </Card.Meta>
                    <Card.Description>

                      <Segment>
                        <strong>&#60; RectBoxes &#47;&#62;</strong>
                          <br />
                          <br />
                          Optional props:
                          <List>
                            {option1}
                          </List>
                      </Segment>

                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Card>
                  <Card.Content>
                    <Cubes 
                        margin="100px auto"/>

                    <Card.Header>Cubes</Card.Header>
                    <Card.Meta>
                      <Label as='a' color='red' tag>
                        import &#123; Cubes &#125; from 'spinkit-react'
                      </Label>
                    </Card.Meta>
                    <Card.Description>

                      <Segment>
                        <strong>&#60; Cubes &#47;&#62;</strong>
                          <br />
                          <br />
                          Optional props:
                          <List>
                            {option1}
                          </List>
                      </Segment>

                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Card.Content>
                    <Drops 
                        margin="100px auto"/>

                    <Card.Header>Drops</Card.Header>
                    <Card.Meta>
                      <Label as='a' color='red' tag>
                        import &#123; Drops &#125; from 'spinkit-react'
                      </Label>
                    </Card.Meta>
                    <Card.Description>

                      <Segment>
                        <strong>&#60; Drops &#47;&#62;</strong>
                          <br />
                          <br />
                          Optional props:
                          <List>
                            {option1}
                          </List>
                      </Segment>

                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Card.Content>
                    <Spinning 
                        margin="100px auto"/>

                    <Card.Header>Spinning</Card.Header>
                    <Card.Meta>
                      <Label as='a' color='red' tag>
                        import &#123; Spinning &#125; from 'spinkit-react'
                      </Label>
                    </Card.Meta>
                    <Card.Description>

                      <Segment>
                        <strong>&#60; Spinning &#47;&#62;</strong>
                          <br />
                          <br />
                          Optional props:
                          <List>
                            {option1}
                          </List>
                      </Segment>

                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Card>
                  <Card.Content>
                    <Dots 
                        margin="100px auto"/>

                    <Card.Header>Dots</Card.Header>
                    <Card.Meta>
                      <Label as='a' color='red' tag>
                        import &#123; Dots &#125; from 'spinkit-react'
                      </Label>
                    </Card.Meta>
                    <Card.Description>

                      <Segment>
                        <strong>&#60; Dots &#47;&#62;</strong>
                          <br />
                          <br />
                          Optional props:
                          <List>
                            {option1}
                          </List>
                      </Segment>

                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>

              <Grid.Column>
                <Card>
                  <Card.Content>
                    <Circledots 
                        margin="100px auto"/>

                    <Card.Header>Circledots</Card.Header>
                    <Card.Meta>
                      <Label as='a' color='red' tag>
                        import &#123; Circledots &#125; from 'spinkit-react'
                      </Label>
                    </Card.Meta>
                    <Card.Description>

                      <Segment>
                        <strong>&#60; Circledots &#47;&#62;</strong>
                          <br />
                          <br />
                          Optional props:
                          <List>
                            {option1}
                          </List>
                      </Segment>

                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>

              <Grid.Column>
                <Card>
                  <Card.Content>
                    <Puzzle 
                        margin="100px auto"/>

                    <Card.Header>Puzzle</Card.Header>
                    <Card.Meta>
                      <Label as='a' color='red' tag>
                        import &#123; Puzzle &#125; from 'spinkit-react'
                      </Label>
                    </Card.Meta>
                    <Card.Description>

                      <Segment>
                        <strong>&#60; Puzzle &#47;&#62;</strong>
                          <br />
                          <br />
                          Optional props:
                          <List>
                            {option1}
                          </List>
                      </Segment>

                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Card>
                  <Card.Content>
                    <Spinningdots 
                        margin="100px auto"/>

                    <Card.Header>Spinningdots</Card.Header>
                    <Card.Meta>
                      <Label as='a' color='red' tag>
                        import &#123; Spinningdots &#125; from 'spinkit-react'
                      </Label>
                    </Card.Meta>
                    <Card.Description>

                      <Segment>
                        <strong>&#60; Spinningdots &#47;&#62;</strong>
                          <br />
                          <br />
                          Optional props:
                          <List>
                            {option1}
                          </List>
                      </Segment>

                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>

              <Grid.Column>
                <Card>
                  <Card.Content>
                    <Fold 
                        margin="100px auto"/>

                    <Card.Header>Fold</Card.Header>
                    <Card.Meta>
                      <Label as='a' color='red' tag>
                        import &#123; Fold &#125; from 'spinkit-react'
                      </Label>
                    </Card.Meta>
                    <Card.Description>

                      <Segment>
                        <strong>&#60; Fold &#47;&#62;</strong>
                          <br />
                          <br />
                          Optional props:
                          <List>
                            {option1}
                          </List>
                      </Segment>

                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>

              <Grid.Column>

              </Grid.Column>

            </Grid.Row>
            
          </Grid>

        </Container>
      </div>
    )
  }

}

export default App