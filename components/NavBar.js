import React, { useContext } from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {DataContext} from '../store/GlobalState'
import Cookie from 'js-cookie'
import { FaShoppingCart, FaUser } from 'react-icons/fa';

function NavBar() {
    const router = useRouter()
    const {state, dispatch} = useContext(DataContext)
    const { auth, cart } = state


    const isActive = (r) => {
        if(r === router.pathname){
            return " active"
        }else{
            return ""
        }
    }

 
 /*    const handleLogout = () => {
        Cookie.remove('refreshtoken', {path: 'api/auth/accessToken'})
        localStorage.removeItem('firstLogin')
        dispatch({ type: 'AUTH', payload: {} })
        dispatch({ type: 'NOTIFY', payload: {success: 'Logged out!'} })
        return router.push('/')
        localStorage.clear();
    } */
    const handleLogout = () => {
        Cookie.remove('refreshtoken', { path: 'api/auth/accessToken' });
        localStorage.removeItem('firstLogin');
        localStorage.clear();
        dispatch({ type: 'AUTH', payload: {} });
        dispatch({ type: 'NOTIFY', payload: { success: 'Logged out!' } });
        router.push('/');
        window.location.reload();
      };
      

    const loggedRouter = () => {
        return(
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={auth.user.avatar} alt={auth.user.avatar} 
                    style={{
                        borderRadius: '50%', width: '30px', height: '30px',
                        transform: 'translateY(-3px)', marginRight: '3px'
                    }} /> {auth.user.name}
                </a>

                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link href="/profile" passHref legacyBehavior>
                        <a className="dropdown-item">Profile</a>
                    </Link>
                   
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                </div>
            </li>
        )
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)' }}>
        <Link href="/" passHref legacyBehavior>
          <a className="navbar-brand">Swytshop</a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav p-1">
            <li className="nav-item">
              <Link href="/cart" passHref legacyBehavior>
                <a className={"nav-link" + isActive('/cart')}>
                  <FaShoppingCart className="mr-1" /> 
                  <i className="fas fa-shopping-cart position-relative" aria-hidden="true">
                    <span className="position-absolute" style={{
                      padding: '3px 6px',
                      background: '#ed143dc2',
                      borderRadius: '50%',
                      top: '-10px',
                      right: '-10px',
                      color: 'white',
                      fontSize: '14px'
                    }}>
                      {cart.length}
                    </span>
                  </i> 
                </a>
              </Link>
            </li>
            {
              Object.keys(auth).length === 0 
              ? <>
                  <li className="nav-item">
                    <Link href="/signin" passHref legacyBehavior>
                      <a className={"nav-link" + isActive('/signin')}>
                        <FaUser className="mr-1" /> 
                        <i className="fas fa-user" aria-hidden="true"></i> Sign in
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about" passHref legacyBehavior>
                      <a className={"nav-link" + isActive('/about')}>About</a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact" passHref legacyBehavior>
                      <a className={"nav-link" + isActive('/contact')}>Contact</a>
                    </Link>
                  </li>
                </>
              : loggedRouter()
            }
          </ul>
        </div>
      </nav>
    )
}

export default NavBar
