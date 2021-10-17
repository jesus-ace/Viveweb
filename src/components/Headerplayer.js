import React from 'react';

class Headerplayer extends React.Component{
	render(){
		return(
			<header className="vh-100">
				<div className="container">
					<h1 className="text-center display-4 fw-bolder">Reciente</h1>
					<div className="text-center m-5">
						<div className="embed-responsive embed-responsive-21by9 shadow-lg">
							<video id="video"
           						width="640"
           						poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
          						controls autoplay 			
           						className=" embed-responsive-item rounded video-js vjs-default-skin" >
								<source src="http://172.16.144.134:8080/live/stream.m3u8" type="application/x-mpegURL" />
							</video> 
						</div>
						
						<button
						className="carousel-control-prev"
						type="button"
						data-mdb-target="#carouselBasicExample"
						data-mdb-slide="prev"
						>
						<span className="fa-solid fa-caret-left fa-2x fa-beat text-color-main" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
						</button>
						<button
						className="carousel-control-next"
						type="button"
						data-mdb-target="#carouselBasicExample"
						data-mdb-slide="next"
						>
						<span className="fa-solid fa-caret-right fa-2x fa-beat text-color-main" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</header>
		);
	}
	
}

export default Headerplayer;