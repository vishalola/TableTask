export default function EnterpriseItem(props) {
  return(
    <div className="flex cursor-pointer items-center space-x-2 rounded-md border border-gray-100 p-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl">
    <svg
      className="h-6 w-6 flex-none text-violet-600"
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
    </svg>
    <p className="text-gray-600">{props.name}</p>
  </div>
  )
}
