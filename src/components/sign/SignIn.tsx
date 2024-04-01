'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const SignIn = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useRouter()

	const sendFormHandler = async (e: React.FormEvent) => {
		e.preventDefault()

		const body = { username, password }

		try {
			await fetch('/api/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
				credentials: 'include',
			})
			navigate.push('/dashboard')
		} catch (error) {
			console.error(error)
		}

		setUsername('')
		setPassword('')
	}
	return (
		<div className='w-10/12 sm:w-6/12 md:w-5/12 lg:w-3/12 m-auto my-24'>
			<div className='border-2 border-yellow-500 rounded-md p-2'>
				<Link href='/' className='flex justify-start pt-2 pl-3 text-xl'>
					<FaArrowLeft />
				</Link>
				<form
					className='flex flex-col items-center p-2'
					onSubmit={sendFormHandler}
				>
					<h3 className='text-3xl mb-5'>Вхід</h3>
					<label>Ім'я користувача</label>
					<input
						type='text'
						className='bg-transparent border border-yellow-500 py-1 rounded-md w-full sm:w-3/4 outline-none px-1 text-center'
						maxLength={16}
						value={username}
						onChange={e => setUsername(e.target.value)}
						minLength={3}
						required
					/>
					<label className='mt-3'>Пароль</label>
					<input
						type='password'
						className='bg-transparent border border-yellow-500 py-1 rounded-md w-full sm:w-3/4 outline-none px-1 text-center'
						minLength={6}
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
					<input
						type='submit'
						className='mt-3 bg-yellow-500 m-auto rounded-md py-1 my-3 px-10 cursor-pointer'
						value='Вхід'
					/>
					або
					<Link href='/signup' className='border-b border-yellow-500'>
						Реєстрація
					</Link>
				</form>
			</div>
		</div>
	)
}

export default SignIn
