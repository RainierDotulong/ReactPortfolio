import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { DiJavascript1 } from 'react-icons/di'
import { DiCss3 } from 'react-icons/di'
import { DiBootstrap } from 'react-icons/di'
import { AiOutlineHtml5 } from 'react-icons/ai'

export default function Skills() {
	function goToReact() {
		console.log('clicked')
		window.location.href = 'https://reactjs.org/'
	}
	function goToMongo() {
		console.log('clicked')
		window.location.href = 'https://www.mongodb.com/'
	}
	function goToMySql() {
		console.log('clicked')
		window.location.href = 'https://www.mysql.com/'
	}
	function goToJavaScript() {
		console.log('clicked')
		window.location.href = 'https://www.javascript.com/'
	}
	function goToBootstrap() {
		console.log('clicked')
		window.location.href = 'https://getbootstrap.com/'
	}
	return (
		<section id='skills'>
			<div className='col-md-12'>
				<div className='col-md-12'>
					<h1 className='section-title'>
						<span className='text-white'>SKILLZ</span>
					</h1>
				</div>
				<div className='col-md-12 text-center'>
					<ul className='list-inline mx-auto skill-icon'>
						<FaReact
							size='7%'
							onClick={goToReact}
							style={{ cursor: 'pointer', margin: '2%' }}
						/>
						<SiMongodb
							size='7%'
							onClick={goToMongo}
							style={{ cursor: 'pointer', margin: '2%' }}
						/>
						<GrMysql
							size='7%'
							onClick={goToMySql}
							style={{ cursor: 'pointer', margin: '2%' }}
						/>
						<DiJavascript1
							size='7%'
							onClick={goToJavaScript}
							style={{ cursor: 'pointer', margin: '2%' }}
						/>
						<DiCss3
							size='7%'
							onClick={goToJavaScript}
							style={{ cursor: 'pointer', margin: '2%' }}
						/>
						<DiBootstrap
							size='7%'
							onClick={goToBootstrap}
							style={{ cursor: 'pointer', margin: '2%' }}
						/>
						<AiOutlineHtml5
							size='7%'
							onClick={goToJavaScript}
							style={{ cursor: 'pointer', margin: '2%' }}
						/>
					</ul>
				</div>
			</div>
		</section>
	)
}
