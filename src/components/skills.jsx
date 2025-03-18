
export function Skills()
{
    return(
        <div className="container-fluid" id="skills">
            <div className="skills pt-1 text-center bg-primary text-white">
                <h1 className=" text-bg-primary">Skills</h1>

            </div>
            <p className=" fw-bold  fs-3 fst-italic text-center text-secondary">Skills I exceptized to become a Web Developer</p>

            <div className="row">
                <div className="col-sm-6 text-primary fw-bold">
                     <p className="fw-bold fs-4 text-primary">HTML</p>
                    <div className="progress m-3">
                        <div className="progress-bar bg-success fw-bold" role="progressbar" aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' style={{width:'95%'}}>
                          95%
                        </div>
                    </div>
                   <p className="fw-bold fs-4 text-primary">CSS</p>
                   <div className="progress m-3">
                        <div className="progress-bar bg-success fw-bold" role="progressbar" aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' style={{width:'85%'}}>
                          85%
                        </div>
                    </div>
                    <p className="fw-bold fs-4 text-primary">Javascript</p>
                   <div className="progress m-3">
                        <div className="progress-bar bg-success fw-bold" role="progressbar" aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' style={{width:'90%'}}>
                          90%
                        </div>
                    </div>
                  
                    
            </div>
            <div className="col-sm-6 text-primary fw-bold">
                    <p className="fw-bold fs-4 text-primary">Bootstrap</p>
                   <div className="progress m-3">
                        <div className="progress-bar bg-success fw-bold" role="progressbar" aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' style={{width:'90%'}}>
                          90%
                        </div>
                    </div>
                    <p className="fw-bold fs-4 text-primary">ReactJS</p>
                   <div className="progress m-3">
                        <div className="progress-bar bg-success fw-bold" role="progressbar" aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' style={{width:'80%'}}>
                          80%
                        </div>
                    </div>
                    <p className="fw-bold fs-4 text-primary">Mui</p>
                   <div className="progress m-3">
                        <div className="progress-bar bg-success fw-bold" role="progressbar" aria-valuenow='70' aria-valuemin='0' aria-valuemax='100' style={{width:'70%'}}>
                          70%
                        </div>
                    </div>
                      </div>
                    

        </div>
        </div>
    )
}