import React, { useState } from 'react'
import './Form.css'
import { Input } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Alert from '@mui/material/Alert';
import Dropdown from "./Dropdown"
import { useNavigate } from 'react-router-dom';
import Select from "./Select"
import { useOutletContext } from 'react-router';

const question={title: "",
                options:[{name: "option 1", value:false}, {name: "option 2", value:false}],
                isRequired : false,
                type: "checkbox"
                }

const Form = (props) => {

    const { formDetails, setDetails , form , setForm  } = useOutletContext();

    

    const navigate = useNavigate()


    const [ques, setQues] = useState("");
    const [option, setOption] = useState([]);

    const [opTitle, setOpTitle] = useState("")

    
  
    

    const [req, setReq] = useState({});



    const handleQues = (e , i) => {
        const { name, value } = e.target;
        const temp = form.map((data, index) => {
            if (index !== i) return data;
            return {...data,title:value};
        })

        setForm([...temp]);
    }
      

    
    const handleOp = (e, formIndex , optionIndex ) => {
        const { name, value } = e.target;
        const temp = form.map((data, index) => {
            if (index !== formIndex) return data;
            return {...data,options:data.options.map((optionValue,i)=>{
                if(i!== optionIndex)
                return optionValue ;
                
                return {...optionValue,name:value}
            })};
        })
        setForm([...temp]);
    }

    const addOptionTitle = (e) => {
        setOpTitle(e.target.value)
    }
    const addOption = (i) => {
  
        
        let temp=form.map((data,index)=>{
            
            if(index!==i)
                return data;                          
            
            return {...data,options:[...data.options,{name:`option ${data.options.length+1}`  ,value:false}]}
             })

             setForm([...temp])
        }
        

    const addForm=()=>{
        const abc = [...form,question];
        console.log(abc);
        setForm(abc);
    }

    const handleDelete = (formIndex,optionIndex) => {
       
        let temp=form.map((data,index)=>{
            
            if(formIndex!==index)
                return data;                          
            
             return {...data, options:data.options.filter((op,i)=>{
                return i!==optionIndex ;
             })}
             })

             setForm([...temp])
    }
          

    const deleteForm=(i)=>{
        
     setForm(form.filter((item, index) => {
            return index !== i;
        }))
    }

    const handleRequired=(formIndex)=>{
   
    let temp=form.map((data,index)=>{
            
        if(formIndex!==index)
            return data;                          
        
         return {...data, isRequired : !data.isRequired }
         })

         setForm([...temp])       
              
    }
  
    
    const optionType =(val , formIndex)=>{
        //console.log(e);
        const temp = form.map((data, index) => {
            if (index !== formIndex) return data;
            return {...data,type:val 
              
            }
            
            })
        setForm([...temp]);
       console.log(...temp);
        
    }
    
    const handleSubmit=(data)=>{
        data.preventDefault();
        console.log(data);
        //setFormData(data.target.value);
        //console.log(FormData);
        //props.onClick(formData);
        
    }
    //console.log(formData);
    
    




    return (
        <div>
                     
            {
                form.map((data,index)=>{
                  
                    return(
                        <>
                         <div class="card">
                    <form>
                    
                    {<span className="ques_req" >{  data.isRequired ?   "*" : " " } </span> }
                    <div className="drop-down"><Select type={data.type} onSelect={(val)=>optionType(val,index)}/></div>
                
                        <input type="text"
                            className='form__ques'
                            placeholder='Question'
                            name='title'
                            onChange={(e)=>handleQues(e,index)}
                            // onBlur={(e)=>addQues(e,i)}
                            value={data.title}
                        />
                      
                  
                            {data.options.map((option, i) => {
                            
                                return (
                                    <div className='question'>
                                        <input type={data.type} value={option.value} className='form__option' />
                                        <input
                                            type="text"
                                            name='title'
                                            value={option.name}
                                            className='dynamic__input'
                                            onChange={(e) => handleOp(e, index,i)}
                                        //onChange={addOptionTitle}
    
                                        />
                                        <span className="delete"><CloseIcon onClick={() => handleDelete(index,i)} /></span>
                                    </div>
                                    
                                )
                            })
                            }
                           
                        
                        
                        
                  

               
                
                        <div className='question__add'>
                            <input type="checkbox" className='form__option' placeholder='add option' />
                            <input
                                type="text"
                                placeholder='Add option'
                                className='dynamic__input'
                                onClick={() => addOption(index)}
                            ></input>
                            <span className="delete"><CloseIcon /></span>
                        </div>
                        <div className="right__footer">
                          <div className="footer" >  <ContentCopyIcon onClick={()=>addForm()} />
                           </div>
                            <div className="footer"> <DeleteIcon onClick={()=>deleteForm(index)}/> </div>
                            <FormGroup>
                            <FormControlLabel required control={<Switch checked={data.isRequired} onChange={()=>handleRequired(index)}/>} label="Required" />
                            </FormGroup>
                           
                         </div>
                         
                         
                    </form>
                   
                
                </div>
                        </>
                    )
                    })
            }
        </div >
    )
        }

export default Form