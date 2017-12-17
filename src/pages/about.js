import React from 'react'

import profilePic from '../assets/profile-pic.jpg'
import { rhythm } from '../utils/typography'

import '../components/hardStyles.css'

class AboutPage extends React.Component {
    render() {
        return (
            <div className="about">
                <img
                    src={profilePic}
                    alt={`Phelipe Wener`}
                    style={{
                        marginRight: rhythm(1 / 2),
                        marginBottom: 0,
                        width: rhythm(7),
                        height: rhythm(7),
                    }}
                />
                <h2>Phelipe Wener</h2>
                <div className="content">
                    <p>
                        Lembro de uns 10 anos atrás, quando modificava o html de alguns blogs, tentando criar o visual ideal.
                        Essa vontade de criar, junto ao fascinio do impacto das redes sociais que ainda ganhavam força, me 
                        fez naquela mesma época entrar em um curso técnico de HTML/CSS. Não demorou para perceber que 
                        havia muito a se criar, o mundo estava em um grande processo de informatização e eu estava disposto a 
                        colaborar nisso. Não satisfeito com as habilidades conquistadas no meu curso técnico de <i>webdesign</i>, 
                        decidi fazer um curso técnico de Java, que me ajudou a encarar muitas dificuldades futuras, foi ainda a
                        mais uma motivação para cursar Engenharia de Software.
                    </p>
                    <p>
                        Apenas na universidade, consegui compreender o que muitos da área não notam: Software é um 
                        produto extremamente complexo, difícil de se criar, mais difícil ainda de se manter, o que exige muita
                        competência e reflexão a cada passo do seu ciclo de vida. Desse quadro, fiquei interessado em várias áreas 
                        da Engenharia de Software que são cruciais para prover qualidade, esses serão os assuntos  chave o qual 
                        pretendo discursar nesse blog.
                    </p>
                </div>
            </div>
        )
    }
}

export default AboutPage