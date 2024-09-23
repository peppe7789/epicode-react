import { useState, useEffect } from "react"
import { APIKEY } from "../../costants/APIKEY"





const CommentArea = ({asin}) => {
    const ENDEPOITGETCOMMENT = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`
    const [comments, setComments] = useState([])
    console.log(comments);

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
    },[asin])

    return (
        <div>ciao commenta</div>
    )
}

export default CommentArea