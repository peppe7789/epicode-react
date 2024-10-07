import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AllTheBooksContext } from "../contexts/AllTheBooksContext";
import NavbarAndFooter from "../components/NavbarAndFooter/NavbarAndFooter";
import { Container, Row, Col } from "react-bootstrap";
import SingleBook from "../components/AllTheBooks/SingleBook/SingleBook";
import CommentsBookDetails from "../components/CommentsBookDetails/CommentsBookDetails";
import { CommentAreaContext } from "../contexts/CommenrtAreaContext";
import { APIKEY } from "../costants/APIKEY";
import { ThemeContext } from "../contexts/ThemeContext";




const BookDetails = (asin) => {
    const ENDEPOITGETCOMMENT = `https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`

    const { isDarkMode } = useContext(ThemeContext)
    const { books } = useContext(AllTheBooksContext)
    
    const { bookId } = useParams()


    const selectedBook = books.find(book => book.asin === bookId)
    console.log(selectedBook);

    


    return (
        <div
            className={`${isDarkMode ? 'bg-dark' : 'bg-light'}`}
        >
            <NavbarAndFooter>
                <Container>
                    <Row>
                        <SingleBook
                            img={selectedBook.img}
                            title={selectedBook.title}
                            category={selectedBook.category}
                            price={selectedBook.price}

                        />
                        <CommentsBookDetails
                            asin={selectedBook.asin}
                        />

                    </Row>
                </Container>
            </NavbarAndFooter>
        </div>
    )
}

export default BookDetails