import React from 'react'
import About from "../assets/about.png"

export const AboutUs = () => {

  const contact = [
    {
      link: "https://web.whatsapp.com/send?phone=2349067045731"


    }
  ]

  return (
    <>
    
    <div className='About borders rounded-2xl m-10 p-10 border-1 border-blue-400 grid grid-cols-1 justify-center place-content-center'>
        <div>
            <h1 id='About' className='link uppercase'>MY Name Is <span className='font-bold'>ELURO GODSTIME</span></h1>
            <p id='About' className='italic '>CEO KAIROTIC NETWORK</p>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis iure pariatur
                 velit, deserunt atque eum repudiandae doloremque voluptate consectetur totam quod 
                 architecto nesciunt, accusantium molestiae, voluptatum assumenda libero maiores
                  blanditiis? Quia eos culpa porro corporis iusto! Accusamus magni, error deserunt 
                  dicta, reprehenderit nihil dolore magnam hic deleniti omnis non quas aliquid temporibus
                   mollitia ratione, laboriosam placeat. Labore earum molestiae neque quasi impedit a 
                   maiores fugit quam amet accusantium ab repudiandae perspiciatis assumenda, recusandae
                    similique, exercitationem, error iste aspernatur debitis repellat quod fuga alia
                    s minus? Dignissimos nisi, nemo aliquam fugit provident consequatur modi culpa? 
                    Fugit perspiciatis, tempore consectetur voluptatem cum autem, quod vitae provident
                     iste, aperiam ut labore aliquam ea quo culpa esse voluptates reiciendis aspernatur
                      placeat. Quisquam distinctio deserunt dignissimos quas eveniet nisi accusamus 
                      inventore ullam dolores, illum eaque voluptas, ad rerum quos provident voluptatibus
                       itaque eum vero similique repellendus sequi doloremque exercitationem facere.
                        Sed labore expedita sunt at corrupti dolorum ad tempore ipsa quam maxime, 
                        corporis aut aspernatur earum omnis, deserunt quasi quaerat, fuga ducimus 
                        excepturi! Eius eligendi illum harum maxime accusamus, ad unde perferendis
                         qui eum esse ducimus excepturi quibusdam explicabo porro nihil mollitia 
                         quaerat nostrum sapiente a minima consectetur! Qui aspernatur voluptatem
                         in ab unde, iusto consequuntur facere, neque expedita deleniti ea officia,
                          voluptas dolore libero totam tenetur ratione laborum molestias odit minima possimus. Sequi nihil quaerat 
                voluptatum fuga, tenetur nam at, nostrum vitae minus perferendis magnam.</p>
        </div>

        <div>
            <div>
              <img src={About} alt="" 
            className='w-50 border-2 -rotate-4 rounded-4xl my-5'
            />
            </div>

             <div>

            
            {contact.map((cont)=>
            <a href={cont.link} target='_blank'>
              <button className='bg-amber-00 m-2 border  rounded-2xl sm:w-45 lg:w-30 my-5 max-sm:active hover:bg-blue-400 max-sm:hover:hover:bg-blue-400 max-sm:hover:hover:text-black hover:text-black max-sm:hover:hover:font-bold hover:font-bold'>Contact Me</button>
            </a>
            )}
         
        </div>
        </div>

       
    </div>
    
    
    
    
    
    
    
    
    </>
  )
}
