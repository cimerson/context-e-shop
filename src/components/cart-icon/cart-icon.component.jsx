// import React from 'react';
import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import CartContext from '../../contexts/cart/cart.context';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

// const CartIcon = ({ toggleCartHidden, itemCount }) => (
const CartIcon = ({ itemCount }) => {

    const { toggleHidden } = useContext(CartContext);

    return (
        <div className='cart-icon' onClick={toggleHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
};

// const mapDispatchToProps = dispatch => ({
//     toggleCartHidden: () => dispatch(toggleCartHidden())
// });

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(CartIcon);
