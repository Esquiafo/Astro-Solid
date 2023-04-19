import { createSignal, createEffect } from 'solid-js';

export default function Counter({ values }: any) {
  const [count, setCount] = createSignal(0);

  createEffect(() => {
    if (count() === 5) alert(count() + '=5');
  });

  const increment = () => {
    setCount(count() + 1);
  };

  return (
    <div class="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 class="text-2xl font-bold mb-4">Props from server through child: {values}</h1>
      <p class="text-lg mb-4">Count: {count()}</p>
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={increment}
      >
        Increment
      </button>
    </div>
  );
}
