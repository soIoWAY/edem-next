'use client'

import ItemList from '../items/ItemList'
import CatalogSort from './CatalogSort'

const CatalogWrapper = () => {
	return (
		<div className='mt-5'>
			<CatalogSort />
			<ItemList />
		</div>
	)
}

export default CatalogWrapper
