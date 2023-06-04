import {Container, Row, Card, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS dari Bootstrap
import POS from '../assets/img/POS.jpg';
import Travel from '../assets/img/Travel.jpg';
import UAS from '../assets/img/UAS.jpg';

const Develope = () => {
  return (
    <div className="develope">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="d-flex align-items-center">
            <div className="skills-box">
              <Card className="card">
            <img
                src={POS}
                alt="POS"
                style={{ width: '100%', padding: '10px'}}
                className="POS"
              />
              <Card.Body>
                <Card.Title>Point Of Sale (POS)</Card.Title>
                <Card.Text>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione mollitia ipsa minus odit dignissimos sit ducimus iure voluptate accusamus rerum! Fugiat, reiciendis. Minus blanditiis possimus nihil magni minima ex provident.</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card">
            <img
                src={Travel}
                alt="Travel"
                style={{ width: '100%', padding: '10px'}}
                className="Travel"
              />
              <Card.Body>
                <Card.Title>Travel Website</Card.Title>
                <Card.Text>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione mollitia ipsa minus odit dignissimos sit ducimus iure voluptate accusamus rerum! Fugiat, reiciendis. Minus blanditiis possimus nihil magni minima ex provident.</p>
                </Card.Text>
                <Button variant="danger" href="https://main--thriving-croissant-9a5d34.netlify.app/">Visit Site</Button>
              </Card.Body>
            </Card>
            <Card className="card">
            <img
                src={UAS}
                alt="UAS"
                style={{ width: '100%', padding: '10px'}}
                className="UAS"
              />
              <Card.Body>
                <Card.Title>Jaring Aspirasi Warga</Card.Title>
                <Card.Text>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione mollitia ipsa minus odit dignissimos sit ducimus iure voluptate accusamus rerum! Fugiat, reiciendis. Minus blanditiis possimus nihil magni minima ex provident.</p>
                </Card.Text>
              </Card.Body>
            </Card>
            </div>
          </Row>
        </Container>
      </header>
    </div>
  )
}

export default Develope