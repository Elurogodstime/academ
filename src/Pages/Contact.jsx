import React from 'react'

export const Contact = () => {

    function submit(){
        alert("Message sent successfully!")
    }

  return (
    <>
    
    <div className='  p-90 max-sm:my-20  contact-main grid grid-cols-1 justify-center place-content-center '>
       
        <div className='back-blur6  max-sm:hidden'></div>
        <div className='back-blur7  max-sm:hidden'></div>
        <div className='back-blur6  max-sm:hidden'></div>
          <div className='back-blur111  max-sm:hidden'></div>

            <h1 id='contact' className='link flex place-content-center justify-center font-bold uppercase text-2xl max-sm:text-amber-800'>contact us</h1>
        <form action="submit" className='contact-main z- contact borders grid grid-cols-1   my-10 gap-10  border-1 border-blue-400 rounded-2xl p-10 h-100 text-amber-50'>
            <input type="text" name="" id="" placeholder='Enter Name' className='border   p-5 rounded-2xl' />
            <input type="email" name="" id="" placeholder='Enter Email' className='border  p-5 rounded-2xl ' />
            <textarea placeholder='How has this Academy helped you?...' name="" id="" className=' border input p-5 rounded-2xl '></textarea>
            <button className='bg-blue-400 rounded-2xl hover:bg-blue-300 hover:text-black text-blue-900 font' onClick={submit}>Submit</button>
        </form> 






        
        <div className='back-blur11   '></div>  <div className='back-blur14  '></div> <div className='back-blur15 '></div>

           <div className='back-blur12  '></div>
    </div>
    
    
    
    
    
    </>
  )
}
