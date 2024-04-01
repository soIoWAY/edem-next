import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req: NextRequest) {
	const userCookieObject = req.cookies.get('user')
	const userCookie = userCookieObject ? userCookieObject.value : null
	let url = req.url
	let userRole = null

	if (userCookie) {
		const decodedCookie = decodeURIComponent(userCookie)
		const userData = JSON.parse(decodedCookie)
		userRole = userData.role
	}

	if (!userCookie && url?.includes('/dashboard')) {
		return NextResponse.redirect('https://edemflowers.vercel.app/')
	}

	if (!userCookie && url?.includes('/admin-dashboard')) {
		return NextResponse.redirect('https://edemflowers.vercel.app/')
	}

	if (userCookie && (url?.includes('/signin') || url?.includes('/signup'))) {
		return NextResponse.redirect('https://edemflowers.vercel.app/dashboard')
	}

	if (userRole !== 'admin' && url?.includes('/admin-dashboard')) {
		return NextResponse.redirect('https://edemflowers.vercel.app/')
	}

	if (userRole === 'admin' && url?.includes('/dashboard')) {
		return NextResponse.redirect(
			'https://edemflowers.vercel.app/admin-dashboard'
		)
	}
}
