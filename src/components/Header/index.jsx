import React from 'react';
import PropTypes from 'prop-types';

function Header({ isActive, handleTitleChange, categories }) {
	return (
		<div className="header">
			{categories.map((category, index) => (
				<p
					key={category}
					className={`header__item ${
						isActive === index ? 'active' : ''
					}`}
					onClick={() => handleTitleChange(category, index)}
				>
					<strong>{category}</strong>
				</p>
			))}
		</div>
	);
}

Header.propTypes = {};

export default Header;
