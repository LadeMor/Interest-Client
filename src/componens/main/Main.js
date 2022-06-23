import React, {useState} from "react";

import "./Main.css";

import filter from "../../icons/filter.svg";
import sort from "../../icons/sort.svg";

function Main(){


    return(
        <div>
            <div className="content-block">
                <div className="content-block-tools">
                    <ul>
                        <li>
                            <img src={filter}/>
                        </li>
                        <li>
                            <img src={sort}/>
                        </li>
                    </ul>
                </div>
                <div className="content-block-posts">

                </div>
            </div>
        </div>
    );
}

export default Main;