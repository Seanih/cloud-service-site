import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className='navbar'>
			<div className='container flex'>
				<h1 className='logo'>Cold Clouds</h1>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/features'>Features</Link>
						</li>
						<li>
							<Link to='/signup'>Join</Link>
						</li>
						<li>
							<Link to='/docs'>Docs</Link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Nav;
