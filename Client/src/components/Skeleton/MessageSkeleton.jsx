const MessageSkeleton = () => {
	return (
		<>
			<div className='flex gap-2 items-end mb-4'>
				<div className='w-8 h-8 rounded-full bg-gray-200 animate-pulse flex-shrink-0'></div>
				<div className='flex flex-col gap-2'>
					<div className='h-3 w-20 bg-gray-200 rounded animate-pulse'></div>
					<div className='h-9 w-48 bg-gray-200 rounded-2xl animate-pulse'></div>
				</div>
			</div>
			<div className='flex gap-2 items-end justify-end mb-4'>
				<div className='flex flex-col gap-2 items-end'>
					<div className='h-3 w-16 bg-gray-200 rounded animate-pulse'></div>
					<div className='h-9 w-40 bg-blue-200 rounded-2xl animate-pulse'></div>
				</div>
				<div className='w-8 h-8 rounded-full bg-gray-200 animate-pulse flex-shrink-0'></div>
			</div>
		</>
	);
};
export default MessageSkeleton;