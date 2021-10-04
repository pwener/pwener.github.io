type Experience = {
  title: string
  role: string
  date: string
  description: string
}

type Contact = {
  email: string
  number: string
  address: string
  github: string
}

type Education = {
  name: string
  description: string
}

type Skills = {
  name: string
  percent: number
}

interface CurriculumProps {
  headers: Array<string>
  name: string
  role: string
  experiences: Array<Experience>
  contact: Contact
  education: Array<Education>
  skills: Array<Skills>
}

interface LeftProps {
  experiences: Array<Experience>
  contact: Contact
  headers: Array<string>
}

interface RightProps {
  education: Array<Education>
  skills: Array<Skills>
  headers: Array<string>
}
