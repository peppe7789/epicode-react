import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const BookCard = ({ img, title, price, category }) => {
    return (
        <Col sx md={3}>
            <Card className="h-100 ">
                <Card.Img
                    variant="top"
                    className="h-100 w-100 object-fit-cover rounded-3"
                    src={img} />
                <Card.Body>
                    <Card.Title className="text-truncate">
                        {title}
                    </Card.Title>
                    <Card.Text>{category}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                    <Button variant="danger">Acquista</Button>
                </Card.Body>
            </Card>
        </Col>

    )
}

export default BookCard