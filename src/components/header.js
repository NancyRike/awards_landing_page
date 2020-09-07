import React from 'react';

function Header (){
    return(
        <div className="container-fluid"> 
            <div className= "row mt-4 p-3 pre_nav">
                <div className="col">
                    <a href="" className='changeLanguage'>ENGLISH</a>
                </div>
                <div className="col">
                    <h6>the awards of design, creativity and innovation on the internet</h6>
                </div>
                <div className="col d-flex flex justify-content-end m-auto">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    <i class="fa fa-instagram" aria-hidden='true'></i>
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </div>
            </div>
            <nav className="container-fluid">
                <div className="row">
                    <div className="col d-flex m-auto">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-justify" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        <h6 className="flex-grow">MENU</h6>
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </div>
                    <div className="col">
                       <h3 className="m-auto text-center">awwwards.</h3>
                    </div>
                    <div className="col text-right">
                        <button className="btn btn-lg py-3 register_btn"> REGISTER/LOG IN</button>
                        <button className="btn btn-lg py-3 submit_btn">SUBMIT YOUR SITE!</button>
                    </div>
                </div> 
           </nav>
        </div>
    )
}
export default Header;