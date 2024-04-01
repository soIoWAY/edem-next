import Footer from '@/components/main/Footer'
import Header from '@/components/main/Header'
import { ReactNode } from 'react'

interface IDashboardLayout {
	children: ReactNode
}
export default function DashboardLayout({ children }: IDashboardLayout) {
	return (
		<div>
			<Header />

			{children}
			<Footer />
		</div>
	)
}
