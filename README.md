<div align="center">
  <h1>
   :pencil: Strapi + GraphQL :pencil:
  </h1>

</div>

# Install command

        strapi new FOLDERNAME --quickstart 
        cd FOLDERNAME
        yarn strapi install graphql
        yarn strapi develop 

# Populate Data
   - ## Menu | Content-type Builder |
        - ### => Create New Collection Type <=

       ![Screenshot from 2023-04-23 21-49-55](https://user-images.githubusercontent.com/57331052/233876813-91e162cf-98c5-44c9-821c-16b14c4efe0d.png)

   - ### Create 3 values to this Collection

        - #### Text => Name
        - #### Rich Data => Description
        - #### Number => Price

             ![Screenshot from 2023-04-23 21-50-56](https://user-images.githubusercontent.com/57331052/233876990-70904a93-877c-4800-b5c0-d2be290253ae.png)


   - ## Menu | Content Manager  |
        - ### => Create new entry <= fill, save and publish values.

   ![Screenshot from 2023-04-23 21-53-51](https://user-images.githubusercontent.com/57331052/233877432-bc0018da-2b2a-4b8a-979e-291b89de2f68.png)

   - ## Menu | Settings |
        - ### => Create new API TOKEN <= 
![Screenshot from 2023-04-23 22-01-53](https://user-images.githubusercontent.com/57331052/233878413-a6bf6cc0-b5d9-4210-9cc4-7349c800282b.png)

                 DONT FORGET TO ADD THE TOKEN INTO .ENV AS API_KEY = 'XXXXXXXXXXX'



<div align="center">

# :dart: Astro Self-Documentation :dart:

</div>

- # Hydration / Islands:
    - ## client:load
        - #### This value indicates that the content should be loaded and hydrated immediately when the page is loaded.
    - ## client:visible
        - #### This value indicates that the content should be loaded and hydrated only when it becomes visible on the screen (i.e. when the user scrolls to that part of the page).
    - ## client:only="svelte"
        - #### This value indicates that the content inside the tag should only be rendered and hydrated on the client-side, and should not be included in the server-side rendered HTML.
        
- # Dynamic routes:
    - ## getStaticPaths()
        - #### Returns an array of objects with a params property. Each of these objects will generate a corresponding route.
                export async function getStaticPaths() {
                const response = await fetch(URL);
                const data = await response.json();
                const paths = data.map((props: any) => ({ params: { id: props.id.toString() } }));
                return [...paths,{ params: { path: undefined } }];
                };
         
- # API Reference:
    - ## Astro.glob()
        - #### only takes one parameter: a relative URL glob of which local files you’d like to import. It’s asynchronous, and returns an array of the exports from matching files.        
                "const posts = await Astro.glob('../pages/post/*.md');"
    - ## Astro.props()
        - #### Es un objeto que contiene cualquier valor que haya sido pasado como atributo de componente     
                "const { id } = Astro.props;"
    - ## Astro.params()
        - #### Es un objeto que contiene los valores de segmentos de ruta dinámica que coincidan con esta petición.     
                "const { id } = Astro.params;"
  
- # Configuration
    - ### tsconfig.json:
    #### For TypeScript, set your tsconfig.json to handle Solid's JSX:
    
            "compilerOptions": {
            "jsx": "preserve",
            "jsxImportSource": "solid-js",
            }  

    - ### astro.config.mjs:
    #### To add a framework in this case Solid.js and add into integration:
 
            solid from '@astrojs/solid-js';
            export default defineConfig({
    	    integrations: [solid()],
            });

- # Environment:
    - ### .env:      
        - #### To store stored environment variables: 
                API_KEY="XXXXXXXXXXXXXXX"

        - #### To use stored environment variables: 
                const keyAPI = import.meta.env.API_KEY

