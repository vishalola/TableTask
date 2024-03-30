export default function TableItem(props) {
  return (
    <tr className="divide-x divide-gray-200 border-x border-gray-200">
      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
        <div className="flex items-center justify-between space-x-2 p-4">
          <p className="font-medium text-black">{props.name}</p>
        </div>
      </td>
      <td className="p-4">
        <p className="text-center text-gray-600">{props.first}</p>
      </td>
      <td className="p-4">
        <p className="text-center text-gray-600">{props.second}</p>
      </td>{" "}
      <td className="p-4">
        <p className="text-center text-gray-600">{props.third}</p>
      </td>{" "}
      <td className="p-4">
        <p className="text-center text-gray-600">{props.fourth}</p>
      </td>
    </tr>
  );
}
