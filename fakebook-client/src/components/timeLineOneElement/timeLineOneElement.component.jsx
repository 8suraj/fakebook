/* eslint-disable react/prop-types */
export default function TimeLineOneElement({
	image,
	title,
}) {
	return (
		<div className='flex items-center text-md text-black	font-medium	p-2 greyOnHover1  hover:rounded-md'>
			<div className='rounded-full  mr-2  '>
				<img
					src={image}
					alt=''
					className=' border rounded-full w-10 h-10 object-cover '
				/>
			</div>
			{title}
		</div>
	);
}
