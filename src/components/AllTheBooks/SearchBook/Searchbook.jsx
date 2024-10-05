import { useContext, useState } from "react";
import { Col, Row, Form } from "react-bootstrap"
import { AllTheBooksContext } from "../../../contexts/AllTheBooksContext";



const SearchBook = () => {

   const {books, setBooks, allBooks} = useContext(AllTheBooksContext)
    // stati
    
    const [inputValue, setInputValue] = useState("")
    

    // hendler
    // funzione per catturare il valore dell'input
    const onChangeSearchInput = (e) => {
        setInputValue(e.target.value)
    }


    // funzione per filtrare i valori
    const filtredBooks = () => {
        if (inputValue === "") {
            setBooks(allBooks)
        } else {
            const filtered = books.filter(book => {
                return book.title.toLowerCase().includes(inputValue.toLowerCase())
            })
            setBooks(filtered)
        }
    }



    return (
        // <Row className="py-4">
        <Col
            sm
            md={3}
            className="d-flex align-items-center gap-2">
                <Form.Control
                    type="text"
                    placeholder="Cerca libro"
                    onChange={onChangeSearchInput}
                />
                <button
                    className="btn btn-primary"
                    onClick={filtredBooks}

                >
                    Cerca
                </button>
            </Col>
        // </Row>
    )
}

export default SearchBook