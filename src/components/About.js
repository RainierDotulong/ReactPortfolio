import React from 'react'
import { Icon } from '@iconify/react'
import angularIcon from '@iconify/icons-logos/angular-icon'
import reactIcon from '@iconify/icons-logos/react'
import vueIcon from '@iconify/icons-logos/vue'

export default function About() {
	return (
		<section id='about'>
			<div className='col-md-12'>
				<h1 style={{ color: 'black' }}>
					<span>About Me</span>
				</h1>
				<div className='row center mx-auto mb-5'>
					<div className='col-md-4 mb-5 center'>
						<div className='polaroid'>
							<span style={{ cursor: 'auto' }}>
								<img
									height='250px'
									src='https://oneneighborhoodbuilders.org/wp-content/uploads/2017/11/placeholder-profile-male-500x500.png'
									alt=''
								/>
								<Icon
									icon={angularIcon}
									style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
								/>
								<Icon
									icon={reactIcon}
									style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
								/>
								<Icon
									icon={vueIcon}
									style={{ fontSize: '400%', margin: '9% 5% 0 5%' }}
								/>
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
