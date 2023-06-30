import profilePhoto from '../../assets/image/profilePhoto.jpg';
import { TimeLineOneElement } from '../../components';
const Elements = [
	{
		image: profilePhoto,
		title: 'Suraj Roy',
	},
	{
		image: profilePhoto,
		title: 'Suraj Roy',
	},
	{
		image: profilePhoto,
		title: 'Suraj Roy',
	},
	{
		image: profilePhoto,
		title: 'Suraj Roy',
	},
	{
		image: profilePhoto,
		title: 'Suraj Roy',
	},
	{
		image: profilePhoto,
		title: 'Suraj Roy',
	},
	{
		image: profilePhoto,
		title: 'Suraj Roy',
	},
	{
		image: profilePhoto,
		title: 'Suraj Roy',
	},
	{
		image: profilePhoto,
		title: 'Suraj Roy',
	},
	{
		image: profilePhoto,
		title: 'Suraj Roy',
	},
	{
		image: profilePhoto,
		title: 'Suraj Roy',
	},
	{
		image: profilePhoto,
		title: 'Suraj Roy',
	},
	{
		image: profilePhoto,
		title: 'Suraj Roy',
	},
];
export default function Timeline() {
	return (
		<div className='flex w-full '>
			<div className='w-3/12 flex flex-col  overflow-y-scroll h-[92vh]  scrollbar py-4 px-2'>
				<div className='py-2'>
					{Elements.map((item, index) => (
						<TimeLineOneElement
							key={index}
							image={item.image}
							title={item.title}
						/>
					))}
				</div>
				<div className='flex flex-col '>
					<div className='flex justify-between border-t border-gray-300'>
						<div className='text-lg font-bold text-gray-400'>
							Your Shortcuts
						</div>
						<div className='text-base font-normal text-blue-600  greyOnHover  rounded-md p-1 pr-5 pl-5 '>
							Edit
						</div>
					</div>
					<div>
						{Elements.slice(0, 2).map((item, index) => (
							<TimeLineOneElement
								key={index}
								image={item.image}
								title={item.title}
							/>
						))}
					</div>
				</div>
			</div>
			<div className='w-6/12 '>Two</div>
			<div className='w-3/12 flex flex-col  overflow-y-scroll h-[92vh]  scrollbar py-4 px-2'>
				<div className='flex justify-between items-center '>
					<div className='text-lg font-bold text-gray-500'>
						Your Pages and profiles
					</div>
					<div className='text-base font-normal  greyOnHover1  rounded-full p-2 '>
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
				<div className='flex flex-col justify-between  border-t border-b border-gray-300 py-3 '>
					<div className='text-lg font-bold text-gray-500'>
						Birthdays
					</div>

					{Elements.slice(0, 2).map((item, index) => (
						<TimeLineOneElement
							key={index}
							image={item.image}
							title={item.title}
						/>
					))}
				</div>
				<div className='flex flex-col justify-between  border-t border-b border-gray-300 py-3 '>
					<div className='flex justify-between items-center '>
						<div className='text-lg font-bold text-gray-500'>
							Contacts
						</div>
						<div className='text-base font-normal  greyOnHover1  rounded-full p-2 '>
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
					{Elements.slice(0, 2).map((item, index) => (
						<TimeLineOneElement
							key={index}
							image={item.image}
							title={item.title}
						/>
					))}
				</div>
				<div className='text-lg font-bold text-gray-500'>
					Group conversations
				</div>
				<div className='flex items-center text-md text-black	font-medium	p-2 greyOnHover1  hover:rounded-md'>
					<div className='rounded-full  p-2  greyButtonWithHover m-1 '>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6  '>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 4.5v15m7.5-7.5h-15'
							/>
						</svg>
					</div>
					Create New group
				</div>
			</div>
		</div>
	);
}
