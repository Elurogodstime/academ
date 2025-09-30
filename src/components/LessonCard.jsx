import React from 'react'

export const LessonCard = () => {

 
  const card = [
    {
      title:"HTML TUTORIAL",
      description:"Learn how to structure a webpage with headings, paragraphs, links, and more.",
      link : "https://www.youtube.com/@KairoticNetwork" 
    },

     {
      title:"CSS TUTORIAL",
      description:"Style your webpages with colors, layouts, and responsive designs that look great on any device.",
      link : "https://www.youtube.com/@KairoticNetwork" 
    },

     {
      title:"JAVASCRIPT TUTORIAL",
      description:"Bring your websites to life by learning how to add interactivity, logic, and dynamic features.",
      link : "https://www.youtube.com/@KairoticNetwork" 
    },

     {
      title:"REACT TUTORIAL",
      description:"Build modern, fast, and reusable user interfaces with one of the most popular JavaScript libraries.",
      link : "https://www.youtube.com/@KairoticNetwork" 
    },

     {
      title:"GRAPHIC DESIGN TUTORIAL",
      description:"Learn the basics of visual design, from colors and typography to creating stunning graphics.",
      link : "https://www.youtube.com/@KairoticNetwork" 
    },

     {
      title:"UI/UX TUTORIAL",
      description:"Discover how to design user-friendly, attractive interfaces that provide a great experience.",
      link : "https://www.youtube.com/@KairoticNetwork" 
    },

   
  ]

  return (
    <>
    <h1  className='link flex place-content-center justify-center font-bold uppercase text-2xl' id='lesson'>lessons</h1>
   <section className="lessonCard grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 gap-6">
     
     {card.map((lesson)=>(
      <div className='cards bg-black border-1 border-blue-400  p-6 text-center borders text-amber-50 rounded-2xl '>
        <h2 className='text-2xl text-amber-50 my-4'>{lesson.title}</h2>
        <p>{lesson.description}</p>

        <button className='bg-amber-00 m-2 border  rounded-2xl sm:w-35 lg:w-69 my-5 max-sm:active hover:bg-blue-400 max-sm:hover:hover:bg-blue-400 max-sm:hover:hover:text-black hover:text-black max-sm:hover:hover:font-bold hover:font-bold'>
          <a href={lesson.link} target='_blank'>Start Learning</a>
        </button>
      </div>
     ))}

    
    

   </section>
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
