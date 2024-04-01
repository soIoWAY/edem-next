import { prisma } from '@/app/lib/prisma'
import bcrypt from 'bcrypt'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
	const dataPromise = req.json()
	const data = await dataPromise
	const { username, password } = data

	const hashedPassword = await bcrypt.hash(password, 10)

	const foundUser = await prisma.user.findUnique({
		where: { username },
	})

	if (foundUser) {
		return NextResponse.json(
			{ message: 'Користувач з таким юзернеймом вже існує' },
			{ status: 500 }
		)
	}

	try {
		await prisma.user.create({
			data: {
				username,
				hashedPassword,
			},
		})

		return NextResponse.json(
			{ message: 'Реєстрація пройшла успішно' },
			{ status: 200 }
		)
	} catch (error) {
		return NextResponse.json(
			{ message: 'Виникла проблема при обробці даних' },
			{ status: 500 }
		)
	}
}
