import { createSignal, createEffect } from 'solid-js';
import CharactersID from '../Characters/id';
export default function Episode({ values }: any) {
  
  return (
<div  class="bg-gray-100 p-4">
  <h1 class="text-2xl font-bold">{values.id}</h1>
  <h1 class="text-xl font-semibold">{values.name}</h1>
  <h1 class="text-lg font-medium">{values.episode}</h1>
  <h1>Launch Date: {values.air_date}</h1>
</div>

  );
}