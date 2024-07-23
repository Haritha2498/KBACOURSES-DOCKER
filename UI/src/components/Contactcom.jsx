import React from 'react'
import Contactdiv1 from './Contactdiv1'
import Contactdiv2 from './Contactdiv2'
import Contactdiv3 from './Contactdiv3'

const Contactcom = () => {
  return (
    <>
    <section class="bg-white my-1 py-10 ">
        <div class="container px-6 py-12 mx-auto">
            <div class="text-center">
                <p class="font-medium text-purple-400 ">Contact us</p>
    
                <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">Get in touch</h1>
    
                <p class="mt-3 text-gray-500 dark:text-gray-400">Our friendly team is always here to chat.</p>
            </div>
    
            <div class="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
                
                <Contactdiv1 />
                <Contactdiv2 />
    
                <Contactdiv3 />
            </div>
        </div>
    </section>
    </>
  )
}

export default Contactcom