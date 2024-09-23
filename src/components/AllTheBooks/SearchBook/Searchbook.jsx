import { useState } from "react";
import { Col, Row, Form } from "react-bootstrap"



const SearchBook = ({ books, setBooks, allBooks }) => {

    console.log(books);
    // stati
    const [inputValue, setInputValue] = useState("")


    // hendler
    // funzione per catturare il valore dell'input
    const onChangeSearchInput = (e) => {
        setInputValue(e.target.value)
    }
    console.log(inputValue);

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
        <Row className="py-4">
            <Col className="d-flex align-items-center gap-2">
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
        </Row>
    )
}

export default SearchBook