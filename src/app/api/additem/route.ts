import { prisma } from '@/app/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	const dataPromise = req.json()
	const data = await dataPromise
	const { name, price, item_type, photo } = data

	try {
		await prisma.item.create({
			data: {
				name,
				price,
				item_type,
				photo,
			},
		})
		return NextResponse.json(
			{ message: 'Айтем додано успішно' },
			{ status: 200 }
		)
	} catch (error) {
		return NextResponse.json(
			{ message: 'Не вдалось додати айтем' },
			{ status: 500 }
		)
	}
}
