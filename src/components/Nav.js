import React from 'react';

const Nav = () => {
	return (
		<div className='navbar'>
			<div className='container flex'>
                <h1 className='logo'>Cold Clouds</h1>
                <nav>
                    <ul>
                        <li>
                            <a href='index component'>Home</a>
                        </li>
                        <li>
                            <a href='features component'>Features</a>
                        </li>
                        <li>
                            <a href='docs component'>Docs</a>
                        </li>
                    </ul>
                </nav>
            </div>
		</div>
	);
};

export default Nav;
