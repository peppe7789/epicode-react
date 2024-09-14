import { Col, Container, Row } from "react-bootstrap"
import WelcomeImg from "../../assets/foto-welcome.jpg"


const Welcome = () => {
    return (
        <Container>
            <Row className="d-flex justify-content-center align-items-center p-4 gap-4">
                <Col>
                <img className="h-100 w-100 object-fit-container" src={WelcomeImg} alt="" />
                </Col>
                <Col sx={12} md={6} className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-danger">
                        Welcom in my Sites
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, tenetur!
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome