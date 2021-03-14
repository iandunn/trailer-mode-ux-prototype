import React, { useState } from 'react';
import TrailerExplorer from './Trailer-Explorer';
import './App.css';
import trailers from './trailers.json';
import { uniq } from 'lodash';


function App() {
	const [ currentCategory, setCurrentCategory ] = useState( 'drama' );
	const [ watchList, setWatchList ] = useState( [] );

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
				watchLaterHandler={ ( title ) => {
					watchList.push( title );
					setWatchList( uniq( watchList ) );
				} }
			/>

			<aside className="watch-later-list">
				<h3>Watch Later</h3>

				<ul>
					{ watchList.map( ( title ) =>
						<li key={ title }>
							<a>
								{ title }
								{/*  can click on ilnk to jump back to the title of that entry? or to it's title page? */}

								{' '} (<button>x</button>)
								{/* remove from list when clicked, should probably index by id so direct access isntead of searching entire list */}
							</a>
						</li>
					) }
				</ul>
			</aside>
		</div>
	);
}

export default App;

