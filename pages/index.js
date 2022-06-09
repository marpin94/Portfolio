import { Card } from 'react-bootstrap'
import About from '../components/About'
import Contact from '../components/Contact.js'
import { GitHubCard } from '../components/GitHubCard'

import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <div className={styles.container}>
    <Card className={styles.card} >
     <Header />
     <About />
     <GitHubCard />
     <Contact />
    </Card>

    <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}
    </style>
  </div>

  )
}
