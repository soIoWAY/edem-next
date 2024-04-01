import Link from 'next/link'
import { FaInstagram, FaTelegram } from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className='border-t border-yellow-600'>
			<div className='w-[75%] flex flex-col gap-4 items-center m-auto py-10'>
				<div className='icons text-yellow-500 flex text-4xl gap-5'>
					<Link
						href='https://www.instagram.com/edem_flowers_lviv/'
						target='_blank'
					>
						<span></span>
						<FaInstagram />
					</Link>
					<Link href='https://t.me/xzvetal' target='_blank'>
						<FaTelegram />
					</Link>
				</div>
				<div className='about-text flex flex-col gap-2 items-center md:text-xl text-center'>
					<div className='about-text_shop'>
						©2024 Edem flowers Lviv - квітковий магазин в м.Львів, вул.
						Городоцька, 300.
					</div>
					<div className='about-text_number text-yellow-500 border-b border-yellow-600'>
						+380689848064
					</div>
				</div>
				<div className='copyright'>Всі права захищені.</div>
			</div>
		</footer>
	)
}

export default Footer
