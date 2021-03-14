import React from 'react';
import { clamp } from 'lodash';

class TrailerExplorer extends React.Component {
	constructor( props ) {
		super( props );

		this.state = { current: 0 };
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
		const { trailers } = this.props;
		const { current } = this.state;

		return (
			<main className="trailer-explorer">
				<Trailer
					trailerId={ trailers[ current ].trailerId }
				/>

				<TrailerControls
					current={ current }
					maximum={ trailers.length - 1 }
					clickHandler={ this.newTrailer }
				/>
			</main>
		);
	}
}

function Trailer( props ) {
	const { trailerId } = props;

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

	// disable picture-n-picture, "more videos" and all the other awful crap cluttering the screen
	// maybe just find a better place to ebmed videos from. vimeo?
}

function TrailerControls( props ) {
	const { clickHandler, current, maximum } = props;

	return (
		<nav className="trailer-controls">
			<button
				disabled={ current === 0 }
				onClick={ () => clickHandler( 'previous' ) }
			>
				Previous
			</button>

			<button>Add to Watch Later</button>

			<button
				disabled={ current === maximum }
				onClick={ () => clickHandler( 'next' ) }
			>
				Next
			</button>
		</nav>
	);
}

export default TrailerExplorer;
