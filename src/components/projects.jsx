
import photo from '../assets/Screenshot 2025-03-15 123516.png';
import photo1 from '../assets/Screenshot 2025-03-15 193525.png';
import photo2 from '../assets/Screenshot 2025-03-15 200043.png';
import './project.css';

export function Project()
{
    return(
        <div className='container-fluid'>
            <div className=" projects text-center" id="projects">
                <h1 className=" text-bg-primary fw-bold fst-italic mb-3">Projects</h1>
                <ul className=" list-services list-unstyled d-flex flex-wrap justify-content-around">
                    <li className="item-project item">
                           <img src={photo} alt="" style={{borderRadius:'10px',width:"90%", height:'90%'}} />
                           <div className='web-dev mb-2'><a href="https://ecommerces-git-ph-ecom-devadas-projects.vercel.app/" className='btn btn-warning fw-bold ' target='_blank'>Multicart Ecommerce </a></div>
                    </li>
                    <li className="item-project item">
                           <img src={photo1} alt="" style={{borderRadius:'10px',width:"90%", height:'90%'}}  />
                           <div className='web-dev'><a href="https://ourweek-in-a-life-git-ph-week-devadas-projects.vercel.app/" className='btn btn-warning fw-bold ' target='_blank'>Our Life In a Week</a></div>
                    </li>
                    <li className="item-project item">
                           <img src={photo2} alt="" style={{borderRadius:'10px',width:"90%", height:'90%'}} />
                           <div className='web-dev'><a href="" className='btn btn-warning fw-bold' target='_blank'>React js Video Libary </a></div>
                    </li>
                   
                     

                </ul>

            </div>
            </div>

    )
}
