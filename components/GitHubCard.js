import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { data } from '../constants/data'

import styles from '../styles/GithubCard.module.css'

export const GitHubCard = () => {

    const projects = data.projects.map(item => {
        return(
            <Card className={styles.projectCard} key={item.id}>
                <Card.Img variant = "top" src = {item.img} />
                <Card.Body className={styles.cardBody}>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className={styles.projectDesc}>{item.description}</Card.Text>
                    <Card.Text  className={styles.projectDesc}>Tools used: {item.tech}</Card.Text>
                </Card.Body>
                <Card.Footer> <a href={item.link}><i className="bi bi-github"></i></a></Card.Footer> 
            </Card>
        )
    })

    return (
        <div>
            <h1>Projects</h1>
            <hr />
            <div className={styles.cardContainer}>
                {projects}
            </div>
        </div>
    )
}
