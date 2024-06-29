import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export const HomeSearchBar = () => {
    return (
        <div className="flex items-center w-96 mx-auto mt-10">
            <input
                type="text"
                placeholder="Search..."
                className="flex-1 p-2 text-black border border-gray-300 rounded-l-md focus:outline-none h-10"
            />
            <div className="p-2 text-center bg-blue-500 text-white rounded-r-md w-10 h-10 flex items-center justify-center">
                <FontAwesomeIcon icon={faSearch} className="text-sm"/>
            </div>
        </div>
    );
}