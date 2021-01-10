import React from 'react';
import { Link } from 'react-router-dom';

const FooterArea = () => {
	return (
		<footer className='footer bg-dark py-2'>
			<div className='container grid grid-3'>
				<div>
					<h1>Cold Clouds</h1>
					<p>Copyright &copy; 2020</p>
				</div>

				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/signup'>Sign Up</Link>
						</li>
					</ul>
				</nav>
				<div className='social'>
					<a href='random.html'>
						<i className='fab fa-github fa-2x'></i>
					</a>
					<a href='random.html'>
						<i className='fab fa-facebook fa-2x'></i>
					</a>
					<a href='random.html'>
						<i className='fab fa-instagram fa-2x'></i>
					</a>
					<a href='random.html'>
						<i className='fab fa-twitter fa-2x'></i>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default FooterArea;
