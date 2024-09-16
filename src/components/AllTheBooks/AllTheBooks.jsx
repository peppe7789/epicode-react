import { AccordionItem, Col, Container, Row } from "react-bootstrap"
import fantasy from "../../costants/books/fantasy.json"
import BookCard from "./BookCard/BookCard"
import SingleBook from "./SingleBook/SingleBook"


const AllTheBooks = () => {
    return (
        <Container>
            <Row className="gy-4 d-flex gx">
            {fantasy.map((book) => (
                    <SingleBook
                        title={book.title}
                        img={book.img}
                    />
                ))}
            </Row>
        </Container>
    )
}

export default AllTheBooks