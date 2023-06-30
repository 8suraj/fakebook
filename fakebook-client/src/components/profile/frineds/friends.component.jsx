import profileFriend from '../../../assets/image/profileFriend.jpg';
export default function Friends() {
	return (
		<div className=' profileContainers'>
			<div className='flex justify-between'>
				<div className='text-xl font-bold'>Photos</div>
				<div className='text-base font-normal text-blue-600  greyOnHover  rounded-md p-1 pr-5 pl-5 '>
					See All Photos
				</div>
			</div>
			<div className='grid grid-cols-3 gap-3	border-transparent rounded-lg overflow-hidden'>
				<div className='photoGrid rounded-lg overflow-hidden'>
					<img
						src={profileFriend}
						alt=''
						className='w-36 h-32 object-cover border-transparent rounded-lg'
					/>
					<div className='text-sm font-medium	'>Name</div>
					<div className='text-sm'>12 mutual Friends</div>
				</div>
				<div className='friendsImage border-transparent rounded-lg overflow-hidden'>
					<img
						src={profileFriend}
						alt=''
						className='w-36 h-32 object-cover border-transparent rounded-lg'
					/>
					<div className='text-sm font-medium	'>Name</div>
					<div className='text-sm'>12 mutual Friends</div>
				</div>
				<div className='photoGrid rounded-lg overflow-hidden'>
					<img
						src={profileFriend}
						alt=''
						className='w-36 h-32 object-cover border-transparent rounded-lg'
					/>
					<div className='text-sm font-medium	'>Name</div>
					<div className='text-sm'>12 mutual Friends</div>
				</div>
				<div className='photoGrid rounded-lg overflow-hidden'>
					<img
						src={profileFriend}
						alt=''
						className='w-36 h-32 object-cover border-transparent rounded-lg'
					/>
					<div className='text-sm font-medium	'>Name</div>
					<div className='text-sm'>12 mutual Friends</div>
				</div>
				<div className='photoGrid rounded-lg overflow-hidden'>
					<img
						src={profileFriend}
						alt=''
						className='w-36 h-32 object-cover border-transparent rounded-lg'
					/>
					<div className='text-sm font-medium	'>Name</div>
					<div className='text-sm'>12 mutual Friends</div>
				</div>
				<div className='photoGrid rounded-lg overflow-hidden'>
					<img
						src={profileFriend}
						alt=''
						className='w-36 h-32 object-cover border-transparent rounded-lg'
					/>
					<div className='text-sm font-medium	'>Name</div>
					<div className='text-sm'>12 mutual Friends</div>
				</div>
				<div className='photoGrid rounded-lg overflow-hidden'>
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
