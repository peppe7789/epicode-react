import { useContext } from 'react';
import { Col } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import { AllTheBooksContext } from '../../../contexts/AllTheBooksContext';



const SingleBook = ({ img, title, price, category }) => {


    const { books } = useContext(AllTheBooksContext)
    
    


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