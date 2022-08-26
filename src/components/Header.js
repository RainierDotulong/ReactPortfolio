import React from 'react'
import { AiOutlineAim } from 'react-icons/ai'
import Switch from 'react-switch'

export default function Header() {
	return (
		<header
			id='home'
			style={{ height: window.innerHeight - 140, display: 'block' }}
		>
			<div className='row aligner' style={{ height: '100%' }}>
				<div className='col-md-12'>
					<div>
						<span>
							<AiOutlineAim size='12em' color='#353238' />
						</span>
						<br />
						<br />
						<h1 className='mb-0'> Rainier Dotulong</h1>
						<div className='title-container title-styles'>
							FULL STACK DEVELOPER
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
