'use client'
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollButton = () => {
	const [isVisible, setIsVisible] = useState(false)

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const scrollHandler = () => {
				if (window.scrollY > 300) {
					setIsVisible(true)
				} else {
					setIsVisible(false)
				}
			}

			window.addEventListener('scroll', scrollHandler)

			return () => {
				window.removeEventListener('scroll', scrollHandler)
			}
		}
	}, [])

	return (
		<div>
			{isVisible && (
				<div className='fixed bottom-4 sm:bottom-8 right-6 sm:right-12	'>
					<button
						className='bg-yellow-500 p-3 rounded-full flex items-center text-xl'
						onClick={() => scrollToTop()}
					>
						<FaArrowUp />
					</button>
				</div>
			)}
		</div>
	)
}

export default ScrollButton
