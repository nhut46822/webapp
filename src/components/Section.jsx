import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';

import './Scss/section.scss';

import productList, { categories } from './data';

function Section(props) {
	const [isActive, setIsActive] = useState(0);
	const [title, setTitle] = useState('All');

	const handleTitleChange = (category, index) => {
		setIsActive(index);
		setTitle(category);
	};

	return (
		<div className="section">
			<Header
				categories={categories}
				isActive={isActive}
				handleTitleChange={handleTitleChange}
			/>
			<Content
				title={title}
				isActive={isActive}
				productList={productList}
			/>
		</div>
	);
}

Section.propTypes = {};

export default Section;
