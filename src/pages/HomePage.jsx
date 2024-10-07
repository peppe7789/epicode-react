import React, { useContext } from "react";
import Welcome from '../components/Welcome/Welcome';
import AllTheBooks from '../components/AllTheBooks/AllTheBooks';
import NavbarAndFooter from "../components/NavbarAndFooter/NavbarAndFooter";
import { ThemeContext } from "../contexts/ThemeContext";


const HomePage = () => {

    const{isDarkMode} = useContext(ThemeContext)

    return (
        <div
            className={`${isDarkMode ? 'bg-dark' : 'bg-light' }`}
        >
            <NavbarAndFooter>
                <Welcome />
                <AllTheBooks />
                
            </NavbarAndFooter>


        </div>
    )
}

export default HomePage

