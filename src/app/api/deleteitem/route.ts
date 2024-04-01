import { prisma } from '@/app/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(req: NextRequest) {
	const dataPromise = req.json()
	const data = await dataPromise
	const { id } = data

	try {
		await prisma.item.delete({
			where: {
				id: id,
			},
		})
		return NextResponse.json(
			{ message: 'Айтем видалено успішно' },
			{ status: 200 }
		)
	} catch (error) {
		return NextResponse.json(
			{ message: 'Помилка при видалені' },
			{ status: 500 }
		)
	}
}
