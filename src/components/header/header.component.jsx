import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'

const Header = ({ currentUser })=>(
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/contact' className='option'>CONTACT</Link>
            {
                currentUser ?
                <div className='option' onClick={()=>(auth.signOut())}>SIGN OUT</div>  //auth.signOut() needs to be in an anonymous function call not directly called
                :
                <Link to='/signin' className='option'>SIGN IN</Link>
            }
        </div>
    </div>
)

const mapStatetoProps = state=>({
    currentUser: state.user.currentUser
});
export default connect(mapStatetoProps)(Header);