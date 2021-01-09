import React from 'react';
import node_pic from '../images/logos/node.png';
import python_pic from '../images/logos/python.png';
import csharp_pic from '../images/logos/csharp.png';
import ruby_pic from '../images/logos/ruby.png';
import php_pic from '../images/logos/php.png';
import scala_pic from '../images/logos/scala.png';
import clojure_pic from '../images/logos/clojure.png';

const Languages = () => {
	return (
		<section className='languages'>
			<h2 className='md text-center my-2'>Supported Languages</h2>
			<div className='container flex'>
				<div className='card'>
					<h4>Node.js</h4>
					<img src={node_pic} alt='node logo' />
				</div>
				<div className='card'>
					<h4>Python</h4>
					<img src={python_pic} alt='' />
				</div>
				<div className='card'>
					<h4>C#</h4>
					<img src={csharp_pic} alt='' />
				</div>
				<div className='card'>
					<h4>Ruby</h4>
					<img src={ruby_pic} alt='' />
				</div>
				<div className='card'>
					<h4>PHP</h4>
					<img src={php_pic} alt='' />
				</div>
				<div className='card'>
					<h4>Scala</h4>
					<img src={scala_pic} alt='' />
				</div>
				<div className='card'>
					<h4>Clojure</h4>
					<img src={clojure_pic} alt='' />
				</div>
			</div>
		</section>
	);
};

export default Languages;
