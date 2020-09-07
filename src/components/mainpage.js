import React from 'react';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";

function Mainpage(){

    const percentage = 66;
    return(
        <div className="mainSection">
            <div className="opacity p-3 pt-5">
                <div className="mx-3 d-flex justify-content-between">
                    <h5 className="">Site of the Day August 24, 2020</h5>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                    </svg>
                </div>
            </div>
                <div className="mt-5 pt-5">
                    <h1>Ali Ali</h1>
                    <h6>BY <a href="#" className="p_link">EXPO APE</a> FROM NETHERLANDS WITH 7.73</h6>
                    <div className="d-flex m-auto w-25">                    
                        <div className="progress_bar m-2">
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />
                            <p className="p_bar">DESIGN</p>
                        </div>
                        <div className="progress_bar m-2">
                            <CircularProgressbar value={50} text={`${50}%`} />
                            <p className="p_bar">USABILITY</p>
                        </div>
                        <div className="progress_bar m-2">
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />
                            <p className="p_bar">CREATIVITY</p>
                        </div>
                        <div className="progress_bar m-2">
                            <CircularProgressbar value={30} text={`${30}%`} />
                            <p className="p_bar">CONTENT</p>
                        </div>
                        <div className="progress_bar m-2">
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />
                            <p className="p_bar">MOBILE</p>
                        </div>
                    </div>
                </div>
                        
        </div>
    )
}
export default Mainpage