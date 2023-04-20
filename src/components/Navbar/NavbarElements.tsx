
import React, { useState, useEffect, useContext } from "react";


export default function BigNav() {

/*     const [dark, darkTheme] = useState('show');

    const [ light, lightTheme] = useState('hidden');
  
  function inverted() {
    theme === 'light' ? darkTheme('show') : darkTheme('hidden')
    theme === 'light' ? lightTheme('hidden') : lightTheme('show')
    
  } */
/*   useEffect(() => {
    inverted()
  }); */
  
    return(
     

      <nav class="bg-gray-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-center h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
            <a href="/">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded">
             Home
            </button>
            </a>
            <a href="/character">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded">
             Character
            </button>
            </a>
            <a href="/episode">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded">
            Episode
            </button>
            </a>
            </div>
              
         
          </div>
        </div>
      </div>
    </nav>

        
    )
}