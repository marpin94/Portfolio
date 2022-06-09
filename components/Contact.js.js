
import { Row, Col } from "react-bootstrap";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Contact</h2>
      <hr></hr>
      <Row className={styles.boxes}>
        <Col lg={4} md={6} sm={12}>
          <a
            href="mailto:martin.arpin@outlook.com"
            target="_blank"
            rel="noreferrer"
            className={styles.box}
          >
            <i className="bi bi-envelope"></i>
            Email
          </a>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <a
            href="https://github.com/marpin94"
            className={styles.box}
          >
            <i className="bi bi-github"></i>
            Github
          </a>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <a
            href="tel:+919946792650"
            target="_blank"
            rel="noreferrer"
            className={styles.box}
          >
            <i className="bi bi-telephone"></i>
           206 641-5380
          </a>
        </Col>
      </Row>
    </div>
  );
}