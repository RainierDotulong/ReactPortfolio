import React from 'react'

export default function Footer() {
	function goToGit() {
		console.log('clicked')
		window.location.href = 'https://github.com/RainierDotulong'
	}
	return (
		<footer>
			<div className='col-md-12'>
				<div
					className='social-links'
					style={{ cursor: 'pointer' }}
					onClick={goToGit}
				>
					My Github
				</div>

				<div className='copyright py-4 text-center'>
					<div className='container'>
						<small>Copyright &copy; </small>
					</div>
				</div>
			</div>
		</footer>
	)
}
