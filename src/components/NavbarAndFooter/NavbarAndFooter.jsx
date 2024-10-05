import React, { Children } from "react";
import MyNav from "../MyNav/MyNav";
import MyFooter from "../MyFooter/MyFooter";




const NavbarAndFooter = ({children}) => {
    return (

        <>
            <MyNav />
            {children}
            <MyFooter />
        </>
    )
}

export default NavbarAndFooter