import profileCover from '../../../assets/image/profileCover.jpg';
import profilePhoto from '../../../assets/image/profilePhoto.jpg';

export default function ProfileHeader() {
	return (
		<div className='container bg-white drop-shadow '>
			<div className='container mx-auto w-9/12  h-[97vh] flex flex-col justify-between py-1'>
				<div className='h-4/6 w-full border rounded-bl-xl	rounded-br-xl	'>
					<img
						src={profileCover}
						alt=''
						className='h-full w-full object-cover border rounded-bl-xl	rounded-br-xl	'
					/>
				</div>
				<div className='flex flex-col  items-center '>
					<div className='flex justify-between  w-11/12 '>
						<div className='flex items-center'>
							<div className='rounded-full w-40 border-4 border-white trans relative '>
								<img
									src={profilePhoto}
									alt=''
									className=' border rounded-full w-40 h-40 object-cover '
								/>
								<div className='border border-gray-200 rounded-full bg-gray-200 p-2  hover:bg-gray-300 absolute bottom-0 right-0'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='w-6 h-6 '>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z'
										/>
									</svg>
								</div>
							</div>
							<div className='trans1 p-2'>
								<div className='text-4xl font-bold'>
									Name
								</div>
								<div className='font-medium	text-gray-400	'>
									300 friends
								</div>
								<div>asdas</div>
							</div>
						</div>
						<div className='flex items-center gap-4	'>
							<div className='flex items-center  bg-blue-600 text-white p-1 hover:bg-blue-700 rounded-md  pr-4 pl-4 '>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M12 4.5v15m7.5-7.5h-15'
									/>
								</svg>
								Add to story
							</div>
							<div className='flex items-center  bg-gray-200 p-1 hover:bg-gray-300 rounded-md  pr-4 pl-4 '>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-5'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
									/>
								</svg>
								Edit Profile
							</div>
							<div className='flex items-center  bg-gray-200 p-2 hover:bg-gray-300 rounded-md  pr-4 pl-4 '>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-5'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M19.5 8.25l-7.5 7.5-7.5-7.5'
									/>
								</svg>
							</div>
						</div>
					</div>
					<div className='flex justify-between border-t border-gray-300 py-1 w-11/12'>
						<div className='flex justify-between w-4/6 '>
							<div className='flex items-center  hover:bg-gray-100  rounded-md pr-5 pl-5 '>
								Posts
							</div>
							<div className='flex items-center  hover:bg-gray-100  rounded-md pr-5 pl-5'>
								About
							</div>
							<div className='flex items-center  hover:bg-gray-100  rounded-md pr-5 pl-5'>
								Friends
							</div>
							<div className='flex items-center  hover:bg-gray-100  rounded-md pr-5 pl-5'>
								Photos
							</div>
							<div className='flex items-center  hover:bg-gray-100  rounded-md pr-5 pl-5'>
								Videos
							</div>
							<div className='flex items-center  hover:bg-gray-100  rounded-md pr-5 pl-5'>
								Check-ins
							</div>
							<div className='flex items-center  hover:bg-gray-100  rounded-md pr-5 pl-5'>
								More
							</div>
						</div>
						<div className='flex items-center border border-gray-200 rounded-lg bg-gray-200 p-2 hover:bg-gray-300'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
