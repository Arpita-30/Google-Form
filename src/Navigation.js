import React, { createContext, useContext } from 'react'
//import StorefrontIcon from '@mui/icons-material/Storefront';
import "./Navigation.css";

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FeedIcon from '@mui/icons-material/Feed';
import Face6Icon from '@mui/icons-material/Face6';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Outlet } from "react-router-dom";

export const MyContext = createContext();

const question={title: "",
                options:[{name: "option 1", value:false}, {name: "option 2", value:false}],
                isRequired : false,
                type: "checkbox"
                }

function Header() {


    const navigate = useNavigate()

    const [formDetails, setDetails] = useState({
        title: ""
    });
    const [form , setForm] = useState([
        question
        
    ]);
  


    const handleFormDetails = (e) => {
        const { name, value } = e.target;
        setDetails(prevDetails => {
            return {

                ...prevDetails,
                [name]: value,
            }
        })
    }

    const handleFormTitle = (e) => {

        setDetails({
            title: e.target.value
        })

    }
    const formSubmit=(e)=>{

        console.log(form);
    }
    return (
        <>

            <div className='App'>
                <div className="header">
                    <div className="header__logo">
                        <h2 className='.header__logoTitle'><FeedIcon /></h2>

                    </div>
                    <div className="header__search" >
                        <input className='input__header'
                            type="text" onChange={handleFormDetails}
                            name='title'
                            value={formDetails.title}
                            onBlur={handleFormTitle}
                            placeholder='untitiled form..' />
                    </div>
                    <div className="header__nav_2">
                        <div className="nav_item">
                            <div className="nav__itemLine1" onClick={() => { navigate("/login") }}>Responses</div>
                        </div>
                        <div className="nav_item">
                            <div className="nav__itemLine2" onClick={() => { navigate("/login") }}>Questions</div>
                        </div>
                        </div>

                    <div className="header__nav_1">
                    

                        <div className="nav__item">
                            <button type="submit" class="nav__button" onClick={formSubmit}>send</button>
                        </div>
                       
                        <div className="nav_item">
                            <div className="nav__itemLineOne" ><Face6Icon /></div>
                        </div>
                       

                    </div >
                </div >
                <Outlet context={{ formDetails, setDetails ,form , setForm}} />
            </div >

        </>
    )
}


export default Header;