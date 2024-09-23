import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const SingleBook = ({ img, title }) => {
    return (
        <Col
            sm
            md={3}
        >
            <Card >
                <Card.Img variant="top" src={img} />
                <Card.Title>{title}</Card.Title>
            </Card>
        </Col>
    )
}

export default SingleBook