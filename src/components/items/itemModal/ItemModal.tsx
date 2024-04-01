import { ReactNode } from 'react'

interface IItemModal {
	onClose: () => void
	children: ReactNode
}

const ItemModal = ({ onClose, children }: IItemModal) => {
	return (
		<div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col justify-center items-center z-10'>
			<div className='bg-black p-6 rounded-lg border-2 border-yellow-600'>
				{children}
			</div>
			<button
				className='mt-4 bg-yellow-500 text-white font-bold py-2 px-12'
				onClick={onClose}
			>
				Закрити
			</button>
		</div>
	)
}

export default ItemModal
