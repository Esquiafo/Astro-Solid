                                                     Astro Self-Documentation  


- # Hydration / Islands:
    - ## client:load
        - #### This value indicates that the content should be loaded and hydrated immediately when the page is loaded.
    - ## client:visible
        - #### This value indicates that the content should be loaded and hydrated only when it becomes visible on the screen (i.e. when the user scrolls to that part of the page).
    - ## client:only="svelte"
        - #### This value indicates that the content inside the tag should only be rendered and hydrated on the client-side, and should not be included in the server-side rendered HTML.
  
- # Configuracion
    - ### tsconfig.json:
    For TypeScript, set your tsconfig.json to handle Solid's JSX:
    
                "compilerOptions": {
                "jsx": "preserve",
                "jsxImportSource": "solid-js",
                  }  

    - ### astro.config.mjs:
    To add a framework in this case Solid.js and add into integration:
 
                solid from '@astrojs/solid-js';
                export default defineConfig({
    	        integrations: [solid()],
                });