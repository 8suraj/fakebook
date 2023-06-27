import profileFriend from '../../../assets/image/profileFriend.jpg';
export default function Friends() {
	return (
		<div className=' border-transparent rounded-lg bg-white flex flex-col p-4 drop-shadow-md	my-4'>
			<div className='flex justify-between'>
				<div className='text-xl font-bold'>Photos</div>
				<div className='text-base font-normal text-blue-600  hover:bg-gray-100  rounded-md p-1 pr-5 pl-5 '>
					See All Photos
				</div>
			</div>
			<div className='grid grid-cols-3 gap-3	border-transparent rounded-lg overflow-hidden'>
				<div className='w-36 h-44 border-transparent rounded-lg overflow-hidden'>
					<img
						src={profileFriend}
						alt=''
						className='w-36 h-32 object-cover border-transparent rounded-lg'
					/>
					<div className='text-sm font-medium	'>Name</div>
					<div className='text-sm'>12 mutual Friends</div>
				</div>
				<div className='w-36 h-44 border-transparent rounded-lg overflow-hidden'>
					<img
						src={profileFriend}
						alt=''
						className='w-36 h-32 object-cover border-transparent rounded-lg'
					/>
					<div className='text-sm font-medium	'>Name</div>
					<div className='text-sm'>12 mutual Friends</div>
				</div>
				<div className='w-36 h-44 border-transparent rounded-lg overflow-hidden'>
					<img
						src={profileFriend}
						alt=''
						className='w-36 h-32 object-cover border-transparent rounded-lg'
					/>
					<div className='text-sm font-medium	'>Name</div>
					<div className='text-sm'>12 mutual Friends</div>
				</div>
				<div className='w-36 h-44 border-transparent rounded-lg overflow-hidden'>
					<img
						src={profileFriend}
						alt=''
						className='w-36 h-32 object-cover border-transparent rounded-lg'
					/>
					<div className='text-sm font-medium	'>Name</div>
					<div className='text-sm'>12 mutual Friends</div>
				</div>
				<div className='w-36 h-44 border-transparent rounded-lg overflow-hidden'>
					<img
						src={profileFriend}
						alt=''
						className='w-36 h-32 object-cover border-transparent rounded-lg'
					/>
					<div className='text-sm font-medium	'>Name</div>
					<div className='text-sm'>12 mutual Friends</div>
				</div>
				<div className='w-36 h-44 border-transparent rounded-lg overflow-hidden'>
					<img
						src={profileFriend}
						alt=''
						className='w-36 h-32 object-cover border-transparent rounded-lg'
					/>
					<div className='text-sm font-medium	'>Name</div>
					<div className='text-sm'>12 mutual Friends</div>
				</div>
				<div className='w-36 h-44 border-transparent rounded-lg overflow-hidden'>
					<img
						src={profileFriend}
						alt=''
						className='w-36 h-32 object-cover border-transparent rounded-lg'
					/>
					<div className='text-sm font-medium	'>Name</div>
					<div className='text-sm'>12 mutual Friends</div>
				</div>
			</div>
		</div>
	);
}
