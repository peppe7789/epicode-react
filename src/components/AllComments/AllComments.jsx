import { Alert, ListGroup, Modal } from "react-bootstrap"
import {useContext,useEffect} from "react"
import CommentArea from "../CommentArea/CommentArea";
import Button from 'react-bootstrap/Button';
import { CommentAreaContext } from "../../contexts/CommenrtAreaContext";
import { v4 as uuidv4 } from 'uuid';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { APIKEY } from "../../costants/APIKEY";



const AllComments = ({ isCommentsVisible, setIsCommentVisible, asin }) => {
    
   
    const ENDEPOITGETCOMMENT = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`

    
    const ENDPOINTDELETEPUTCOMMENT = `https://striveschool-api.herokuapp.com/api/comments/`

    const { comments, setComments,isCommentError, setIsCommentError,isCommentLoading, setIsCommentLoading,render,setRender, toggleRender, setFormState,formState} = useContext(CommentAreaContext)
    
    console.log(formState);
        

    const getComment = async () => {
        setIsCommentLoading(true)
        try {
            const response = await fetch(ENDEPOITGETCOMMENT, {
                headers: {
                    "Authorization": `Bearer ${APIKEY}`,
                    "Content-Type": "application/json",
                }
            })
            const data = await response.json()
            setComments(data)
            setIsCommentLoading(false)
        } catch (error) {
            setIsCommentError(error.message)
            console.log(error);
        }
        finally {
            
            setIsCommentLoading(false)
        }
    }

    

    const deleteComment = async (elementId) => {
        setIsCommentLoading(true)
        try {
            return await fetch(ENDPOINTDELETEPUTCOMMENT + elementId, {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${APIKEY}`,
                    "Content-Type": "application/json",
                }
            })
            setIsCommentLoading(false)
        } catch (error) {
            setIsCommentError(error.message)
        }
        finally {
            setIsCommentLoading(false)
            toggleRender()
        }
    }

   

    const putComment = async (elementId) => {
        
        setIsCommentLoading(true)
        try {
            const response = await fetch(ENDPOINTDELETEPUTCOMMENT + elementId, {
                method: 'PUT',
                headers: {
                    "Authorization": `Bearer ${APIKEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formState)
            })
            const result = await response.json()
            setFormState(result)
            setIsCommentLoading(false)
        } catch (error) {
            setIsCommentError(error.message)
        }
        finally {
            setIsCommentLoading(false)
        }
    }
   

    
    useEffect(() => {
        getComment()
    }, [asin,render])

    const closeModal = () => {
        setIsCommentVisible(false)
    }

   
    const handleEditButton = (comment) => {
        setFormState({
            rate: comment.rate,
            author: comment.author,
            comment: comment.comment,
        
            id: comment._id,
    })
}
   
console.log(handleEditButton);






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
                {isCommentLoading && !isCommentError &&
                    (
                        <LoadingSpinner
                        />
                    )}
                {!isCommentLoading && isCommentError &&
                    (
                        <Alert variant="danger">
                            Oops, non sono riuscito a caricare i commenti...
                        </Alert>
                    )}
                {!isCommentLoading && !isCommentError &&
                    comments.map((comment) => (
                        <ListGroup
                            variant="flush"
                            
                        >
                            <ListGroup.Item
                                key={uuidv4()}
                                
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
                                        onClick={()=> handleEditButton(comment)}
                                        className="btn btn-warning">
                                        Modifica
                                    </button>
                                    <button
                                        onClick={() => deleteComment(comment._id)}
                                        className="btn btn-danger">
                                        Cancella
                                    </button>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    ))}
                <CommentArea
                    asin={asin}
                    
                />

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