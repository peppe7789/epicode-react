import { useState } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CommentArea from '../../CommentArea/commentArea';
import AllComments from '../../AllComments/AllComments';


const BookCard = ({ img, title, price, category, asin }) => {


    const [isSelected, setIsSelected] = useState(false)

    const [showCommentArea, setShowCommentArea] = useState(false)

    const [isCommentsVisible, setIsCommentsVisible] = useState(false)



    const toggleIsSelect = () => {
        setIsSelected(!isSelected)
    }

    const openCommentModal = () => {
        setIsCommentsVisible(true)
    }

    const selectedCardStyle = isSelected ? "border-5 border-danger" : ""


    return (
        <>
            <Col sx md={3}>
                <Card className={`h-100 ${selectedCardStyle}`}
                    onClick={toggleIsSelect}
                >
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
                        <div
                        className=' d-sm-flex flex-sm-column gap-sm-2'
                        >
                            <Button variant="danger">Acquista</Button>
                            <Button
                                onClick={openCommentModal}
                                variant="success"

                            >
                                Commenti
                            </Button>
                        </div>

                        {showCommentArea && (
                            <CommentArea
                                asin={asin}
                            />
                        )}
                    </Card.Body>
                </Card>
            </Col>
            {isCommentsVisible && (
                <AllComments
                    setIsCommentVisible={setIsCommentsVisible}
                    isCommentsVisible={isCommentsVisible}
                    asin={asin}
                />
            )}
        </>

    )
}

export default BookCard