


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./navbar.css";




export function Navbar()
{
    return(
        <div className="Section1">
            <nav className="navbar navbar-expand-lg navbar-dark bg-black ps-4 pe-4" id='navbar' style={{ backgroundColor:'red', width: "100%" }}>
                <div className="">
                <a className="navbar-brand text-light fw-bold"   href="#"><i className=" fs-2">Devadas</i>
                </a>
                </div>
                <button className="navbar-toggler bg-dark" type="button" data-bs-toggle='collapse' data-bs-target='#navbarNav'
                aria-controls="navbarNav" aria-expanded='false' aria-label="Toggle-navigation">
                    <span className=" navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-2 text-end">
                        <li className="nav-item"><a className='nav-link' href="#">Home</a></li>
                        <li className="nav-item"><a href="#about" className=" nav-link">About</a></li>
                        <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
                        <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contact Me</a></li>

                    </ul>

                </div>


            </nav>
        </div>
    )
}