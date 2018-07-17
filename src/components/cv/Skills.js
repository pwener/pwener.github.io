import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import { Line, Circle } from 'rc-progress'

import './cv.css'

class Skills extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.skills.map((skill) =>
            <div style={{textAlign: 'left'}}>
              <span>{skill.name}</span>
              <Line percent={skill.percent} trailWidth="3" strokeWidth="3" strokeColor="#7f8c8d" />
            </div>
          )
        }
      </div>
    )
  }
}

export default Skills;
