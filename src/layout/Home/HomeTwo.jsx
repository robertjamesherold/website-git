import styles from './_Home.module.scss'
import  Container  from '@ly/Container/Container'
import { Hero } from '@cm/Home/hero/Hero'

export function Home() {
  return (
    <section id="home">
      <Container>
        <Hero />
      </Container>

    </section>
  )
}