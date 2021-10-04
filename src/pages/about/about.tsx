import "./style.css"

import * as React from "react"

import BurguerMenu from "../../components/menu/menu"
import Footer from "../../components/footer/footer"
import { StaticImage } from "gatsby-plugin-image"

const AboutPage = () => {
  return (
    <>
      <BurguerMenu />
      <div className="page-wrapper">
        <div className="about">
          <StaticImage
            className="bio-avatar"
            layout="constrained"
            formats={["auto", "webp", "avif"]}
            src="../../images/profile-pic.png"
            width={150}
            height={150}
            quality={100}
            alt="Profile picture"
          />
          <h2 className="about-header">Sobre mim</h2>
          <div className="about-content">
            <p>
              Aberto para aprender coisas novas. Constantemente estou explorando
              o conhecimento externo a minha área de formação. Adoro conversas
              sobre ciência, ficção, filosofia e artes, principalmente se for
              pra criar teorias malucas de filmes e séries. Admiro a música em
              suas várias formas, gosto de viajar, praticar esportes e me
              arrisco em alguns jogos eletrônicos.
            </p>
            <p>
              Profissionalmente, tudo começou quando tinha por volta dos meus 15
              anos. Passava horas criando o visual de um ou outro blog. Essa
              vontade, junto ao fascínio do impacto das redes sociais, que ainda
              ganhavam força, me fizeram naquela época entrar em um curso
              técnico de HTML/CSS. Não demorei a perceber que havia muito a se
              criar, o mundo estava em um grande processo de informatização e eu
              estava ansioso para colaborar com isso. Aquele curso técnico tinha
              me mostrado a ponta do iceberg, havia muito a aprender! Decidi
              então fazer um outro curso técnico de Java, que me ajudou a
              encarar muitas dificuldades futuras, foi a maior motivação para
              cursar Engenharia de Software.
            </p>
            <p>
              Na universidade, me tornei interessado por vários tópicos da
              Engenharia de Software, se tornou um fascínio descobrir as formas
              prover qualidade ao software e seu processo de criação,
              basicamente esse é o tema chave o qual pretendo discursar nesse
              blog.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
