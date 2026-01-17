import { Link, useLocation } from "react-router-dom"

export default function Header(){
    const location = useLocation();
    
    return(
        <>
            <div className="topbar">
                <Link to="/best-pc-games">
                    <img src={"image.jpeg"} height={"60px"} />
                </Link>
            </div>

            <div className="navbar">
                <Link 
                    to="/best-pc-games/Free" 
                    className={location.pathname === "/best-pc-games/Free" ? "active" : ""}
                >
                    Free
                </Link>
                <Link 
                    to="/best-pc-games/Singleplayer" 
                    className={location.pathname === "/best-pc-games/Singleplayer" ? "active" : ""}
                >
                    Singleplayer
                </Link>
                <Link 
                    to="/best-pc-games/Multiplayer" 
                    className={location.pathname === "/best-pc-games/Multiplayer" ? "active" : ""}
                >
                    Multiplayer
                </Link>
                <Link 
                    to="/best-pc-games/Racing" 
                    className={location.pathname === "/best-pc-games/Racing" ? "active" : ""}
                >
                    Racing
                </Link>
                <Link 
                    to="/best-pc-games/Sale" 
                    className={location.pathname === "/best-pc-games/Sale" ? "active" : ""}
                >
                    Sale
                </Link>
            </div>
        </>
    )
}