

import ReactLogo from '../assets/gollapalli devadas photo.png'
import './about.css';

export function About()
{
   return(
    <div className="container-fluid body-details">

    <div className="row about" id="about">
        <h3 className='text-center text-bg-primary'>About</h3>
        <div className="col-sm-6">
            <div className="profile p-4 text-center" id='p1'>
                <img src={ReactLogo} className="myprof" alt="" />
            </div>
        </div>
        <div className="col-sm-6  about-details gap-4 p-4">
            <h3 className="bg-warning p-2">About Me ?</h3>
            <h5 className="bg-primary-subtle p-2">
                Journey</h5>
            <p>
                I’m <span className="fw-bold">Devadas</span>, a passionate <span className="fw-medium"> Frontend
                    Developer </span> with a strong interest in technology and innovation. I specialize in crafting
                intuitive, user-friendly interfaces that are not only visually appealing but also optimized for
                performance and responsiveness. With hands-on experience in HTML, CSS, JavaScript, React.js,Tailwind
                CSS and Bootstrap, I enjoy building seamless digital experiences that enhance user engagement.
                Additionally, and. My focus lies in problem-solving, exploring emerging
                technologies, and continuously improving user experiences. I’m always eager to work on innovative
                projects, contribute my technical expertise, and collaborate with like-minded professionals to
                create impactful solutions. Let’s connect and build something amazing!


            </p>
    
        </div>
    </div>
    </div>

   )
}