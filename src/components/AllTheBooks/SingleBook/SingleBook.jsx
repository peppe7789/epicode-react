import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const SingleBook = ({ img, title }) => {
    return (
        <Card >
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default SingleBook