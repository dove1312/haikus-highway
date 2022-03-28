import { Link } from "react-router-dom"
const NavMenu = () => {
    return(
        <nav>
            <div className="wrapper">
                <Link className='homeButton' to="/">
                    <h1>Haikus Highway</h1>
                </Link>
                <ul>
                    <li className='haikuGenerator'>
                        <Link className='navButton' to="/haiku">Write A Haiku</Link>
                    </li>
                    <li>
                        <Link className='navButton primary' to="/savedHaikus">Saved Haikus</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavMenu