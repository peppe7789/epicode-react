import { Col, Container, Row } from "react-bootstrap"

import { SlSocialFacebook, SlSocialGoogle, SlSocialLinkedin, SlSocialPintarest } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import NavbarLinks from "../MyNav/NavbarLinks/NavbarLinks";


const MyFooter = () => {
    return (
        <footer className="bg-black text-white p-5 mt-3">
            <Container >
                <Row className=" d-flex justify-content-center align-items-center flex-column gap-3">
                    <Col
                        className="d-flex justify-content-center"
                        sm={12} md={6}
                    >
                        {/* icon footer */}
                        <div className="d-flex gap-5 fs-4">
                            <SlSocialFacebook />
                            <SlSocialGoogle value={{ className: 'SlSocialGoogle' }} />
                            <SlSocialInstagram />
                            <SlSocialLinkedin />
                            <SlSocialPintarest />
                        </div>
                    </Col>
                    <Col>
                        <NavbarLinks />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default MyFooter