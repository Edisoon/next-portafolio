import Link from '../node_modules/next/link'
const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
            <Link href="/">
                <a className="navbar-brand fs-4 text-light">Portafolio</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item me-3">
                        <Link href="/blog">
                            <a className="nav-link fs-5 text-light">Blog</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/github">
                            <a className="nav-link fs-5 text-light">Github</a>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
)

export default Navbar;