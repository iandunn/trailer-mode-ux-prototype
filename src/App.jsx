import React from 'react';
import TrailerExplorer from './Trailer-Explorer';
import './App.css';

/*

show it in sidebar and it updates real tiem as add content,
can also x to remove. can click on ilnk to jump back to the title of that entry

 */


function App() {
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
			// the expanse
			// see
			// star trek discovery
		],

		documentaries: [
			{
				name: 'Long Way Up',
				trailerId: 'url/to/trailer.mov',
			},

			// boys state

			// tiny world
		]
	};

	return (
		<div className="App">
			{/* break these into components */}

			<header>
				<h1>
					Trailer Mode UX Prototype
				</h1>

				<p>short desc, see readme for more</p>
			</header>

			<nav className="category-list">
				<h2>Categories</h2>

				{/* build automatically from data */}

				<ul>
					<li>
						<button data-category="drama">
							Drama
						</button>
					</li>

					<li>
						<button data-category="action">
							Action
						</button>
					</li>


					<li>
						<button data-category="documentaries">
							Documentaries
						</button>
					</li>

					<li>
						<button disabled>
							Lorum
						</button>
					</li>

					<li>
						<button disabled>
							Ipsum
						</button>
					</li>

					<li>
						<button disabled>
							Eleifend Vestibulum
						</button>
					</li>

					<li>
						<button disabled>
							Attortor
						</button>
					</li>
				</ul>
			</nav>

			<TrailerExplorer
				trailers={ trailers.drama }
			/>

			<aside className="watch-later-list">
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

