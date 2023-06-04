import {Container, Row, Col} from "react-bootstrap";
import { FiInstagram } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center text-center">
            <Col lg="12">
            <h1 className="fw-bold">PORTOFOLIO 2023</h1>
            <p className="mb-4 text-danger">Ardyanto Widyadana Syahputra</p>
            <div className="callme">
              <FiInstagram size={30}/>
              <label htmlFor="">@ardyyaann_</label>
              <FiMail size={30}/>
              <label htmlFor="">ardyantows01@gmail.com</label>
            </div>
            </Col>
          </Row>
        
        </Container>
      </header>
    </div>
  )
}

export default HomePage