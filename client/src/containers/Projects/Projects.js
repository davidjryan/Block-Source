import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import './Projects.css';
import { connect } from 'react-redux';
import { projectsEndpoint, contributorsEndpoint } from '../../actions';
import FlatButton from 'material-ui/FlatButton';

export class Projects extends Component {
  componentDidMount() {
    this.props.handleProjectsFetch()
  }

  mapProjects() {
    // const contributors = this.props.contributors.length ? <p>{this.props.contributors}</p> : null;
    return this.props.projects.map( (project, index) => {
      return <Card key={index}>
                <CardHeader
                  title={project.title}
                  subtitle={`Goal Amount: ${project.goal_amount} Fund Amount: ${project.fund_amount}`}
                />
                <CardText>
                  {project.description}
                </CardText>
                <CardActions actAsExpander={true}>
                  <FlatButton label="Contributors" onClick={() => this.props.showContributors(project.id)}/>
                </CardActions>
                <CardText expandable={true}>
                  
                </CardText>
              </Card>
      })
    }

  render() {

    return (
      <div className='projects-component'>
        {this.props.projects && this.mapProjects()}
      </div>
    )
  }
}

export const mapStateToProps = store => ({
  projects: store.projects,
  contributors: store.projectContributors
})

export const mapDispatchToProps = (dispatch) => {
  return {
    handleProjectsFetch: () => {
      dispatch(projectsEndpoint())
    },
    showContributors: (id) => {

      dispatch(contributorsEndpoint(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);