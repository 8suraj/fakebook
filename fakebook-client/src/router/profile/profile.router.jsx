import {
	CreatePost,
	Friends,
	Intro,
	ProfileContainer,
	ProfileHeader,
	SinglePicturePost,
} from '../../components';

export default function Profile() {
	return (
		<>
			<ProfileHeader />
			<div className='container mx-auto w-9/12'>
				<div className='flex  justify-center w-full gap-4'>
					<div className='w-4/12'>
						<Intro />
						<ProfileContainer />
						<Friends />
					</div>
					<div className='w-7/12'>
						<CreatePost />
						<SinglePicturePost />
					</div>
				</div>
			</div>
		</>
	);
}
