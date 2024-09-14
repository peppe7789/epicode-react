import { navData } from "../../../costants/navdata";



const NavbarLinks = () => {

    return (
        <ul className="d-flex gap-4 justify-content-center style-link list-unstyled p-3 bg-danger">
            {navData.map(data => (
                <li>
                    <a className="text-decoration-none text-white" href={data.href}>
                        {data.text}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default NavbarLinks
