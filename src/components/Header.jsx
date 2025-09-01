import { Link, useLocation } from "react-router-dom"

export default function Header(){
    const location = useLocation();
    
    return(
        <>
            <div className="topbar">
                <Link to="/">
                    <img src={"image.jpeg"} height={"60px"} />
                </Link>
            </div>

            <div className="navbar">
                <Link 
                    to="/Free" 
                    className={location.pathname === "/Free" ? "active" : ""}
                >
                    Free
                </Link>
                <Link 
                    to="/Singleplayer" 
                    className={location.pathname === "/Singleplayer" ? "active" : ""}
                >
                    Singleplayer
                </Link>
                <Link 
                    to="/Multiplayer" 
                    className={location.pathname === "/Multiplayer" ? "active" : ""}
                >
                    Multiplayer
                </Link>
                <Link 
                    to="/Racing" 
                    className={location.pathname === "/Racing" ? "active" : ""}
                >
                    Racing
                </Link>
            </div>
        </>
    )
}