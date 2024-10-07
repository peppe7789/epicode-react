import { Row,Col} from "react-bootstrap"
import { ClockLoader } from "react-spinners"

const LoadingSpinner = () => {


    return (
        <Row>
            <Col className="d-flex justify-content-center align-content-center">
                <ClockLoader
                    color="red"
                    loading
                    size={100}
                    speedMultiplier={1}
                />
            </Col>
        </Row>
    )
}

export default LoadingSpinner