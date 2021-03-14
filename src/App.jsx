import React, { useState } from 'react';
import TrailerExplorer from './Trailer-Explorer';
import './App.css';


function App() {
	const [ currentCategory, setCurrentCategory ] = useState( 'drama' );

	const trailers = {
		drama: [
			{
				name: 'Cherry',
				trailerId: 'H5bH6O0bErk',
			},

			{
				name: 'Hala',
				trailerId: 'QBAkWPB_PVw',
			},

			{
				name: 'The Banker',
				trailerId: 'J_-nk9-sMus',
			},
		],

		action: [
			{
				name: 'The Expanse',
				trailerId: '8X5gXIQmY-E',
			},

			{
				name: 'See',
				trailerId: '7Rg0y7NT1gU',
			},

			{
				name: 'Star Trek Discovery',
				trailerId: 'hC7IMj7WFyE',
			},
		],

		documentaries: [
			{
				name: 'Long Way Up',
				trailerId: '611fw81BN98',
			},

			{
				name: "Boy's State",
				trailerId: 'ViiYJZqGC5w',
			},

			{
				name: 'Tiny World',
				trailerId: 'oGNb4d6UdeU',
			},
		]
	};

	return (
		<div className="App">
			{/* break these into components */}

			<header>
				<h1>
					Trailer Mode UX Prototype
				</h1>

				<p>A better UX while exploring content on video streaming services like Netflix and Apple TV.</p>
			</header>

			<nav className="category-list">
				<h2>Categories</h2>

				{/* build automatically from data */}

				<ul>
					<li>
						<button
							disabled={ 'drama' === currentCategory }
							onClick={ () => setCurrentCategory( 'drama' ) }
						>
							Drama
						</button>
					</li>

					<li>
						<button
							disabled={ 'action' === currentCategory }
							onClick={ () => setCurrentCategory( 'action' ) }
						>
							Action
						</button>
					</li>


					<li>
						<button
							disabled={ 'documentaries' === currentCategory }
							onClick={ () => setCurrentCategory( 'documentaries' ) }
						>
							Documentaries
						</button>
					</li>
				</ul>
			</nav>

			<TrailerExplorer
				trailers={ trailers[ currentCategory ] }
			/>

			<aside className="watch-later-list">
				{/*

				updates real tiem as add content,
				can also x to remove.
				can click on ilnk to jump back to the title of that entry? or to it's title page?

				 */}

				<h3>Watch Later</h3>

				<ul>
					<li>
						<a href="">
							Foo
						</a>
					</li>

					<li>
						<a href="">
							Bar
						</a>
					</li>
				</ul>
			</aside>
		</div>
	);
}

export default App;

