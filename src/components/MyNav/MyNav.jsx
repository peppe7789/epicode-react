import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLinks from './NavbarLinks/NavbarLinks';
import SearchBook from '../AllTheBooks/SearchBook/Searchbook';
import NavLogo from './NavLogo/NavLogo';
import { Col, Container, Row } from "react-bootstrap";
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { v4 as uuidv4 } from 'uuid';



const MyNav = () => {


    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext)



    return (
        <nav>
            <Container fluid>
                <Row >
                    <Col className={` p-3 d-flex justify-content-between align-items-centerr ${isDarkMode ? 'bg-dark' : 'bg-danger'}`} >
                        <div className='d-flex justify-content-center align-items-center gap-3'>
                            <NavLogo />
                            <NavbarLinks />
                        </div>
                        

                       
                        <div className='d-flex justify-content-center align-items-center gap-2'>
                            <SearchBook />
                            <button
                                onClick={toggleDarkMode}
                                className='btn btn-dark rounded-2'
                            >
                                DarkMode
                            </button>
                        </div>

                    </Col>
                </Row>
            </Container>
        </nav>
    )
}
export default MyNav

