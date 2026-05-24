import { useEffect, useState } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import axios from "axios"

function Home(){
    const [blogs,setBlogs] = useState([])    
    const fetchBlogs =async()=>{
     const response= await axios.get("https://mern-node-u9wv.onrender.com/blog")
     setBlogs(response.data.data)
    }

    useEffect(()=>{
        fetchBlogs()
    },[])

    console.log(blogs)

    return (
        <>
        <Navbar/><br/><br/><br/>

        <div className ="flex flex-wrap">
        {
            blogs.map(function(blog,index){
                return(
                     <Card key={index}blog ={blog}/>
                )
            })
        }
          
       
         </div>

        </>
    )
}

export default Home