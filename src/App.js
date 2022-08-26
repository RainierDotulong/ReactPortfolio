import React from 'react'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import HelloReact from './components/HelloReact'

function App() {
	return (
		<div>
			<Header />
			<About />
			<Projects />
			<Skills />
			<Footer />
		</div>
	)
}

export default App
