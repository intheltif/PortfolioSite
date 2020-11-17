import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
              <Grid className='landing-grid'>
                <Cell col={12}>
                  <img
                    src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
                    alt="Avatar"
                    className="avatar-img"
                  />
                  <div className="banner-text">
                    <h1>Full Stack Web Developer</h1>

                    <hr />

                    <p>HTML/CSS | JavaScript | React | React Native | Java | Python | Flask/Django | MongoDB | SQL | GraphQL</p>

                    <div className="social-links">
                      {/* LinkedIn */}
                      <a href="https://www.linkedin.com/evert-ball" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                      </a>

                      {/* Github */}
                      <a href="https://www.github.com/intheltif" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                      </a>

                      {/* Email */}
                      <a href="mailto:evert.ball@gmail.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-envelope-square" aria-hidden="true" />
                      </a>

                    </div>
                  </div>
                </Cell>
              </Grid>  
            </div>
        )
    }
}

export default Landing;