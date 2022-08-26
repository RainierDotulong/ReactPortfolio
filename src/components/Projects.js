import React from 'react'

export default function Projects() {
	function goToProject1() {
		console.log('clicked')
		window.location.href =
			'https://github.com/thegabe101/Project-1-Rainer-Matt-Ming-Gabe'
	}
	function goToProject2() {
		console.log('clicked')
		window.location.href = 'https://github.com/alonpatashnik/project-two'
	}

	return (
		<section id='portfolio'>
			<div className='col-md-12'>
				<h1 style={{ color: 'black' }}>
					<span>Portfolio</span>
				</h1>
				<div className='col-sm-12 col-md-6 col-lg-4'>
					<span className='portfolio-item d-block'>
						<div className='foto'>
							<div
								style={{ cursor: 'pointer', marginRight: '5%' }}
								onClick={goToProject1}
							>
								<img
									src='https://oneneighborhoodbuilders.org/wp-content/uploads/2017/11/placeholder-profile-male-500x500.png'
									alt='projectImages'
									height='230'
									style={{
										marginBottom: 0,
										paddingBottom: 0,
										position: 'relative',
									}}
								/>
								<span className='project-date'>2022</span>
								<br />
								<p className='project-title-settings mt-3'>Title</p>
							</div>
							<div style={{ cursor: 'pointer' }} onClick={goToProject2}>
								<img
									src='https://oneneighborhoodbuilders.org/wp-content/uploads/2017/11/placeholder-profile-male-500x500.png'
									alt='projectImages'
									height='230'
									style={{
										marginBottom: 0,
										paddingBottom: 0,
										position: 'relative',
									}}
								/>
								<span className='project-date'>2022</span>
								<br />
								<p className='project-title-settings mt-3'>Title</p>
							</div>
						</div>
					</span>
				</div>
			</div>
		</section>
	)
}
