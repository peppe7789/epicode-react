import { createContext, useState, useEffect, useContext } from "react";




export const CommentAreaContext = createContext()

export const CommenAreaContextProvider = ({ children, asin }) => {

    const [formState, setFormState] = useState([
        {rate: "",
        author: "",
        comment: "",
        id: asin,
        }
    ])
    const [comments, setComments] = useState([])
    const [isCommentError, setIsCommentError] = useState("")
    const [isCommentLoading, setIsCommentLoading] = useState(false)
    const [render, setRender] = useState(false)

    const toggleRender = () => setRender(!render)






    return (

        <CommentAreaContext.Provider
            value={{ formState, setFormState, comments, setComments, isCommentError, setIsCommentError, isCommentLoading, setIsCommentLoading, render, setRender, toggleRender }}
        >
            {children}
        </CommentAreaContext.Provider>
    )
}