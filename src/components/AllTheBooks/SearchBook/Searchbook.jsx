import { useContext, useEffect, useState } from "react";
import { Col, Row, Form } from "react-bootstrap"
import { AllTheBooksContext } from "../../../contexts/AllTheBooksContext";



const SearchBook = () => {

    const { books, setBooks } = useContext(AllTheBooksContext)
    console.log(books);

    const [inputValue, setInputValue] = useState("")
    console.log(inputValue);

    // hendler
    // funzione per catturare il valore dell'input
    const onChangeSearchInput = (e) => {
        setInputValue(e.target.value)
    }


    const getSearchBook = async () => {
        try {
            if (inputValue === "") {
                setBooks(books)
            }

            const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/books/bytitle/${inputValue}`)
            
            const result = await response.json()
            console.log(result);
            setBooks(result)
        } catch (error) {
            console.error(error.message)
        }
    }




    return (
       
            <>
                <Form.Control
                    type="text"
                    placeholder="Cerca libro"
                    onChange={onChangeSearchInput}
                />
                <button
                    className="btn btn-primary"
                    onClick={getSearchBook}
                >
                    Cerca
                </button>
            </>
       
    )
}

export default SearchBook