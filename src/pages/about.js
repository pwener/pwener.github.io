import React from 'react'

import aboutPic from '../assets/about-pic.jpg'
import { rhythm } from '../utils/typography'

import '../components/hardStyles.css'

class AboutPage extends React.Component {
    render() {
        return (
            <div className="about">
                <img
                    src={aboutPic}
                    alt={`Phelipe Wener`}
                    style={{
                        marginRight: rhythm(1 / 2),
                        marginBottom: 0,
                        width: rhythm(7),
                        borderRadius: '50%'
                    }}
                />
                <h2 style={{marginBottom: rhythm(2)}}>Sobre mim</h2>
                <div className="content">
                    <p>
                      Sempre aberto a tentar e aprender. Sou sujeito que gosta
                      de muitas coisas e odeia outras na mesma
                      intensidade(risos).
                      Adoro conversas estranhas, principalmente se for pra criar
                      teorias malucas de filmes ou séries. Gosto também de
                      música, um bom café, viajar, praticar esportes e um
                      barzinho com os amigos.
                    </p>
                    <p>
                      Profissionalmente, tudo começou por volta de uns 10 anos
                      atrás. Passava horas criando o visual de um ou outro blog.
                      Essa vontade, junto ao fascínio do impacto das redes
                      sociais, que ainda ganhavam força, me fizeram naquela
                      época entrar em um curso técnico de HTML/CSS. Não demorei
                      a perceber que havia muito a se criar, o mundo estava em
                      um grande processo de informatização e eu estava ansioso
                      para colaborar com isso. Aquele curso técnico tinha me
                      mostrado a ponta do iceberg, havia muito a aprender!
                      Decidi então fazer um curso técnico de Java, que me ajudou
                      a encarar muitas dificuldades futuras, foi a maior
                      motivação para cursar Engenharia de Software.
                    </p>
                    <p>
                      Na universidade, me tornei interessado em vários tópicos
                      da Engenharia de Software, se tornou um vício descobrir
                      como prover qualidade ao software e seu processo de
                      criação, basicamente esse é o tema chave o qual pretendo
                      discursar nesse blog.
                    </p>
                </div>
            </div>
        )
    }
}

export default AboutPage
