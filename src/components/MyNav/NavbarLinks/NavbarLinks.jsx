
import { navData } from "../../../costants/navdata";
import { v4 as uuidv4 } from 'uuid';


const NavbarLinks = () => {

    return (
        
            
                <ul role="list" className="d-flex gap-4 align-items-center style-link list-unstyled m-0 d-none">
                    {navData.map((data) => (
                        <li
                        key={uuidv4()}
                        >
                            <a className="text-decoration-none text-white" href={data.href}>
                                
                                {data.text}
                            </a>
                        </li>
                    ))}
                </ul>
                
        

    )
}

export default NavbarLinks
