                                                     Astro Practice  


- # Hydration / Islands:
 - ## client:load:
      - #### This component's JS will begin importing when the page loads
 - ## client:visible
   - #### This component's JS will not be sent to the client until the user scrolls down and the component is visible on the page 
 - ## client:only="svelte"
   - #### This component's JS will not be sent to the client until the user scrolls down and the component is visible on the page 

- # Configuracion
   - ### tsconfig.json
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