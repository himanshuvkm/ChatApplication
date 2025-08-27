import { Search } from 'lucide-react';
import useConverstation from '../../zustand/useconversation';
import { useState } from 'react';
import useGetConversations from '../../Hooks/useGetConversation';
import {toast} from 'react-hot-toast';

const SearchInput = () => {
	const [search,setSearch]=useState("");
	const { setSelectedConversation } = useConverstation();
	const {conversations} = useGetConversations();
	const handleSubmit = (e) => {
		e.preventDefault();
		const conversation = conversations.find((conv) =>
			conv.fullName.toLowerCase().includes(search.toLowerCase())
		);
		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		}
		else{
			toast.error("Conversation not found");
		}
	};
	return (
		<form onSubmit={handleSubmit} className='flex items-center gap-2'>
			<input type='text' placeholder='Search…' className='input input-bordered rounded-full'
			value={search}
			onChange={(e) => setSearch(e.target.value)} />
			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<Search />
			</button>
		</form>
	);
};
export default SearchInput;