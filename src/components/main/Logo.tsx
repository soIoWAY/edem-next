import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
	return (
		<div className='flex justify-center my-6'>
			<Link href='/'>
				<Image src='/logo.png' width={200} height={200} alt='logo' />
			</Link>
		</div>
	)
}

export default Logo
