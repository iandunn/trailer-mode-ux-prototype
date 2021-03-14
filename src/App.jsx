import React, { useState } from 'react';
import './App.css';

/*

show it in sidebar and it updates real tiem as add content,
can also x to remove. can click on ilnk to jump back to the title of that entry

 */


function App() {
	const [ watchLater, setwatchLater ] = useState( [] );

	const trailers = {
		drama: [
			{
				id: 1,
				name: 'Cherry',
				trailerId: 'Nt_wyydppg8',
			},

			{
				id: 2,
				name: 'Hala',
				trailer: 'url/to/trailer.mov',
			},

			// the banker
		],

		action: [
			// the expanse
			// see
			// star trek discovery
		],

		documentaries: [
			{
				id: 2,
				name: 'Long Way Up',
				trailer: 'url/to/trailer.mov',
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
						<button>
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

			{/* html5 elements instead of all divs, but only when semantic */}

			<main className="trailer-explorer">
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/Nt_wyydppg8"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>

				<nav className="trailer-controls">
					<button>Previous</button>
					<button>Add to Watch Later</button>
					<button>Next</button>
				</nav>
			</main>

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

