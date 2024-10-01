import { createContext,useState } from "react";



export const CommentAreaContext = createContext()

export const CommenAreaContextProvider = ({ children }) => {

    const [formState, setFormState] = useState({})
    const [comments, setComments] = useState([])

    return (

        <CommentAreaContext.Provider
            value={{formState, setFormState,comments, setComments}}
        >
            {children}
        </CommentAreaContext.Provider>
    )
}