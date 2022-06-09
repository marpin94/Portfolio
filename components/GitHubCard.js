import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { data } from '../constants/data'

import styles from '../styles/GithubCard.module.css'

export const GitHubCard = () => {

    const projects = data.projects.map(item => {
        return(
            <Card className={styles.projectCard} key={item.id}>
                <Card.Img variant = "top" src = {item.img} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>Tools used: {item.tech}</Card.Text>
                </Card.Body>
                <Card.Footer> <a href={item.link}><i className="bi bi-github"></i></a></Card.Footer> 
            </Card>
        )
    })

    return (
        <div>
            <h1>Projects</h1>
            <hr />
            {projects}
        </div>
    )
}
