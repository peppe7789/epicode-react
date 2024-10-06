import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AllTheBooksContext } from "../contexts/AllTheBooksContext";
import NavbarAndFooter from "../components/NavbarAndFooter/NavbarAndFooter";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "../components/AllTheBooks/SingleBook/SingleBook";




const BookDetails = () => {
    const { books } = useContext(AllTheBooksContext)

    const { bookId } = useParams()


    const selectedBook = books.find(book => book.asin === bookId)
    console.log(selectedBook);








    return (
        <NavbarAndFooter>
            <Container>
                <Row>
                    <SingleBook
                        img={selectedBook.img}
                        title={selectedBook.title}
                        category={selectedBook.category}
                        price={selectedBook.price}
                    />
                    
                </Row>
            </Container>





        </NavbarAndFooter>




    )
}

export default BookDetails