import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AllTheBooksContext } from "../contexts/AllTheBooksContext";
import NavbarAndFooter from "../components/NavbarAndFooter/NavbarAndFooter";




const BookDetails = () => {
    const { books } = useContext(AllTheBooksContext)
    
    const { bookId } = useParams()


    const selectedBook = books.find(book => book.asin === bookId)
    console.log(selectedBook);








    return (
        <NavbarAndFooter>
            <h1>{selectedBook.title}</h1>
            <img src={selectedBook.img} alt="" />
            <p>{selectedBook.category}</p>
            <p>{selectedBook.price}</p>
        </NavbarAndFooter>




    )
}

export default BookDetails