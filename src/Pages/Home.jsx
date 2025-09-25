import React from 'react'

export const Home = () => {
    
    const Hero = [
        {   
            Para : "Become A Web Developer",
            button : "Start Now"
        }
    ]

  return (
    <>

    <div className='back-blur1 '></div>

    <div className='heros'>
        {Hero.map(Heros=>
            <p className='hero-subtitle font-medium text-2xl font-mono  text-center text-amber-200 ' key={Hero.Para}>{Heros.Para}</p>
        )}

         {Hero.map(Heros=>
            <p className='hero-title  text-8xl mx-10 font-bold text-center   ' key={Hero.Text}>Learn,Relearn,Build <br />  and Deploy with <span className='text-amber-300'>Technologies...</span> {Heros.Text}</p>
        )}

        {Hero.map(Heros=>
           
            <p className='Hero   font-light  text-center subtitle ' > Learn HTML AND CSS from scratch here, Simple lessons <br />projects, and resources to help you master web development. <br /> No prior experience needed — start coding today!</p>
        )}

        <div className='back-blur '></div>
        <div className='back-blur3 '></div>
        <div className='back-blur20 '></div>
        <div className='back-blur3 '></div>
         <div className='back-blur8 '></div>
          <div className='back-blur9 '></div>
          <div className='back-blur10 '></div>

<div className='flex text-center justify-center '>
        <button className='button text-center bg-black shadow-2xl hover:text-amber-300  border p-3 my-10 rounded-2xl px-10'>Get Started Now</button>
    </div>
    
    </div>

    

<div className="back-blur4"></div>
        <div className="back-blur2"></div>
        





    
    
    </>
  )
}
