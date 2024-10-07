import { useContext, useEffect } from "react"
import CommentArea from "../CommentArea/CommentArea";
import { Col, ListGroup, Alert } from "react-bootstrap"
import { v4 as uuidv4 } from 'uuid';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { CommentAreaContext } from "../../contexts/CommenrtAreaContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { APIKEY } from "../../costants/APIKEY";


const CommentsBookDetails = ({asin}) => {
    console.log(asin);
    const ENDEPOITGETCOMMENT = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`

    console.log(ENDEPOITGETCOMMENT);
    const { isCommentLoading, isCommentError,comments,setIsCommentLoading, setComments, setIsCommentError  } = useContext(CommentAreaContext)
    const { isDarkMode } = useContext(ThemeContext)
   

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
    console.log(getComment);

    useEffect(() => {
        getComment()
    }, [])

    
    return (
        <Col
            sm
            md={4}
            className="m-3"
        >
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
                comments.map(comment => (
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
                                        onClick={() => putComment(comment._id)}
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
            <CommentArea asin={asin} />

            {comments.length <= 0 && (
                <ListGroup.Item
                className={`${isDarkMode ? 'text-white' 
                : 'text-black' } mt-2`}
                >
                    Non ci sono commenti per questo libro
                </ListGroup.Item>
            )}
        </Col>
    )
}

export default CommentsBookDetails