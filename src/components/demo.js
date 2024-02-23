import React,{useState} from 'react'

export const DemoForm = () => {
    const [formdetail,setFormDetail] = useState({
        userName:"",
        email : ""
    })
    console.log("formdetail",formdetail);
    const onHandleValue = (e) => setFormDetail({...formdetail,[e.target.name] : e.target.value});
    const onHandleSubmit = (e) => {
        e.preventDefault();
        console.log("user name",e.target.userName.value);
        console.log("email",e.target.email.value);
    } 

    return (
        <form onSubmit={onHandleSubmit} className='flex flex-col gap-2 w-[300px]'>
            <input className='px-4 py-2 border-2 text-black' placeholder='Enter the User name' name='userName' onChange={onHandleValue}></input>
            <input className='px-4 py-2 border-2 text-black' placeholder='Enter the Email' name="email" onChange={onHandleValue}></input>
            <input type="submit" className='rounded-md px-4 py-2 text-black bg-white'></input>
        </form>
    )
}
