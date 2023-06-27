import profilePhoto from '../../../assets/image/profilePhoto.jpg';
export default function CreatePost() {
	return (
		<div className=' border-transparent rounded-lg bg-white flex flex-col p-4 drop-shadow-md	my-4'>
			<div className='flex flex-row w-full  justify-center items-center my-4'>
				<div className='rounded-full w-1/12  '>
					<img
						src={profilePhoto}
						alt=''
						className=' border rounded-full w-12 h-12 object-cover '
					/>
				</div>
				<div className='w-11/12'>
					<input
						type='text'
						placeholder="What's on your mind? "
						className='w-11/12 h-12 bg-gray-200 border border-gray-200 rounded-full text-gray-800	p-2 pl-3 active:border-gray-200'
					/>
				</div>
			</div>
			<div className='flex justify-around  border-t border-gray-300 py-1 px-8'>
				<div className='flex items-center   hover:bg-gray-100 rounded-md p-2 pr-6 pl-6 '>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'>
						<path
							strokeLinecap='round'
							d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'
						/>
					</svg>
					Live Video
				</div>
				<div className='flex items-center   hover:bg-gray-100 rounded-md p-2 pr-6 pl-6 '>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'>
						<path
							strokeLinecap='round'
							d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'
						/>
					</svg>
					Photo/Video
				</div>
				<div className='flex items-center   hover:bg-gray-100 rounded-md p-2 pr-6 pl-6 '>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'>
						<path
							strokeLinecap='round'
							d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'
						/>
					</svg>
					Life Events
				</div>
			</div>
		</div>
	);
}
