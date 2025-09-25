import React from 'react'
import logo from "../assets/logo.png"

export const Footer = () => {
const NavFooter = [
    {
        Home:"Home",
        Lesson:"Lesson",
        Projetc:"Projects",
        Resource:"Resources",
        About:"About ",
        Contact:"Contact Us",
    },


]

  return (
    <>
     <div className=' p-10 m-10 borders  justify-between flex-wrap '>
        
    <div className='flex footer-text flex-wrap '>
        <div>
            <img  src={logo} alt="" className='w-90 flex justify-end ' />
            <p className='image-footer hidden max-sm:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
                 aspernatur suscipit voluptatem? Distinctio voluptatem cum vel repellendus, 
                corrupti odio velit vero enim a atque libero. Repre uscipit voluptatem? Distinctio voluptatem cum vel repellendus, 
                corrupti odio velit vero enim a atque libero. Reprhenderit sapiente amet quae.</p>
        
        </div>

        <div className='flex max-sm:grid max-sm:grid-cols-1 footer max-sm:my-3'>
            {NavFooter.map(NavFoot=>
                <ul className=' gap-10 max-sm:gap-5 max-sm:block'>
                    <li>{NavFoot.Home}</li>
                    <li>{NavFoot.Lesson}</li>
                    <li>{NavFoot.Projetc}</li>
                    <li>{NavFoot.Resource}</li>
                    <li>{NavFoot.About}</li>
                    <li>{NavFoot.Contact}</li>
                    <hr className='hidden max-sm:w-10  max-sm:h-0.2 max-sm:bg-amber-300 '/>
                </ul>
            )}
        </div>
        <div className='flex max-sm:grid max-sm:grid-cols-1 footer max-sm:my-3'>
            {NavFooter.map(NavFoot=>
                <ul className=' gap-10 max-sm:gap-5 max-sm:block '>
                    <li>{NavFoot.Home}</li>
                    <li>{NavFoot.Lesson}</li>
                    <li>{NavFoot.Projetc}</li>
                    <li>{NavFoot.Resource}</li>
                    <li>{NavFoot.About}</li>
                    <li>{NavFoot.Contact}</li>
                     <hr className='hidden max-sm:w-10  max-sm:h-0.2 max-sm:bg-amber-300 '/>

                </ul>
            )}
        </div>

         <div className='flex max-sm:grid max-sm:grid-cols-1 footer max-sm:my-3'>
            {NavFooter.map(NavFoot=>
                <ul className=' gap-10 max-sm:gap-5 max-sm:block'>
                    <li>{NavFoot.Home}</li>
                    <li>{NavFoot.Lesson}</li>
                    <li>{NavFoot.Projetc}</li>
                    <li>{NavFoot.Resource}</li>
                    <li>{NavFoot.About}</li>
                    <li>{NavFoot.Contact}</li>
                    <hr className='hidden max-sm:w-10  max-sm:h-0.2 max-sm:bg-amber-300 '/>
                </ul>
            )}
        </div>

         <div className='flex max-sm:grid max-sm:grid-cols-1 footer max-sm:my-3'>
            {NavFooter.map(NavFoot=>
                <ul className=' gap-10 max-sm:gap-5 max-sm:block'>
                    <li>{NavFoot.Home}</li>
                    <li>{NavFoot.Lesson}</li>
                    <li>{NavFoot.Projetc}</li>
                    <li>{NavFoot.Resource}</li>
                    <li>{NavFoot.About}</li>
                    <li>{NavFoot.Contact}</li>
                    <hr className='hidden max-sm:w-10  max-sm:h-0.2 max-sm:bg-amber-300 '/>
                </ul>
            )}
        </div>

        {/* <div className='flex max-sm:grid max-sm:grid-cols-1 footer'>
            {NavFooter.map(NavFoot=>
                <ul className='gap-10 max-sm:gap-5 max-sm:block'>
                    <li>{NavFoot.Home}</li>
                    <li>{NavFoot.Lesson}</li>
                    <li>{NavFoot.Projetc}</li>
                    <li>{NavFoot.Resource}</li>
                    <li>{NavFoot.About}</li>
                    <li>{NavFoot.Contact}</li>
                </ul>
            )}
        </div> */}

    </div>


        <div className='flex justify-center text-cyan-700 hover:text-blue-300 space-x-2 '>
            <p>Designed By Kairotic-Network Academy &copy; 2025 -</p> <br />
            <p>Using React & Vite Stack</p>
        </div>
           

</div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}
