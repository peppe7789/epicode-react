import { ListGroup, ListGroupItem, Modal } from "react-bootstrap"
import { useState, useEffect, useContext } from "react"
import { APIKEY } from "../../costants/APIKEY"
import CommentArea from "../CommentArea/commentArea"
import Button from 'react-bootstrap/Button';                                                                                                                                  
import { CommentAreaContext } from "../../contexts/CommenrtAreaContext";



const AllComments = ({ isCommentsVisible, setIsCommentVisible, asin }) => {
    
    
    const ENDEPOITGETCOMMENT = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`
    const ENDPOINTDELETEPUTCOMMENT = `https://striveschool-api.herokuapp.com/api/comments/`

    const {formState, setFormState,comments, setComments} = useContext(CommentAreaContext)
    

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

    const deleteComment = async (elementId) => {
        try {
            return await fetch(ENDPOINTDELETEPUTCOMMENT + elementId, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${APIKEY}`,
                    "Content-Type": "application/json",
                }
            })
        } catch (error) {
            
        }
    }

    const putComment = async (elementId) => {
        try {
            const response = await fetch(ENDPOINTDELETEPUTCOMMENT + elementId, {
                method: 'PUT',
                headers: {
                    "Authorization": `Bearer ${APIKEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(setComments)
            })
            const result = await response.json()
        } catch (error) {
            console.log(error);
        }
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
                            className="d-flex justify-content-between"
                        >
                            <div className="d-flex flex-column gap-1">
                                
                                <div>Autore:  {comment.author}</div>
                                <div>
                                    <div>Commento:  {comment.comment}</div>
                                    <div>Voto:  {comment.rate}</div>
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-2">
                                <button
                                    onClick={()=>putComment(comment._id)}
                                    className="btn btn-warning">
                                    Modifica
                                </button>
                                <button
                                    onClick={()=>deleteComment(comment._id)}
                                    className="btn btn-danger">
                                    Cancella
                                </button>
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