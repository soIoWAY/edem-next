'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const SignUp = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const navigation = useRouter()

	const sendFormHandler = async (e: React.FormEvent) => {
		e.preventDefault()

		if (password !== confirmPassword) {
			alert('Паролі не співпадають')
		} else {
			try {
				const body = { username, password }
				await fetch('/api/register', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(body),
				})
				navigation.push('/signin')
			} catch (error) {
				console.error(error)
			}
		}

		setUsername('')
		setPassword('')
		setConfirmPassword('')
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
					<h3 className='text-3xl mb-5'>Реєстрація</h3>
					<label>Ім'я користувача</label>
					<input
						type='text'
						className='bg-transparent border border-yellow-500 py-1 rounded-md w-full sm:w-3/4 outline-none px-1 text-center'
						maxLength={12}
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
					<label className='mt-3'>Підтвердити пароль</label>
					<input
						type='password'
						className='bg-transparent border border-yellow-500 py-1 rounded-md w-full sm:w-3/4 outline-none px-1 mb-2 text-center'
						minLength={6}
						value={confirmPassword}
						onChange={e => setConfirmPassword(e.target.value)}
						required
					/>
					<input
						type='submit'
						className='mt-3 bg-yellow-500 m-auto rounded-md py-1 my-3 px-10 cursor-pointer'
						value='Реєстрація'
					/>
					або
					<Link href='/signin' className='border-b border-yellow-500'>
						Вхід
					</Link>
				</form>
			</div>
		</div>
	)
}

export default SignUp
