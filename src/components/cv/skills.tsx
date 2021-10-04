import { Line } from "rc-progress"
import React from "react"

interface SkillProps {
  skills: Array<Skills>
}

const Skills = ({ skills }: SkillProps) => {
  return (
    <>
      {skills
        .sort((a, b) => b.percent - a.percent)
        .map(skill => (
          <div style={{ textAlign: "left" }}>
            <span>{skill.name}</span>
            <Line
              percent={skill.percent}
              trailWidth={3}
              strokeWidth={3}
              strokeColor="#7f8c8d"
            />
          </div>
        ))}
    </>
  )
}

export default Skills
