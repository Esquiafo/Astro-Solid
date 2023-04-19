import { createSignal, createEffect } from 'solid-js';


export default function Counter({values}:any) {
  const [count, setCount] = createSignal(0);

  createEffect(()=>{
    if(count()==5) alert(count()+'=5')
  })

  const increment = () => {
    setCount(count() + 1);
  };


  return (
    <div>
      <h1>Props from server through child: {values}</h1>
      <p>Count: {count()}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
