import React from "react"
import Seo from "../components/seo"
import Layout from "../components/Layout"
import {
  AboutContent,
  AboutTitle,
  AboutWrapper,
} from "../components/About/style"

const AboutPage = () => (
  <Layout>
    <Seo title="sobre mim" />
    <AboutWrapper>
      <AboutTitle>Sobre Mim</AboutTitle>

      <AboutContent>
        Sou apaixonada por desafios e também sou muito curiosa. Encontrei na
        programação uma forma de manter meus olhos brilhando todo dia. Tenho
        experiência em desenvolvimento mobile e front-end.
      </AboutContent>

      <AboutContent>
        Sou Bióloga de formação com experiência acadêmica por 13 anos.
        Atualmente curso Análise e Desenvolvimento de Sistemas.
      </AboutContent>
    </AboutWrapper>
  </Layout>
)

export default AboutPage
