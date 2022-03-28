import { useState } from "react"
import { Link } from "react-router-dom"
const NavMenu = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const onClick = () => {
        setOpenMenu(!openMenu)
    }
    return(
        <>
            <nav className="desktopNav">
                <div className="wrapper">
                    <Link className='homeButton' to="/">
                        <h1>Haikus Highway</h1>
                    </Link>
                    <ul>
                        <li className='haikuGenerator'>
                            <Link className='navButton' to="/haiku">Write A Haiku</Link>
                        </li>
                        <li>
                            <Link className='navButton' to="/savedHaikus">Saved Haikus</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav className="mobileNav">
                <div className="wrapper">
                    <Link className='homeButton' to="/">
                        <h1>Haikus Highway</h1>
                    </Link>
                    <button onClick={ onClick } aria-label="show or hide navigation menu" className="menuIcon">
                        <div className={`hamburgerMenuIcon ${ openMenu ? " open" : null }`}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                    <ul onClick={onClick} className={`mainMenu ${openMenu ? "open" : null}`}>
                        <li className='haikuGenerator'>
                            <Link onClick={ onClick } className='navLink' to="/haiku">Write A Haiku</Link>
                        </li>
                        <li>
                            <Link onClick={onClick} className='navLink' to="/savedHaikus">Saved Haikus</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavMenu