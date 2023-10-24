import React, { useContext, useState } from 'react'
import './Description.css'
import { MyContext } from './Navigation';
import { useOutletContext } from 'react-router';
import Form from "./Form"


const Description = () => {



    const { formDetails, setDetails } = useOutletContext();



    const [formDesc, setFormDesc] = useState({
        desc: ""
    })


    const handleFormDetails = (e) => {
        const { name, value } = e.target;
        setDetails(prevDetails => {
            return {

                ...prevDetails,
                [name]: value,
            }
        })
    }

    const FormDesc = (e) => {
        const { name, value } = e.target;
        setFormDesc(prevDetails => {
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

    const handleFormDesc = (e) => {

        setFormDesc({
            title: e.target.value
        })

    }

    return (

        <div class="container">
            <div class="card">
                <div className="desc__title">
                    <input
                        type="text"
                        placeholder='untitled form'
                        onChange={handleFormDetails}
                        value={formDetails.title}
                        onBlur={handleFormTitle}
                        name='title'
                    /></div>
                <div className="desc__description">
                    <input
                        type="text"
                        placeholder='Add Description'
                        onChange={handleFormDesc}
                        Value={formDesc.desc}
                        onBlur={handleFormDesc} /></div>
            </div>
            <Form />
        </div>
    )
}

export default Description