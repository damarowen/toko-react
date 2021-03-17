import './checkout.styles.scss'

import { connect } from 'react-redux';

//*reselect library
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'


import StripeCheckoutButton from '../../components/StripeButton/StripeButton'

const CheckoutPage = ({ cartItems, total }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(y => <CheckoutItem key={y.id} barang={y} />)
            }
            <div className='total'>
                <span>TOTAL: ${total}</span>
            </div>
            <div className='test-warning'>
     *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 02/22 - CVV: 123
          </div>
            <StripeCheckoutButton price={total} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)
