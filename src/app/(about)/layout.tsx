import Footer from '@/components/main/Footer'
import Header from '@/components/main/Header'
import Logo from '@/components/main/Logo'
import Navbar from '@/components/main/Navbar'
import { ReactNode } from 'react'

interface IAboutLayout {
	children: ReactNode
}

export default function AboutLayout({ children }: IAboutLayout) {
	return (
		<div className=''>
			<Header />
			<div className='w-[90%] sm:w-[75%] m-auto'>
				<Logo />
				<Navbar />
			</div>
			<div className='w-[90%] sm:w-[75%] m-auto'>{children}</div>
			<Footer />
		</div>
	)
}
