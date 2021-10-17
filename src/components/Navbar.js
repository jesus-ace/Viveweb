import React from 'react';

class Navbar extends React.Component{
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-main shadow-lg">
				<div className="container-fluid">
					<a className="navbar-brand text-white ms-4" href="#">Vive<strong class="fw-bold">Streaming</strong></a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
						<div className="bg-light-color rounded">
							<span className="fas fa-bars text-color-main p-2"></span>
						</div>
					</button>
					<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						</ul>
						<form className="d-flex">
							<input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
							<button className="btn btn-main" type="submit">Buscar</button>
						</form>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;