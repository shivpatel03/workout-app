import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
    return (
        <nav>
            <a className="h1 nav-header px-4 py-4" href="/">Workout-App</a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item float-right">
                        <a className="nav-link display-1" href="/">Home</a>
                    </li>
                    <li className="nav-item float-right">
                        <a className="nav-link display-1" href="/api/workout">View All Workouts</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar