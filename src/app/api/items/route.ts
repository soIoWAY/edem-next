import { prisma } from '@/app/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
	try {
		const searchParams = req.nextUrl.searchParams
		const sort = searchParams.get('sort')
		const priceToUrl: string | null = searchParams.get('priceTo')
		const priceFromUrl: string | null = searchParams.get('priceFrom')
		const itemType = searchParams.get('itemType')
		let priceTo: number | null = null
		let priceFrom: number | null = null
		let orderBy = {}
		if (sort === 'price_desc') {
			orderBy = { price: 'desc' }
		} else if (sort === 'price_asc') {
			orderBy = { price: 'asc' }
		}
		if (priceToUrl !== null) {
			priceTo = parseInt(priceToUrl)
		}
		if (priceFromUrl !== null) {
			priceFrom = parseInt(priceFromUrl)
		}

		let priceFilter = {}
		if (
			priceFrom !== null &&
			!isNaN(priceFrom) &&
			priceTo !== null &&
			!isNaN(priceTo)
		) {
			priceFilter = {
				AND: [{ price: { gte: priceFrom } }, { price: { lte: priceTo } }],
			}
		} else if (priceTo !== null && !isNaN(priceTo)) {
			priceFilter = {
				price: { lte: priceTo },
			}
		} else if (priceFrom !== null && !isNaN(priceFrom)) {
			priceFilter = {
				price: { gte: priceFrom },
			}
		}

		let where = { ...priceFilter }
		if (itemType === 'bouquet') {
			where = { ...where, item_type: 'bouquet' }
		} else if (itemType === 'box') {
			where = { ...where, item_type: 'box' }
		}
		const items = await prisma.item.findMany({
			orderBy: orderBy,
			where: where,
		})
		return NextResponse.json({ items }, { status: 200 })
	} catch (error) {
		return NextResponse.json({ message: 'Айтеми не знайдено' }, { status: 404 })
	}
}
