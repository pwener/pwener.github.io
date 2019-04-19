import React from 'react'

import profilePic from '../assets/profile-pic.png'
import { rhythm } from '../utils/typography'

import Experience from '../components/cv/Experience'
import Education from '../components/cv/Education'
import Contact from '../components/cv/Contact'
import Skills from '../components/cv/Skills'

import '../components/hardStyles.css'

class Curriculum extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center', marginBottom: rhythm(2)}}>
                <h1 style={{marginBottom: rhythm(1), marginTop: 0}}>Phelipe Wener</h1>
                <h5 style={{marginBottom: rhythm(1), marginTop: 0, color: '#7f8c8d'}}>Engenheiro de Software</h5>
                <img
                  src={profilePic}
                  alt={`Phelipe Wener`}
                  style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    width: rhythm(5),
                    height: rhythm(5),
                  }}
                />
                <div style={{display:'flex', textAlign: 'right'}}>
                  <div className="split" style={{width: '50%'}}>

                    <h2 style={{marginBottom: rhythm(1)}}>Experiências</h2>
                    <Experience
                      title={'Goledger'}
                      role={'Engenheiro de Software'}
                      date={'Julho de 2018 - Até o momento'}
                      description={'Desenvolvimento de Blockchain privadas, atua com as tecnologias React, Python e Golang'} />

                    <Experience
                      title={'D3'}
                      role={'Engenheiro de Software'}
                      date={'Janeiro de 2018 - Julho de 2018'}
                      description={'Desenvolvimento de diversos projetos, atuou com React Native e Python'} />

                    <Experience
                      title={'Basis TI'}
                      role={'Estágiário'}
                      date={'Agosto de 2017 - Janeiro de 2018'}
                      description={'Interpretação de requisitos para contagem de pontos de função em projetos governamentais.'} />

                    <Experience
                      title={'Tribunal de Contas da União (TCU)'}
                      role={'Estagiário'}
                      date={'Janeiro de 2016 - Janeiro de 2017'}
                      description={'Refatoração de código e criação de testes para projetos legados em Java.'} />

                    <h2 style={{marginBottom: rhythm(1), marginTop: rhythm(2)}}>Contato</h2>

                    <Contact
                      email={'phwener@gmail.com'}
                      number={'61 993224078'}
                      address={'Asa Norte CLN 306 Bloco B, Brasília - DF'}
                      github={'pwener'} />
                  </div>

                  <div className="split"
                    style={{paddingLeft: rhythm(2), width: '40%', flexGrow: 1}}>

                    <h2 style={{marginBottom: rhythm(1)}}>Educação</h2>

                    <Education
                      course={'Bacharel em Engenharia de Software'}
                      description={'Universidade de Brasília, Gama-DF'} />

                    <Education
                      course={'Técnico Java Web'}
                      description={'EIBSBNET, Brasilia-DF'} />

                    <Education
                      course={'Técnico Webdesign(HTML/CSS)'}
                      description={'ETSP, Planaltina-DF'} />

                    <h2 style={{marginBottom: rhythm(1)}}>Habilidades</h2>
                    <Skills
                      skills={[
                        {name: 'Devops', percent: 80},
                        {name: 'Gerenciamento de projeto', percent: 90},
                        {name: 'Javascript', percent: 95},
                        {name: 'Python', percent: 70},
                        {name: 'Requisitos de Software', percent: 95},
                        {name: 'Ruby', percent: 70},
                        {name: 'Testes e Refatoração', percent: 80},
                      ]}/>
                  </div>
                </div>
            </div>
        )
    }
}

export default Curriculum
