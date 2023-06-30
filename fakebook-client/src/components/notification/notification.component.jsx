export default function Notification() {
	return (
		<div className='profileContainers  absolute w-96  top-0  right-0 notificationAbs z-30 shadow-xl text-black flex flex-col p-4 '>
			<div className='text-xl font-bold flex justify-between'>
				Notifications
				<div className='greyButtonWithHover p-1 rounded-full'>
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
			<div className='flex items-center gap-2'>
				<div className='rounded-full p-2 px-3 greyOnHover'>
					All
				</div>
				<div className='rounded-full p-2 px-3 greyOnHover'>
					Unread
				</div>
			</div>
			<div className='flex justify-between'>
				<div className='text-lg font-bold'>Earlier</div>
				<div className='text-base font-normal text-blue-600  greyOnHover  rounded-md p-1 pr-5 pl-5 '>
					See all
				</div>
			</div>
		</div>
	);
}
