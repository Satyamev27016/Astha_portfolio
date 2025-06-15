import { Container, Row } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    return (
        <div className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div
                                className={isVisible ? "animate__animated animate__fadeIn" : ""}
                            >
                                <h1>Glam by Astha</h1>
                                <h1>Makeup</h1>
                                <h1>Portfolio</h1>
                                <p style={{ fontWeight: '600', color: '#fff', lineHeight: '1.6' }} >
                                    ✨ Step into the world of **bold beauty and flawless glam**. <br />
                                    At *Glam by Astha*, I transform natural features into radiant masterpieces. <br />
                                    From stunning bridal looks to dazzling party styles — each creation is crafted with precision, passion, and pure artistry.
                                </p>
                            </div>
                        )}
                    </TrackVisibility>
                </Row>
            </Container>
        </div>
    );
};
