import { Col, Row } from "react-bootstrap";
import { navData } from "../../../costants/navdata";
import SearchBook from "../../AllTheBooks/SearchBook/Searchbook";



const NavbarLinks = () => {

    return (
        <Row className="bg-danger p-3 d-flex justify-content-centern align-items-center ">
            <Col>
                <ul className="d-flex gap-4 align-items-center style-link list-unstyled m-0 ">
                    {navData.map(data => (
                        <li>
                            <a className="text-decoration-none text-white" href={data.href}>
                                {data.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </Col>
            <SearchBook />
        </Row>

    )
}

export default NavbarLinks
