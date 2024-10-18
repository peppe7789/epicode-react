import { createContext, useState, useEffect, useContext } from "react";




export const CommentAreaContext = createContext()

export const CommenAreaContextProvider = ({ children, asin }) => {

    const [formState, setFormState] = useState([

    ])
    const [comments, setComments] = useState([])
    const [isCommentError, setIsCommentError] = useState("")
    const [isCommentLoading, setIsCommentLoading] = useState(false)
    const [render, setRender] = useState(false)
    const [isEditButton, setIsEditButton] = useState(false)


    const toggleRender = () => setRender(!render)

    const onChangeEdit = (value) => {
        setIsEditButton(value)
    }




    return (

        <CommentAreaContext.Provider
            value={{ formState, setFormState, comments, setComments, isCommentError, setIsCommentError, isCommentLoading, setIsCommentLoading, render, setRender, toggleRender, isEditButton, setIsEditButton,onChangeEdit }}
        >
            {children}
        </CommentAreaContext.Provider>
    )
}