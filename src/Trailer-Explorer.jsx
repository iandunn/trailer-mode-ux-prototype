import React from 'react';
import { clamp } from 'lodash';

class TrailerExplorer extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			current: 0
		};
	}

	componentDidUpdate( prevProps, prevState, snapshot ) {
		if ( prevProps.trailers !== this.props.trailers ) {
			// Reset the position to the beginning when changing categories.
			this.setState( { current: 0 } );

			// this causes unnecessary re-render, but seems better than derivedstatefromprops() and caching previous value in state
		}
	}

	newTrailer = ( direction ) => {
		const { current } = this.state;
		const maximum = this.props.trailers.length;
		let trailerIndex = current;

		trailerIndex += 'next' === direction ? 1 : -1;
		trailerIndex = clamp( trailerIndex, 0, maximum );

		this.setState( { current: trailerIndex } );
	}

	render() {
		const { trailers, watchLaterHandler } = this.props;
		const { current } = this.state;

		return (
			<main className="trailer-explorer">
				<Trailer
					trailerId={ trailers[ current ].trailerId }
				/>

				<TrailerControls
					currentTitle={ trailers[ current ].name }
					currentPosition={ current }
					maximumPosition={ trailers.length - 1 }
					previousNextHandler={ this.newTrailer }
					watchLaterHandler={ watchLaterHandler }
				/>
			</main>
		);
	}
}

function Trailer( { trailerId } ) {
	return (
		<iframe
			width="560"
			height="315"
			src={ `https://www.youtube.com/embed/${ trailerId }?modestbranding=1&iv_load_policy=3` }
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		/>
	);

	// disable picture-n-picture, "more videos" and all the other awful crap cluttering the player
	// maybe just find a better place to ebmed videos from. vimeo?
}

function TrailerControls( { previousNextHandler, currentPosition, currentTitle, maximumPosition, watchLaterHandler } ) {
	return (
		<nav className="trailer-controls">
			<button
				disabled={ currentPosition === 0 }
				onClick={ () => previousNextHandler( 'previous' ) }
			>
				Previous
			</button>

			<button onClick={ () => watchLaterHandler( currentTitle ) }>
				Add to Watch Later
			</button>

			<button
				disabled={ currentPosition === maximumPosition }
				onClick={ () => previousNextHandler( 'next' ) }
			>
				Next
			</button>
		</nav>
	);
}

export default TrailerExplorer;
