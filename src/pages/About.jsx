import {Container, Row} from "react-bootstrap";
import styled from 'styled-components';
import { FiInstagram } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import myphoto from '../assets/img/myphoto.png';
import SD from '../assets/img/SD.png';
import SMP from '../assets/img/SMP.png';
import SMA from '../assets/img/SMA.png';
import UPN from '../assets/img/UPN.png';

const Image = styled.img`
  width: 100%;

  @media (max-width: 768px) { /* Ubah nilai 768px sesuai dengan ukuran layar yang diinginkan */
    width: 70%; /* Ubah lebar gambar sesuai kebutuhan pada ukuran layar tertentu */
  }
`;
const RightContent = styled.div`
  text-align: start; /* Default text alignment */

  @media (max-width: 768px) {
    text-align: center; /* Text alignment for smaller screens */
    margin-top: 25px;
    padding-inline: 12px;
  }
`;

const About = () => {
  return (
    <div className="about">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center text-center">
            <div className="about-content">
              <div className="left-content">
                <Image
                src={myphoto}
                alt="myphoto"
                className="myImage mr-2"
                />
              </div>
              <RightContent className="right-content">
                <p className="text-danger">Hello I'm</p>
                <h1 className="fw-bold">Ardyanto Widyadana Syahputra</h1>
                <p className=" deskripsi">
                I am an enthusiastic student eager to develop skills and knowledge in the field of computer science. I have a particular interest inprogramming. Throughout my college years, I have taken various courses and competitions that encompass software programming and design, as well as participating in software development projects. I am currently interested in learning more about the utilization of JavaScript technology to build more dynamic websites. I'm a fast phase person who can handle precisely under pressure.
                </p>
              </RightContent>
            </div>
            <span className="myEducation fw-bold">My Education</span>
            <div className="timeline">
              <div className="container">
                <div className="timeline-container left-container">
                  <img
                  src={SD}
                  alt="SD"
                  style={{ width: '12%' }} // Sesuaikan tinggi gambar sesuai kebutuhan
                  />
                  <div className="text-box">
                    <h2>SDN Kebraon II</h2>
                    <small>2009 - 2015</small>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque vero quibusdam similique dolorem impedit aperiam, minus amet. Quos, aspernatur incidunt.</p>
                    <span className="left-container-arrow"></span>
                  </div>
                </div>

                <div className="timeline-container right-container">
                  <img
                  src={SMP}
                  alt="SMP"
                  style={{ width: '12%' }} // Sesuaikan tinggi gambar sesuai kebutuhan
                  />
                  <div className="text-box">
                    <h2>SMPN 22 Surabaya</h2>
                    <small>2015 - 2018</small>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque vero quibusdam similique dolorem impedit aperiam, minus amet. Quos, aspernatur incidunt.</p>
                    <span className="right-container-arrow"></span>
                  </div>
                </div>

                <div className="timeline-container left-container">
                  <img
                  src={SMA}
                  alt="SMA"
                  style={{ width: '12%' }} // Sesuaikan tinggi gambar sesuai kebutuhan
                  />
                  <div className="text-box">
                    <h2>SMAN 16 Surabaya</h2>
                    <small>2018 - 2021</small>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque vero quibusdam similique dolorem impedit aperiam, minus amet. Quos, aspernatur incidunt.</p>
                    <span className="left-container-arrow"></span>
                  </div>
                </div>

                <div className="timeline-container right-container">
                  <img
                  src={UPN}
                  alt="UPN"
                  style={{ width: '12%' }} // Sesuaikan tinggi gambar sesuai kebutuhan
                  />
                  <div className="text-box">
                    <h2>UPN Veteran Jawa Timur</h2>
                    <small>2021 - present</small>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque vero quibusdam similique dolorem impedit aperiam, minus amet. Quos, aspernatur incidunt.</p>
                    <span className="right-container-arrow"></span>
                  </div>
                </div>


              </div>
            </div>

          </Row>
        
        </Container>
      </header>
    </div>
  )
}

export default About