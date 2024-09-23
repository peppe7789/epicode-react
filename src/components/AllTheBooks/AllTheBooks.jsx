import { Container, Row } from "react-bootstrap"
import fantasy from "../../costants/books/fantasy.json"
import BookCard from "./BookCard/BookCard"
import { useState } from "react"
import SearchBook from "./SearchBook/Searchbook"


const AllTheBooks = () => {

    // Stati iniziali 

    const [books, setBooks] = useState(fantasy)
    // stato fisso per avere disponibili tutti i libri
    const [allBooks] = useState(fantasy)
   


  
    return (
        <Container>
            <SearchBook
                books={books}
                setBooks={setBooks}
                allBooks={allBooks}
            />
            <Row className="gy-4 d-flex gx">
                {books &&
                    books.map((book, idx) => (
                        <BookCard
                            key={`book-${idx}`}
                            title={book.title}
                            price={book.price}
                            category={book.category}
                            img={book.img}
                            asin={book.asin}
                        />
                    ))}
            </Row>
        </Container>
    )
}

export default AllTheBooks