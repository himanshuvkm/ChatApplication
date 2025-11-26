import { Search } from 'lucide-react';
import useConverstation from '../../zustand/useconversation';
import { useState } from 'react';
import useGetConversations from '../../Hooks/useGetConversation';
import {toast} from 'react-hot-toast';

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConverstation();
	const { conversations } = useGetConversations();
	
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search.trim()) return;
		
		const conversation = conversations.find((conv) =>
			conv.fullName.toLowerCase().includes(search.toLowerCase())
		);
		
		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else {
			toast.error("Conversation not found");
		}
	};

	return (
		<div className='px-4 pt-4 pb-3'>
			<div className='relative'>
				<input 
					type='text' 
					placeholder='Search conversations...' 
					className='w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							handleSubmit(e);
						}
					}}
				/>
				<button 
					type='button'
					onClick={handleSubmit}
					className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
				>
					<Search size={18} />
				</button>
			</div>
		</div>
	);
};
export default SearchInput;