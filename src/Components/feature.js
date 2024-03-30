export default function Feature(props){

    return (
        <li className="outlin flex space-x-4">
            <svg className={`h-5 w-5 flex-none ${props.popular?'text-blue-500':'text-black'}`} viewBox="0 0 24 24" fill="none" shape-rendering="geometricPrecision">
                <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="currentColor"></path>
                <path d="M8 11.8571L10.5 14.3572L15.8572 9" stroke="white"></path>
            </svg>
            <p className="text-gray-600 text-sm">
                {props.name}
            </p>
        </li>
    )
}