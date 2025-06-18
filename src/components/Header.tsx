import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'

import '../index.css'
function Header() {
    return (
        <div>
            <header className="flex justify-between items-center px-1  ">
                <div className="flex justify-center items-center border-2 p-2 rounded-full bg-white">
                    <Link to={'/'}>
                        <img
                            className="w-15 h-12 cursor-pointer"
                            src={logo}
                            alt="logo"
                        />
                    </Link>
                </div>

                <nav className="sticky top-0 flex justify-center items-center p-5 border-2 rounded-full bg-white ml-60 ">
                    <ul className="flex justify-between gap-7">
                        <li>Movies</li>
                        <li>TvShows</li>
                        <li>Animes</li>
                        <li>Assistent</li>
                    </ul>
                </nav>
                <div className="flex justify-center items-center gap-2">
                    <label
                        className="rounded-full border-2 p-4 w-80 flex justify-between bg-white"
                        htmlFor="search"
                    >
                        <input
                            id="search"
                            className="w-60"
                            type="text"
                            placeholder="Search"
                        />
                        <button>
                            <SearchIcon />
                        </button>
                    </label>
                </div>
            </header>

        </div>
    )
}

export default Header
