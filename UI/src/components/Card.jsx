import { useState } from "react"
import { Link } from "react-router-dom";

const Card = ( {courseproperty} ) => {


  const [showdescription,setdescription]=useState(false)

  let description=courseproperty.description;
  if(!showdescription){
    description=description.substring(0,100);
  }

  const contentlenth=()=>
  {
    setdescription(!showdescription)
  }

  // the card function get 'each course object' from parent cards as a arg(courseproperty=eachcourse) ,then value is taken as object.key method -title is taken as eachcourse.title;
  return (
    <>
    <div className=' bg-purple-100  rounded-md shadow-2xl flex flex-col items-center justify-center mx-5 my-5 py-10'>
            <h2 className=' font-bold text-lg text-purple-900 '>{courseproperty.title}</h2>
            <img src="./src/assets/images/rp.png" alt="course thumbnail" className='w-80 h-40 ' />

            <p className='text-black group-hover:text-white my-2 mx-5'>{description} </p>
            <button className=" text-purple-500" onClick={contentlenth}> {showdescription?'..read less':'read more..'}  </button>
            <Link to={`/learnmore/${courseproperty.courseId}`} className="bg-purple-500 text-white px-4 py-2 rounded mx-auto hover:bg-purple-600 self-start mx-5">Learn More</Link>
        </div>
    </>
  )
}

export default Card