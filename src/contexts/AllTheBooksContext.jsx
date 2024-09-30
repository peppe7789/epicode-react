import { createContext } from "react";
import { useState } from "react"
import fantasy from "../costants/books/fantasy.json"

export const AllTheBooksContext = createContext()

export const AllTheBooksContextProvider = ({ children }) => {

    // Stati iniziali 
    const [books, setBooks] = useState(fantasy)
    // stato fisso per avere disponibili tutti i libri
    const [allBooks] = useState(fantasy)


    return (
        <AllTheBooksContext.Provider
        value={{books,setBooks,allBooks}}
        >
            {children}
        </AllTheBooksContext.Provider>
    )
}