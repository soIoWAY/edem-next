import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa'
import ItemModal from './itemModal/ItemModal'

interface Item {
	name: string
	price: number
	photo: string
	id: number
}

const Item = ({ photo, name, price, id }: Item) => {
	const [showModal, setShowModal] = useState(false)

	const modalHandler = () => {
		setShowModal(!showModal)
	}
	return (
		<div className='flex flex-wrap justify-center mx-auto'>
			<div className='max-w-sm m-4 p-4 bg-transparent rounded-lg flex flex-col justify-between '>
				<Image src={photo} width={320} height={320} alt={name} />
				<div className='mt-4 border-t border-b pb-2 border-yellow-500 pt-2'>
					<h2 className='text-xl font-semibold'>{name}</h2>
					<p className='mt-2'>
						<span className='text-yellow-500 font-bold'>{price}</span> грн
					</p>
					<button
						className='mt-4 bg-yellow-500 text-white font-bold py-2 px-12 '
						onClick={modalHandler}
					>
						Купити
					</button>
				</div>
			</div>
			{showModal && (
				<ItemModal onClose={modalHandler}>
					<div>
						<Image src={photo} width={320} height={320} alt={name} />
						<div className='border-t-2 border-yellow-500 mt-2 text-xl'>
							<p className='text-gray-300 text-base mt-1'>id:{id}</p>
							<h2 className='tracking-wide'>«{name}»</h2>
							<span>
								<span className='text-yellow-500 font-bold'>{price}</span> грн
							</span>
							<div className='flex flex-col items-center'>
								<p>Купити в:</p>
								<div className='flex gap-3 text-3xl mt-2 text-yellow-500'>
									<Link
										href='https://t.me/xzvetal'
										border-yellow-500
										className='border-2 rounded-full p-2'
									>
										<FaTelegram />
									</Link>
									<Link
										href='https://www.instagram.com/edem_flowers_lviv/'
										className='border-2 rounded-full p-2'
										target='_blank'
									>
										<FaInstagram />
									</Link>
									<Link
										href='tel:+380689848064'
										className='border-2 rounded-full p-2'
										target='_blank'
									>
										<FaPhone />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</ItemModal>
			)}
		</div>
	)
}

export default Item
