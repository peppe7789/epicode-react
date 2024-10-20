import { createContext, useEffect, useState } from "react";


export const AllTheBooksContext = createContext()

export const AllTheBooksContextProvider = ({ children }) => {

    // Stati iniziali 
    const [books, setBooks] = useState()
    // stato fisso per avere disponibili tutti i libri
    // const [allBooks] = useState()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(12)
console.log(page);

    const getBooks = async () => {
        
        try {
            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/books?page=${page}&pageSize=${pageSize}`)
            const result = await response.json()
            setBooks(result)
            
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getBooks()
    }, [page, pageSize])
    


    return (
        <AllTheBooksContext.Provider
        value={{books,setBooks,page,setPage,pageSize,setPageSize}}
        >
            {children}
        </AllTheBooksContext.Provider>
    )
}