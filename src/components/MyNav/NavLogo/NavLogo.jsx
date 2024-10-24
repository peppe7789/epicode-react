import { Link } from "react-router-dom"
import logo from "../../../assets/logo.webp"
import "../NavLogo/NavLogo.css"

const
    
    NavLogo = () => {
    return (
        <div className="sizeCustom">
            <Link to= '/home'>
               <img className=" h-100 rounded-5 " src={logo} alt="" role="img"/> 
            </Link>
            
        </div>
    )
}
export default NavLogo