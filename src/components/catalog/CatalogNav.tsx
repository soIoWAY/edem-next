import Link from 'next/link'

const CatalogNav = () => {
	return (
		<div>
			<div className='mt-7'>
				<ul className='flex-col gap-10 items-center sm:flex-row flex justify-center sm:gap-20 text-xl '>
					<li className='transition-all hover:text-yellow-500 border-b-2 border-yellow-600 hover:border-white'>
						<Link href='/catalog/bouquets'>Букети</Link>
					</li>
					<li className='transition-all hover:text-yellow-500 border-b-2 border-yellow-600 hover:border-white'>
						<Link href='/catalog/'>Сухоцвіти</Link>
					</li>
					<li className='transition-all hover:text-yellow-500 border-b-2 border-yellow-600 hover:border-white'>
						<Link href='/catalog/boxes'>Бокси</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default CatalogNav
