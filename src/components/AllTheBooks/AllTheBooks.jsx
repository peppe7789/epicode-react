import { Container, Row, Col } from "react-bootstrap"
import BookCard from "./BookCard/BookCard"
import { useContext } from "react"
import { AllTheBooksContext } from "../../contexts/AllTheBooksContext"
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';


const AllTheBooks = () => {

    const { books, page, setPage, pageSize, setPageSize } = useContext(AllTheBooksContext)

    console.log(books);
    console.log(page);
    return (
        <Container>

            <Row className="gy-4 d-flex gx mb-3">
                {books &&
                    books.books.map((book, idx) => (
                        <BookCard
                            key={`book-${idx}`}
                            title={book.title}
                            price={book.price.$numberDecimal}
                            category={book.category}
                            img={book.img}
                            asin={book.asin}
                        />
                    ))}
            </Row>
            {books && (
                <Row>
                    <Col>
                        <ResponsivePagination
                            current={page}
                            total={books.totalPages}
                            onPageChange={setPage}

                        />
                    </Col>
                </Row>
            )}

        </Container>
    )
}

export default AllTheBooks