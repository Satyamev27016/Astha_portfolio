import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logoAstha.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" className="logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.instagram.com/glam_by_astha?igsh=ejRxOGtjcjlsZGtv"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://www.instagram.com/glam_by_astha?igsh=ejRxOGtjcjlsZGtv"><img src={navIcon2} alt="Icon" /></a>
                            <a href="https://www.instagram.com/glam_by_astha?igsh=ejRxOGtjcjlsZGtv"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p>© {new Date().getFullYear()}. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
