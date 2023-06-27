import profilePhoto1 from '../../../assets/image/profilePhoto1.jpg';
export default function PhotoContainer() {
	return (
		<div className=' border-transparent rounded-lg bg-white flex flex-col p-4 drop-shadow-md	my-4'>
			<div className='flex justify-between'>
				<div className='text-xl font-bold'>Photos</div>
				<div className='text-base font-normal text-blue-600  hover:bg-gray-100  rounded-md p-1 pr-5 pl-5 '>
					See All Photos
				</div>
			</div>
			<div className='grid grid-cols-3 gap-3	border-transparent rounded-lg overflow-hidden'>
				<div className='w-36 h-36'>
					<img
						src={profilePhoto1}
						alt=''
						className='w-36 h-36 object-cover'
					/>
				</div>
				<div className='w-36 h-36'>
					<img
						src={profilePhoto1}
						alt=''
						className='w-36 h-36 object-cover'
					/>
				</div>
				<div className='w-36 h-36'>
					<img
						src={profilePhoto1}
						alt=''
						className='w-36 h-36 object-cover'
					/>
				</div>
				<div className='w-36 h-36'>
					<img
						src={profilePhoto1}
						alt=''
						className='w-36 h-36 object-cover'
					/>
				</div>
				<div className='w-36 h-36'>
					<img
						src={profilePhoto1}
						alt=''
						className='w-36 h-36 object-cover'
					/>
				</div>
				<div className='w-36 h-36'>
					<img
						src={profilePhoto1}
						alt=''
						className='w-36 h-36 object-cover'
					/>
				</div>
				<div className='w-36 h-36'>
					<img
						src={profilePhoto1}
						alt=''
						className='w-36 h-36 object-cover'
					/>
				</div>
			</div>
		</div>
	);
}
