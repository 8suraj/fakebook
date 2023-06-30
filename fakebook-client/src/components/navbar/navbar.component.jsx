import { Outlet } from 'react-router';
import { NavLink, Link } from 'react-router-dom';
import Notification from '../notification/notification.component';
export default function Navbar() {
	return (
		<>
			<div className='flex justify-between z-10  bg-white p-2 text-white	sm md lg xl 2xl drop-shadow-2xl	sticky top-0 left-0 right-0 '>
				<Link className='flex justify-between justify-items-center items-center pl-1.5  w-1/6 '>
					<div className='flex items-center w-1/5	'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 stroke-gray-600'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
							/>
						</svg>
					</div>
					<div className='w-4/5'>
						<input
							type='text'
							placeholder='Search'
							className='w-11/12 bg-gray-200 border border-gray-200 rounded-full text-gray-800	p-2 pl-3 active:border-gray-200'
						/>
					</div>
				</Link>
				<div className='flex justify-evenly  w-3/6'>
					<NavLink
						to='timeline'
						path='relative'
						className={({ isActive }) =>
							isActive
								? 'flex items-center  pr-7 pl-7   border-b-4 border-blue-600'
								: 'flex items-center rounded-md pr-7 pl-7 greyOnHover'
						}>
						{({ isActive }) => (
							<div className='flex items-center '>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className={
										isActive
											? 'w-6 h-6   stroke-blue-600'
											: 'w-6 h-6 stroke-gray-600'
									}>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
									/>
								</svg>
							</div>
						)}
					</NavLink>
					<NavLink
						to='friends'
						path='relative'
						className={({ isActive }) =>
							isActive
								? 'flex items-center  pr-7 pl-7   border-b-4 border-blue-600'
								: 'flex items-center rounded-md pr-7 pl-7 greyOnHover'
						}>
						{({ isActive }) => (
							<div className='flex items-center '>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className={
										isActive
											? 'w-6 h-6   stroke-blue-600'
											: 'w-6 h-6 stroke-gray-600'
									}>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
									/>
								</svg>
							</div>
						)}
					</NavLink>
					<NavLink
						to='videos'
						path='relative'
						className={({ isActive }) =>
							isActive
								? 'flex items-center  pr-7 pl-7   border-b-4 border-blue-600'
								: 'flex items-center rounded-md pr-7 pl-7 greyOnHover'
						}>
						{({ isActive }) => (
							<div className='flex items-center '>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className={
										isActive
											? 'w-6 h-6   stroke-blue-600'
											: 'w-6 h-6 stroke-gray-600'
									}>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z'
									/>
								</svg>
							</div>
						)}
					</NavLink>
					<NavLink
						to='groups'
						path='relative'
						className={({ isActive }) =>
							isActive
								? 'flex items-center  pr-7 pl-7   border-b-4 border-blue-600'
								: 'flex items-center rounded-md pr-7 pl-7 greyOnHover'
						}>
						{({ isActive }) => (
							<div className='flex items-center '>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className={
										isActive
											? 'w-6 h-6   stroke-blue-600'
											: 'w-6 h-6 stroke-gray-600'
									}>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z'
									/>
								</svg>
							</div>
						)}
					</NavLink>
				</div>
				<div className='flex justify-evenly  pr-1.5 w-1/6 relative'>
					<div className='flex items-center rounded-full p-2 greyButtonWithHover'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 stroke-gray-600'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 4.5v15m7.5-7.5h-15'
							/>
						</svg>
					</div>
					<div className='flex items-center rounded-full p-2 greyButtonWithHover'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 stroke-gray-600'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z'
							/>
						</svg>
					</div>
					<div className='flex items-center rounded-full p-2 greyButtonWithHover '>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 stroke-gray-600'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
							/>
						</svg>
					</div>
					<div className='flex items-center rounded-full p-2 greyButtonWithHover'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 stroke-gray-600'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
							/>
						</svg>
					</div>
					{false && <Notification />}
				</div>
			</div>
			<Outlet />
		</>
	);
}
