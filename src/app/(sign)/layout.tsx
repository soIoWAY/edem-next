import Footer from '@/components/main/Footer'
import Header from '@/components/main/Header'
import { ReactNode } from 'react'

interface IAuthLayout {
	children: ReactNode
}

export default function AuthLayout({ children }: IAuthLayout) {
	return (
		<div className=''>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
