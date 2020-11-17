import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

const JAVA_TAB_INDEX = 0
const JS_TAB_INDEX = 1
const PYTHON_TAB_INDEX = 2
const DB_TAB_INDEX = 3

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: 0
        };
    }

    toggleCategories() {
        switch(this.state.activeTab) {
            case JAVA_TAB_INDEX:
                return(
                  <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle 
                      style={{color: '#000', height: '176px', background: 
                      'url(https://bit.ly/2UC6o3a) center / cover'}}
                    >
                      Java Project #1
                    </CardTitle>
                    <CardText>Lorem Ipsum sit amet dolar</CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                  </Card>

                );
            case JS_TAB_INDEX: 
                return(
                <div><h1>This is JavaScript</h1></div>
                );
            case PYTHON_TAB_INDEX: 
                return(
                <div><h1>This is Python</h1></div>
                );
            case DB_TAB_INDEX: 
                return(
                <div><h1>This is Database</h1></div>
                );
            default:
                <div><h1>Uh oh...You shouldn't be here!</h1></div>
        }

    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    {/* TODO: Change this!!! */}
                    <Tab>Java</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>Python</Tab>
                    <Tab>Database</Tab>
                </Tabs>

                <section className="projects-grid">
                  <Grid className="projects-grid">
                    <Cell col={12}>
                      <div className="content">
                        {this.toggleCategories()}
                      </div>
                    </Cell>
                  </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;