import Conversations from "./all-conversations";
import LogoutButton from "./Logout";
import SearchInput from "./searchinput";

const Sidebar = () => {
	return (
		<div className='border-r border-gray-200 flex flex-col bg-white w-80'>
			<SearchInput />
			<div className='h-px bg-gray-100 mx-4'></div>
			<Conversations />
			<LogoutButton />
		</div>
	);
};

export default Sidebar;