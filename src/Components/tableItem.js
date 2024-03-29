export default function TableItem(props) {
  return (
    <tr class="divide-x divide-gray-200 border-x border-gray-200">
      <td class="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
        <div class="flex items-center justify-between space-x-2 p-4">
          <p class="font-medium text-black">{props.name}</p>
        </div>
      </td>
      <td class="p-4">
        <p class="text-center text-gray-600">{props.first}</p>
      </td>
      <td class="p-4">
        <p class="text-center text-gray-600">{props.second}</p>
      </td>{" "}
      <td class="p-4">
        <p class="text-center text-gray-600">{props.third}</p>
      </td>{" "}
      <td class="p-4">
        <p class="text-center text-gray-600">{props.fourth}</p>
      </td>
    </tr>
  );
}
