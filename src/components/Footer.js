import { Row, Col, Container } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer>
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={4}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="">
                                <img src={navIcon1} alt="Linkedin Icon" />
                            </a>
                            <a href="">
                                <img src={navIcon2} alt="Facebook Icon" />
                            </a>
                            <a href="">
                                <img src={navIcon3} alt="Instagram Icon" />
                            </a>
                        </div>
                        <p>CopyRight 2022. All Rights Reserved by Yamikani Mwanza</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
