export default function BoolTableItem(props) {
  return (
    <tr className="divide-x divide-gray-200 border-x border-gray-200">
      <td className="sticky left-0 bg-gray-50 shadow-[5px_0px_10px_-3px_rgba(0,0,0,0.1)] md:bg-transparent md:shadow-none">
        <div className="flex items-center justify-between space-x-2 p-4">
          <p className="font-medium text-black">{props.name}</p>
        </div>
      </td>
      <td className="p-4">
        {!props.first?<p className="text-center text-gray-600">—</p>:
        <svg
          className="mx-auto h-6 w-6 text-black"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path d="M8 11.8571L10.5 14.3572L15.8572 9" stroke="white"></path>
        </svg>}
      </td>
      <td className="p-4">
        {!props.second?<p className="text-center text-gray-600">—</p>:
        <svg
          className="mx-auto h-6 w-6 text-blue-500"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path d="M8 11.8571L10.5 14.3572L15.8572 9" stroke="white"></path>
        </svg>}
      </td>
      <td className="p-4">
        {!props.third?<p className="text-center text-black">—</p>:
        <svg
          className="mx-auto h-6 w-6 text-sky-900"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path d="M8 11.8571L10.5 14.3572L15.8572 9" stroke="white"></path>
        </svg>}
      </td>
      <td className="p-4">
        {!props.fourth?<p className="text-center text-black">—</p>:
        <svg
          className="mx-auto h-6 w-6 text-violet-600"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          shape-rendering="geometricPrecision"
        >
          <path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            fill="currentColor"
          ></path>
          <path d="M8 11.8571L10.5 14.3572L15.8572 9" stroke="white"></path>
        </svg>}
      </td>
    </tr>
  );
}
