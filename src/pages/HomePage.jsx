import React from "react";

import Welcome from '../components/Welcome/Welcome';
import AllTheBooks from '../components/AllTheBooks/AllTheBooks';

import SingleBook from '../components/AllTheBooks/SingleBook/SingleBook';
import NavbarAndFooter from "../components/NavbarAndFooter/NavbarAndFooter";


const HomePage = () => {
    return (
        <div>
            <NavbarAndFooter>
                <Welcome />
                <AllTheBooks />
                <SingleBook />
            </NavbarAndFooter>


        </div>
    )
}

export default HomePage

