import { AccordionItem, Col, Container, Row } from "react-bootstrap"
import fantasy from "../../costants/books/fantasy.json"
import BookCard from "./BookCard/BookCard"


const AllTheBooks = () => {
    return (
        <Container>
            <Row className="gy-4 d-flex gx">
            {fantasy.map((book) => (
                    <BookCard
                        title={book.title}
                        price={book.price}
                        category={book.category}
                        img={book.img}
                    />
                ))}
            </Row>
        </Container>
    )
}

export default AllTheBooks