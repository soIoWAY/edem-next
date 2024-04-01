import CatalogNav from '@/components/catalog/CatalogNav'
import CatalogWrapper from '@/components/catalog/CatalogWrapper'

export default function CatalogPage() {
	return (
		<div>
			<h1 className='tracking-wider text-3xl mt-10'>Каталог</h1>
			<CatalogNav />
			<CatalogWrapper />
		</div>
	)
}
