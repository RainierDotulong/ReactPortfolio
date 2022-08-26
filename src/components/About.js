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
					<div className='col-md-8 center'>
						<div className='col-md-10'>
							<div className='card'>
								<div className='card-header'>
									<div
										className='card-body font-trebuchet text-justify ml-3 mr-3'
										style={{
											height: 'auto',
											fontSize: '132%',
											lineHeight: '200%',
										}}
									>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Possimus eveniet nisi magni repudiandae perferendis numquam
										veniam asperiores quos dolore ex assumenda rem explicabo
										nostrum architecto quaerat quibusdam necessitatibus aliquam,
										qui minima neque tempore? Nisi, magni sapiente eaque debitis
										dolor eum, blanditiis obcaecati labore, ab expedita libero
										architecto! Nostrum dolores rem aliquam molestias tempora
										eos reprehenderit quisquam, ipsam repudiandae obcaecati cum
										delectus veniam nobis eum impedit? Perspiciatis labore
										minima repellendus explicabo in, unde saepe dolores maiores
										itaque. Eum ipsam ea quae quo suscipit minima corporis nemo
										praesentium natus dignissimos! Molestiae architecto rem
										suscipit praesentium corrupti sed atque quaerat doloremque
										minima ratione harum eius quo veniam blanditiis libero culpa
										cumque eum expedita sapiente exercitationem dolorum, et,
										debitis beatae inventore. Vero harum dicta optio ea aliquid
										quis rerum, dolorum asperiores rem facere. Id asperiores
										earum eveniet in corrupti iste, temporibus nemo at vitae?
										Nam pariatur, aliquam et dolorum odit mollitia perspiciatis.
										Iusto harum sunt et ratione rem recusandae, nam amet ab
										voluptatem nostrum labore qui ex possimus est excepturi non
										facilis. Pariatur ipsum quas unde eaque illum sed saepe!
										Dolor similique laudantium recusandae debitis eaque modi
										nihil, laboriosam ipsam est cupiditate inventore dignissimos
										deserunt nam exercitationem vitae quidem magni quasi facilis
										eos quis.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
