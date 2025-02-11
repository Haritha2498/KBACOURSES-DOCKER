import React,{useEffect} from 'react'
import Editcourse from '../components/Editcourse'
import { useLoaderData, useNavigate ,useParams} from 'react-router-dom';
import { useState } from "react"
import { Coursesloader } from './Learnmore';


const Editcoursepage = () => {
  
  const [course,setCourse]=useState([])

  const {id}=useParams();


  useEffect(()=>{
    const fetchCourses=async ()=>
    {
      try{
        const res=await fetch(`/api/courses/${id}`);
        const data=await res.json()
        console.log(data,"hjkl")
        setCourse(data);
      }
      catch(error){
        console.log("error",error)
      }
      
    }
    fetchCourses();


},[])
console.log(course,"from edit page ")




    const [title,setTitle]=useState('');
    const [courseId,setCourseId]=useState('');
    const [type,setType]=useState('');
    const [description,setDescription]=useState('');
    const [price,setPrice]=useState('');
  
    const navigate=useNavigate();
  
    const submitForm=(e)=>{
      e.preventDefault();
      const updatedCourse={
        title,              //shorthand of title=title,
        
        type,
        description,
        price
      }
      const res=updateCourseSubmit(updatedCourse);
      navigate(`/learnmore/${id}`)
      // console.log("text",res);
  
    }
  
    
  
    const updateCourseSubmit= async(updatedCourse)=>{
        const res=await fetch(`/api/courses/${id}`,{
                        method:'PUT',
                        headers:{
                          'Content-Type':'application/json',
                        },
                        body:JSON.stringify(updatedCourse)
    })
    console.log("msg",res);
      return res;
    }
  
    return (
      <>
      {/* <Addform /> */}
      <section className="bg-white mb-20">
      <div className="container m-auto max-w-2xl py-2">
        <div className="bg-purple-100 px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-purple-800 text-center font-semibold mb-6">
              Add Course
            </h2>
  
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Course Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder={course.title}
                required
  
  
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                
  
  
              />
            </div>
  
            {/* <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Course Id
              </label>
              <input
                type="text"
                id="courseId"
                name="courseId"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. 1"
                required
  
  
                value={courseId}
                onChange={(e)=>setCourseId(e.target.value)}
                
  
  
                
              />
            </div> */}
  
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Course Type
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                placeholder={course.type}
  
  
                value={type}
                onChange={(e)=>setType(e.target.value)}
                
  
  
              
              >
                <option value="Self-Paced">Self-Paced</option>
                <option value="Instructor-Led">Instructor-Led</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
  
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder={course.description}
  
  
  
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                
  
  
              
              ></textarea>
            </div>
  
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Price
              </label>
              <select
                id="price"
                name="price"
                className="border rounded w-full py-2 px-3"
                required
  
  
  
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                
  
  
  
                
              >
                <option value="Rs.5000">Rs.5000</option>
                <option value="Rs.3500">Rs.3500</option>
                <option value="Rs.15000">Rs.15000</option>
              </select>
            </div>
  
            <div>
              <button
                className="bg-purple-500 hover:bg-purple-600 my-10  text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
      </>
    )
    
  
}

export default Editcoursepage