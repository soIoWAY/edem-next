import Link from 'next/link'
import { FaInstagram, FaTelegram } from 'react-icons/fa'

export default function About() {
	return (
		<div className='my-10 w-[75%] m-auto'>
			<h1 className='text-center text-yellow-500 text-3xl font-semibold'>
				Edem Flowers Lviv
			</h1>
			<div className='mt-5 text-left w-[80%]'>
				<h3 className='text-xl font-semibold text-yellow-500'>
					<span className='text-yellow-500'>
						Ласкаво просимо до Edem Flowers
					</span>
				</h3>
				<p className='mt-2'>
					Вітаємо вас в <span className='text-yellow-500'>Edem Flowers</span> -
					вашому надійному провіднику у світі квітів та рослинного дизайну. Наш
					магазин втілює у собі відданість найвищій якості, елегантності та
					вишуканості у кожному букеті та аранжуванні.
				</p>
			</div>
			<div className='mt-5 text-right w-[80%] m-auto'>
				<h3 className='text-xl font-semibold text-yellow-500'>Наша місія</h3>
				<p className='mt-2'>
					У <span className='text-yellow-500'>Edem Flowers</span> ми прагнемо
					створювати моменти радості та незабутні емоції через найкрасивіші
					квіткові композиції. Ми віримо, що кожен букет може розповісти
					унікальну історію, передати почуття та виразити вдячність, любов чи
					повагу.
				</p>
			</div>
			<div className='mt-5 text-left w-[80%]'>
				<h3 className='text-xl font-semibold text-yellow-500'>Наші цінності</h3>
				<p className='mt-2'>
					У <span className='text-yellow-500'>Edem Flowers</span> ми прагнемо до
					вищої якості та професійного обслуговування. Наша команда фахівців
					віддана тому, щоб забезпечити вас кращим вибором квітів, найновішими
					тенденціями дизайну та бездоганним сервісом.
				</p>
			</div>
			<div className='mt-5 text-right w-[80%] m-auto'>
				<h3 className='text-xl font-semibold text-yellow-500'>Наші послуги</h3>
				<p className='mt-2'>
					Ми пропонуємо широкий вибір квіткових композицій для будь-якої нагоди:
					від урочистих подій до повсякденних радощів. Наші професійні флористи
					завжди раді порадити вам та створити букет, що відповідає вашим
					унікальним потребам та бажанням.
				</p>
			</div>
			<div className='mt-5 text-left w-[80%]'>
				<h3 className='text-xl font-semibold text-yellow-500'>
					Зв'яжіться з нами
				</h3>
				<p className='mt-2'>
					Ми завжди готові допомогти вам вибрати ідеальний букет для будь-якої
					нагоди. Звертайтеся до нас за телефоном або електронною поштою, або
					завітайте до нашого магазину, щоб особисто відчути чарівність квітів
					Edem Flowers.
				</p>
			</div>
			<div className='contacts text-center mt-5' id='contacts'>
				<h3 className='text-xl font-semibold text-yellow-500'>Контакти</h3>
				<div className=' flex flex-col items-center gap-3 mt-3'>
					<Link
						href='tel:+380689848064'
						className='font-semibold tracking-wider'
					>
						+380689848064
					</Link>
					<div className='icons text-yellow-500 flex text-5xl gap-5'>
						<Link
							href='https://www.instagram.com/edem_flowers_lviv/'
							target='_blank'
						>
							<span></span>
							<FaInstagram />
						</Link>
						<Link href='https://t.me/xzvetal'>
							<FaTelegram />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
