import {useState} from "react";
import NavBar from "./NavBar";
import WidgetCart from "./WidgetCart";

const NavAndWidget = () => {
    const [showWidgetCart, setShowWidgetCart] = useState(true);

    const openWidgetCart = () => {
        setShowWidgetCart(!showWidgetCart);
    }

    return (
        <>
            <NavBar action={openWidgetCart} />
            <WidgetCart show={showWidgetCart} />
        </>
    )
        
}

export default NavAndWidget;

