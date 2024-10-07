import { Container, Row } from "react-bootstrap"
import BookCard from "./BookCard/BookCard"
import { useContext } from "react"
import { AllTheBooksContext } from "../../contexts/AllTheBooksContext"


const AllTheBooks = () => {

    const {books} = useContext(AllTheBooksContext)
    return (
        <Container>
            
            <Row className="gy-4 d-flex gx">
                {books &&
                    books.slice(0,20).map((book, idx) => (
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