import { Container } from './components/Container/Container';
import { Header } from './components/header/Header'

export const App = () => {

  return (
    <>
      <Header />
      <main>
        <nav><Container /></nav>
        <section></section>
      </main>
      <footer></footer>
    </>
  )
}

