
import Card from "./Card"
import { useEffect, useState, } from "react";
// import courses from '../courses.json'
import {GridLoader} from 'react-spinners'




const Cards = ( {isHome=false}) => {     
 

  const [course,setCourse]=useState([]);     //to store course list
  const [loading,setloading]=useState(true);        //to handle loading delay

  //syntax of use effect=useEffect((arrowfunction)=>{function description},[])         []=dependency array

  useEffect(()=>{
      const fetchCourses=async ()=>
      {
        try{
          const res=await fetch('/api/courses');
          const data=await res.json()
          setCourse(data);
        }
        catch(error){
          console.log("error",error)
        }
        finally{
          setloading(false);
        }
      }
      fetchCourses();


  },[])

  console.log(course);
  const courseList = isHome ? course.slice(0,3) : course;

  return (
    <>
    {isHome ? <h1 className=' font-bold text-lg text-purple-900 text-center'>TOP COURSES</h1> : <h1 className=' font-bold text-lg text-purple-900 text-center'>BROWSE ALL COURSES</h1>}
    {loading?<h1><GridLoader /></h1>:
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>

   
   


{/* course array is iterated using map function , each course from the couse array is passed as a property arg to child card */}

    {courseList.map((eachcourse)=>(
      <Card key={eachcourse.id} courseproperty={eachcourse} />

    ))}
    

    </div>
}
    </>
  )
}

export default Cards