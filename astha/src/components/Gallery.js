import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard.js";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { firstTab, secondTab, thirdTab } from "../components/GalleryImage.js";

export const Gallery = () => {
    return (
        <section className="gallery" id="gallery">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Gallery</h2>
                                    <p>✨ Makeup is not just about looking good — it’s about feeling powerful.
                                        I create looks that reflect your unique beauty with elegance and grace.
                                        Be radiant, be bold, be unforgettable — with Glam by Astha..</p>
                                    <Tab.Container id="gallery-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        firstTab.map((firstTab, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...firstTab}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        secondTab.map((secondTab, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...secondTab}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        thirdTab.map((thirdTab, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...thirdTab}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
