import {Container, Row} from "react-bootstrap";
import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import js from '../assets/img/js.png';
import bootstrap from '../assets/img/bootstrap.png';
import react from '../assets/img/react.png';
import figma from '../assets/img/firgma.png';
import php from '../assets/img/php1.png';
import photoshop from '../assets/img/ps.png';
import filmora from '../assets/img/filmora.png';
import affinity from '../assets/img/affinity.png';

const Skills = () => {
  return (
    <div className="skills">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="skills-box d-flex align-items-center text-center">
            <h2 className="mt-5">Technologi</h2>
            <div className="gambar-tech d-flex flex-wrap align-items-center justify-content-center">
            <img
                src={html}
                alt="html"
                style={{ width: '12%', height: '12%' }}
                className="html"
              />
              <img
                src={css}
                alt="css"
                style={{ width: '12%', height: '12%' }}
                className="css"
              />
              <img
                src={js}
                alt="js"
                style={{ width: '14%', height: '14%' }}
                className="js"
              />
              <img
                src={react}
                alt="react"
                style={{ width: '10%', height: '10%' }}
                className="react"
              />
              <img
                src={bootstrap}
                alt="bootstrap"
                style={{ width: '15%', height: '15%' }}
                className="bootstrap"
              />
              <img
                src={php}
                alt="php"
                style={{ width: '12%', height: '12%' }}
                className="php"
              />
              <img
                src={figma}
                alt="figma"
                style={{ width: '10%', height: '10%' }}
                className="figma"
              />
            </div>
            <br />
            <h2>Editing</h2>
            <div className="gambar-tech-2 d-flex flex-wrap align-items-center justify-content-center">
            <img
                src={photoshop}
                alt="photoshop"
                style={{ width: '12%', height: '12%' }}
                className="photoshop"
              />
              <img
                src={filmora}
                alt="filmora"
                style={{ width: '9%', height: '9%' }}
                className="filmora"
              />
              <img
                src={affinity}
                alt="affinity"
                style={{ width: '8%', height: '8%' }}
                className="affinity"
              />
            </div>  
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default Skills