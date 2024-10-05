import { Row } from "react-bootstrap"
import { ClockLoader } from "react-spinners"

const LoadingSpinner = () => {


    return (
        <Row>
            <Col>
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