import profilePhoto1 from '../../../assets/image/profilePhoto1.jpg';
export default function PhotoContainer() {
	return (
		<div className=' profileContainers'>
			<div className='flex justify-between'>
				<div className='text-xl font-bold'>Photos</div>
				<div className='text-base font-normal text-blue-600  greyOnHover  rounded-md p-1 pr-5 pl-5 '>
					See All Photos
				</div>
			</div>
			<div className='grid grid-cols-3 rounded-lg  gap-3 overflow-hidden '>
				<div className='photoGrid '>
					<img
						src={profilePhoto1}
						alt=''
						className=' w-full hobject-cover'
					/>
				</div>
				<div className='photoGrid'>
					<img
						src={profilePhoto1}
						alt=''
						className='w-full object-cover'
					/>
				</div>
				<div className='photoGrid'>
					<img
						src={profilePhoto1}
						alt=''
						className='w-full object-cover'
					/>
				</div>
				<div className='photoGrid'>
					<img
						src={profilePhoto1}
						alt=''
						className='w-full object-cover '
					/>
				</div>
				<div className='photoGrid'>
					<img
						src={profilePhoto1}
						alt=''
						className='w-full object-cover'
					/>
				</div>
				<div className='photoGrid'>
					<img
						src={profilePhoto1}
						alt=''
						className='w-full object-cover'
					/>
				</div>
				<div className='photoGrid'>
					<img
						src={profilePhoto1}
						alt=''
						className='w-full object-cover'
					/>
				</div>
			</div>
		</div>
	);
}
