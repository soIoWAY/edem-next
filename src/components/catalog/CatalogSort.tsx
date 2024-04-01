import { useRouter } from 'next/navigation'
import { useState } from 'react'

const CatalogSort = () => {
	const router = useRouter()
	const [priceFrom, setPriceFrom] = useState(0)
	const [priceTo, setPriceTo] = useState(0)
	const changeSortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value
		const urlSearchParams = new URLSearchParams(window.location.search)
		if (selectedValue.length > 1) {
			urlSearchParams.set('sort', selectedValue)
		} else {
			urlSearchParams.delete('sort')
		}
		router.push(`?${urlSearchParams.toString()}`)
	}
	const priceSortHandler = (e: React.FormEvent) => {
		e.preventDefault()
		const urlSearchParams = new URLSearchParams(window.location.search)
		if (priceFrom > 0) {
			urlSearchParams.set('priceFrom', priceFrom.toString())
		} else {
			urlSearchParams.delete('priceFrom')
		}

		if (priceTo > 0) {
			urlSearchParams.set('priceTo', priceTo.toString())
		} else {
			urlSearchParams.delete('priceTo')
		}
		router.push(`?${urlSearchParams.toString()}`)
	}
	const priceFilterInput =
		'w-16 border border-yellow-500 rounded-md bg-transparent px-1 outline-none'
	return (
		<div>
			<div className='flex flex-col sm:flex-row justify-between gap-3 items-center'>
				<div className='flex flex-col sm:flex-row gap-3 items-center'>
					<span className='text-xl sm:text-base'>Ціна: </span>
					<form className='flex gap-3' onSubmit={priceSortHandler}>
						<input
							type='text'
							placeholder='Від'
							className={priceFilterInput}
							maxLength={4}
							value={isNaN(priceFrom) || priceFrom === 0 ? '' : priceFrom}
							onChange={e => {
								const value = e.target.value.trim()
								if (value === '' || !isNaN(parseInt(value))) {
									setPriceFrom(parseInt(value))
								}
							}}
						/>
						<input
							type='text'
							placeholder='До'
							className={priceFilterInput}
							maxLength={4}
							value={isNaN(priceTo) || priceTo === 0 ? '' : priceTo}
							onChange={e => {
								const value = e.target.value.trim()
								if (value === '' || !isNaN(parseInt(value))) {
									setPriceTo(parseInt(value))
								}
							}}
						/>
						<input
							type='submit'
							className='bg-yellow-500 px-3 rounded-md cursor-pointer'
							value='Ок'
						/>
					</form>
				</div>
				<div className='flex gap-3 items-center'>
					<span className='hidden sm:block'>Сортувати: </span>
					<div className='border border-yellow-500 p-2 rounded-md bg-black'>
						<select className='bg-black' onChange={changeSortHandler}>
							<option value=''>За замовчуванням</option>
							<option value='price_desc'>Від дорожчих</option>
							<option value='price_asc'>Від дешевших</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CatalogSort
