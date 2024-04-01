'use client'

import CatalogNav from '@/components/catalog/CatalogNav'
import CatalogSort from '@/components/catalog/CatalogSort'
import ItemList from '@/components/items/ItemList'

export default function DryflowersPage() {
	return (
		<div>
			<h1 className='tracking-wider text-3xl mt-10'>Сухоцвіти</h1>
			<CatalogNav />
			<div className='mt-5'>
				<CatalogSort />
				<ItemList />
			</div>
		</div>
	)
}
