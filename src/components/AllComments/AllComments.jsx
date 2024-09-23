import { ListGroup, ListGroupItem, Modal } from "react-bootstrap"
import { useState, useEffect } from "react"
import { APIKEY } from "../../costants/APIKEY"
import CommentArea from "../CommentArea/commentArea"
import Button from 'react-bootstrap/Button';                                                                                                                                  



const AllComments = ({ isCommentsVisible, setIsCommentVisible, asin }) => {
    const ENDEPOITGETCOMMENT = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`
    const [comments, setComments] = useState([])
    const getComment = async () => {
        try {
            const response = await fetch(ENDEPOITGETCOMMENT, {
                headers: {
                    "Authorization": `Bearer ${APIKEY}`,
                    "Content-Type": "application/json",
                }
            })
            const data = await response.json()
            setComments(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getComment()
    }, [asin])


    const closeModal = () => {
        setIsCommentVisible(false)
    }
    return (
        <Modal
            show={isCommentsVisible}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title>
                    Commenti
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CommentArea
                    asin={asin}
                    
                />

                {comments && comments.map((comment, index) => (
                    <ListGroup
                        variant="flush"
                    >
                        <ListGroup.Item
                            key={`comment-${index}`}
                        >
                            <div className="d-flex flex-column gap-1">
                                
                                <div>{comment.author}</div>
                                <div>
                                    <div>{comment.comment}</div>
                                    <div>{comment.rate}</div>
                                </div>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                ))}
                {comments.length <= 0 && (
                    <ListGroup.Item>
                        Non ci sono commenti per questo libro
                    </ListGroup.Item>
                )}

            </Modal.Body>
            <Modal.Footer>
                <Button
                    className="btn btn-block"
                    onClick={closeModal}
                    variant="secondary">
                    chiudi
                </Button>
            </Modal.Footer>

        </Modal>
    )
}
export default AllComments