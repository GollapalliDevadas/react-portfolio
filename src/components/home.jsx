import './home.css';

export function Home()
{
    return(
        <div className="intro1">
            <div className='intro'>
              <p>
                Hi!<br/>
                I am Devadas<br/><span className=' mt-5'>
                    <marquee className="mt-2" behavior="alternative" direction="down" scrollamount='4'>Web Developer</marquee>
                </span>
                <button className='btn btn-warning'>
                  <a href="/assets/G.devadas.pdf" download='G.devadas.pdf' style={{textDecoration:'none'}}>                  Download Resume
                  </a>
                  </button>
              </p>
               
            </div>
            
        </div>
    )
}