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
                <h2 style={{marginBottom: rhythm(2)}}>Phelipe Wener</h2>
                <div className="content">
                    <p>
                      Sou sujeito que gosta de muitas coisas, sempre aberto a tentar
                      e aprender. Adoro conversas estranhas, principalmente se for
                      pra criar teorias malucas de filmes ou séries.
                    </p>
                    <p>
                      Por volta de uns 10 anos atrás, lembro que um dos meus hobbies era blogar.
                      Passava horas criando o visual de um ou outro blog que nem mesmo chegava a publicar.
                      Naquele momento me dedicava a uma busca pelo visual ideal. Essa vontade, junto ao
                      fascínio do impacto das redes sociais, que ainda ganhavam força, me fizeram naquela
                      época entrar em um curso técnico de HTML/CSS. Não demorei a perceber que havia muito
                      a se criar, o mundo estava em um grande processo de informatização e eu estava ansioso para colaborar com isso.
                      Aquele curso técnico tinha me mostrado a ponta do iceberg, havia muito a aprender!
                      Decidi então fazer um curso técnico de Java, que me ajudou a encarar muitas dificuldades futuras,
                      foi ainda a maior motivação para cursar Engenharia de Software.
                    </p>
                    <p>
                      Apenas na universidade, consegui compreender o que muitos da área não percebem:
                      Software é um produto extremamente complexo, difícil de se criar, mais difícil ainda de se manter,
                      o que exige muita competência e uma constante reflexão a cada passo do seu ciclo de vida.
                      Dessa forma fiquei interessado em vários tópicos da Engenharia de Software, se tornou um
                      vício descobrir como prover qualidade ao software e ao seu processo de criação, basicamente
                      esse é o tema chave o qual pretendo discursar nesse blog.
                    </p>
                </div>
            </div>
        )
    }
}

export default AboutPage
