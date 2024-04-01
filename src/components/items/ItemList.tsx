'use client'
import axios from 'axios'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Loader from '../loader/Loader'
import Item from './Item'

interface IItem {
	id: number
	name: string
	price: number
	photo: string
	item_type: string
}

async function getItems(
	sortParam: string | null,
	priceFrom: string | null,
	priceTo: string | null,
	pathname: string | null
) {
	try {
		const urlByItemType = `/api/items?sort=${sortParam}&priceFrom=${priceFrom}&priceTo=${priceTo}`
		if (pathname && pathname === '/catalog/bouquets') {
			let url = urlByItemType + '&itemType=bouquet'
			const res = await axios.get(url)
			return res.data
		} else if (pathname && pathname === '/catalog/boxes') {
			let url = urlByItemType + '&itemType=box'
			const res = await axios.get(url)
			return res.data
		} else {
			let url = urlByItemType
			const res = await axios.get(url)
			console.log(res.data)
			return res.data
		}
	} catch (error) {
		console.error(error)
		return []
	}
}

export default function ItemList() {
	const searchParams = useSearchParams()
	const sortParam = searchParams.get('sort')
	const priceFromParam = searchParams.get('priceFrom')
	const priceToParam = searchParams.get('priceTo')
	const [items, setItems] = useState<IItem[]>([])

	const pathname = usePathname()

	useEffect(() => {
		console.log(pathname, typeof pathname)
		const fetchItems = async () => {
			const fetchedItems = await getItems(
				sortParam,
				priceFromParam,
				priceToParam,
				pathname
			)
			setItems(fetchedItems.items)
		}
		fetchItems()
	}, [sortParam, priceFromParam, priceToParam, pathname])

	return (
		<div className='flex flex-col items-center'>
			<div className='flex flex-wrap justify-between text-center'>
				{items ? (
					items.map(item => (
						<Item
							key={item.id}
							photo={item.photo}
							name={item.name.length > 23 ? item.name.slice(0, 15) : item.name}
							price={item.price}
							id={item.id}
						/>
					))
				) : (
					<Loader />
				)}
			</div>
			<Link
				className='bg-yellow-600 py-3 px-12  font-semibold text-xl hover:bg-yellow-500 transition-all my-6 relative'
				href='/catalog'
			>
				Каталог
			</Link>
		</div>
	)
}
