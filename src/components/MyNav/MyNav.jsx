import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLinks from './NavbarLinks/NavbarLinks';
import SearchBook from '../AllTheBooks/SearchBook/Searchbook';
import NavLogo from './NavLogo/NavLogo';
import { Col, Row } from "react-bootstrap";




const MyNav = () => {




    return (
        <nav>
            <Row >
                <Col className=" p-3 d-flex justify-content-between align-items-center bg-danger mx-2 ">
                    <NavLogo />
                    <NavbarLinks />
                    <SearchBook />
                </Col>
            </Row>
        </nav>
    )
}
export default MyNav

