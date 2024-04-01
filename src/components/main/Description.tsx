import Image from 'next/image'
const Description = () => {
	return (
		<div className='w-[90%] sm:w-[80%] m-auto flex flex-col py-16 text-lg'>
			<div className='flex justify-start relative top-8 md:top-14'>
				<Image src='/about-1.png' width={300} height={300} alt='about-1' />
			</div>
			<div className='w-[85%] sm:w-[55%] m-auto flex flex-col gap-8 my-12'>
				<h1 className='text-right text-3xl font-semibold tracking-wide text-yellow-500'>
					Edem Flowers
				</h1>
				<p className='text-left'>
					<span>
						Ласкаво просимо до{' '}
						<span className='text-yellow-500'>Edem Flowers</span>, вашого
						вірного провідника у світі квітів!
					</span>
				</p>
				<p className='text-right'>
					У нашому магазині кожен квітковий букет – це{' '}
					<span className='text-yellow-500'>витвір мистецтва</span>, створений з
					любов'ю та розумінням вашого особливого моменту.
				</p>
				<p className='text-left'>
					Від <span className='text-yellow-500'>класичних</span> різновидів до
					<span className='text-yellow-500'> екзотичних</span> рослин.
				</p>
				<p className='text-right'>
					Ми пропонуємо{' '}
					<span className='text-yellow-500'>широкий вибір квітів</span>, які
					додають краси та вишуканості будь-якому приміщенню. Наша команда
					флористів{' '}
					<span className='text-yellow-500'>завжди готова допомогти вам</span>{' '}
					обрати найкращий варіант та надати індивідуальні поради.
				</p>
				<p className='text-left'>
					З <span className='text-yellow-500'>Edem Flowers</span> ваші емоції
					стають ще яскравішими та запам'ятовуючими. Приєднуйтесь до нашої
					квітучої спільноти і даруйте красу разом з нами!
				</p>
			</div>
			<div className='flex justify-end'>
				<Image src='/about-3.png' width={300} height={300} alt='about-3' />
			</div>
		</div>
	)
}

export default Description
