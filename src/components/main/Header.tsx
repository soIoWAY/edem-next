'use client'
import Link from 'next/link'
import { CgProfile } from 'react-icons/cg'
const Header = () => {
	return (
		<header className='py-2 text-sm border-b border-yellow-600' id='header'>
			<div className='header-inner w-[90%] sm:w-[75%] m-auto flex justify-between items-center'>
				<div>
					<span className='text-yellow-500 border-b-2 border-yellow-500'>
						+380689848064
					</span>
				</div>
				<div className='gap-10 hidden sm:flex'>
					<div>Пн-Нд з 9:00 до 20:00</div>
					<div>Відправка в робочий час</div>
				</div>
				<div className='text-2xl'>
					<Link href='/signin' className='flex justify-center'>
						<CgProfile />
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
