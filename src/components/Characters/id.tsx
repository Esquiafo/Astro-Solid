export default function Characters({ values }: any) {
  return (
    <div class="bg-white shadow-md rounded-md overflow-hidden">
      
      <img class="w-24 h-24 object-cover rounded-t-md" src={values.image} alt={values.name} />

      <div class="p-4">
        <h1 class="text-lg font-semibold mb-2">{values.name}</h1>
        <p class="text-gray-700 mb-2">Status: {values.status}</p>
        <p class="text-gray-700 mb-2">Species: {values.species}</p>
        {values.type == '' ? (
          <p class="text-gray-700 mb-2">Type: N/A</p>
        ) : (
          <p class="text-gray-700 mb-2">Type: {values.type}</p>
        )}
        <p class="text-gray-700 mb-2">Gender: {values.gender}</p>
      </div>
    </div>
  );
}