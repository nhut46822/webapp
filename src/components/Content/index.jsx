import React from 'react';
import PropTypes from 'prop-types';
import Images from '../../assets/images/imgs';

const arrNumber = [1, 2, 3, 4, 5];

function Content({ isActive, productList, title }) {
	const newProductList = productList.filter(
		(product) => product.category === title
	);
	return (
		<div className="content">
			{newProductList.map((product, index) => (
				<div className="content__item" key={index}>
					<img src={product.image} className="item__img" alt="" />
					{product.title && (
						<div className="item__info">
							<p>{product.title}</p>
							<i className="fa-solid fa-angle-right item__icon"></i>
						</div>
					)}
				</div>
			))}
		</div>
	);
}

Content.propTypes = {};

export default Content;
