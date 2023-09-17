import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { getApi, getUserCookire } from '../Api/BaseMethod';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cards from '../Comp/Cards';

const Task = () => {
    const navig = useNavigate()
    // Here its by ussing Middle ware like E-commers App
    // const abc = ()=>{
    //     const tokenFromCookie = Cookies.get('tokens');
    //     console.log("tokenFromCookie : ", tokenFromCookie)
    //     axios.get("http://localhost:5000/api/auth/protected",{
    //         headers:{
    //             Authorization:`Berar ${Cookies.get('tokens')}`
    //         },
    //     })  
    //     .then( (suc) =>{
    //         //here we can work for admin
    //         console.log(suc.data.message)
    //         if(suc.data.message !== "UnValid User"){
    //             navig("/dashboard/task")
    //         }else{
    //             navig("/")

    //         }
    //     })
    //     .catch( (err) =>{
    //         console.log(err)
    //     })
        
    // }
    // useEffect( () =>{
    //     abc()
    // },[])
    // deleteCookie('yourCookieName');
    
    let data = [
        {
            para:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio tempore ratione excepturi culpa nulla odit quisquam sapiente saepe officia? Natus molestiae temporibus officia ipsa vero ad autem dolor sequi nostrum.",
            img:""
        },
        {
            para:" excepturi culpa nulla odit quisquam sapiente saepe officia? Natus molestiae temporibus officia ipsa vero .",
            img:""
        },
        {
            para:" consectetur adipisicing elit. Odio tempore ratione excepturi culpa nulla odit quisquam sapiente saepe officia? Natus molestiae temporibus officia ipsa vero ad autem dolor sequi nostrum.",
            img:""
        },
        {
            para:" Odio tempore ratione excepturi culpa nulla odit quisquam sapiente saepe officia? Natus molestiae temporibus officia ipsa vero ad autem dolor sequi .",
            img:""
        }
    ]
    //Case 1 
    // let [open,setOpen]  = useState(false)
    // const [openItemIndex, setOpenItemIndex] = useState(null);

    // const setData =(e) =>{
    //     console.log(e)
    //     if (openItemIndex === e) {
    //         // Close the clicked item if it's already open
    //         setOpenItemIndex(null);
    //         setOpen(false)
    //       } else {
    //         // Otherwise, open the clicked item
    //         setOpenItemIndex(e);
    //         setOpen(true)
    //       }
    //     setOpen(true)
    // }
    
    const [openItems, setOpenItems] = useState(new Array(data.length).fill(false));

        const setData = (e) =>{
            let updateOne  = [...openItems]
            console.log(updateOne)
            updateOne[e] = !updateOne[e];
            setOpenItems(updateOne)
        }

    // Case 2
    return (
        <div>
            {/* Case 1 */}
            {/* {data.map( (x,i) =>{
                return(
                    <Cards item={x} index={i} openItemIndex={openItemIndex} open={open ? open : false } setData={setData}/>
                )
            })} */}

                    {/* Case 2*/}
            {/* {data.map( (x,i) =>{
                return(
                    <Cards item={x} index={i} openItemIndex={openItems}  setData={setData}/>
                )
            })} */}
        </div>
    )
}

export default Task
