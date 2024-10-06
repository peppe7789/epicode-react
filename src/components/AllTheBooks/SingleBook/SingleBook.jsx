import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const SingleBook = ({ img, title, price, category }) => {
    return (
        <Col
        
            sm
            md={6}
            className='mt-3'
        >
            <Card >
                <Card.Img variant="top" src={img} />
                <Card.Title>{title}</Card.Title>
                <Card.Text>{category}</Card.Text>
                <Card.Text>{price}</Card.Text>
            </Card>
        </Col>
    )
}

export default SingleBook