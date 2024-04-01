import ScrollButton from '@/components/main/ScrollButton'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Edem flowers Lviv',
	description:
		'Квітковий магазин у Львові з широким вибором квітів та букетів. Доставка по Львову та області. Замовляйте квіти онлайн!',
	icons: {
		icon: ['/favicon.ico?v=4'],
		apple: ['/apple-touch-icon.png?v=4'],
		shortcut: ['/apple-touch-icon.png'],
	},
	keywords:
		'квітковий магазин, квіти, букети, бокси, Львів, доствка, доставка квітів, тюльпани, троянди, сухоцвіти, кульки',
	authors: [{ name: 'Edem flowers Lviv', url: 'https://nextjs.org' }],
	robots: 'index, follow',
	openGraph: {
		title: 'Edem flowers Lviv',
		description:
			'Квітковий магазин у Львові з широким вибором квітів та букетів. Доставка по Львову та області. Замовляйте квіти онлайн!',
		type: 'website',
		locale: 'uk_UA',
	},
	metadataBase: new URL('http://localhost:3000'),
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className='text-white font-light md:font-thin'>
				<div className='m-auto'>{children}</div>
				<ScrollButton />
			</body>
		</html>
	)
}
