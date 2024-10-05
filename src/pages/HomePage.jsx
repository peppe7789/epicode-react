import React, { useContext } from "react";

import Welcome from '../components/Welcome/Welcome';
import AllTheBooks from '../components/AllTheBooks/AllTheBooks';

import SingleBook from '../components/AllTheBooks/SingleBook/SingleBook';
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
                <SingleBook />
            </NavbarAndFooter>


        </div>
    )
}

export default HomePage

