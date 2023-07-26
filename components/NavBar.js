import Link from 'next/link';
import React from 'react';
import {useRouter} from 'next/router'
const NavBar = () => {
    const router = useRouter();

    const isActive = (path) => {
      if (path === router.pathname) {
        return "active";
      } else {
        return "";
      }
    };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link href='/' legacyBehavior>
        <a className="navbar-brand" href="#">SwytShop</a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end"  id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
            <Link href='/cart' legacyBehavior>
              <a className={`nav-link ${isActive('/cart')}`}  aria-current="page">  <i className="fas fa-shopping-cart position-relative" aria-hidden="true">
        </i>Cart</a>
            </Link>
            </li>
            <li className="nav-item">
            <Link href='/signin' legacyBehavior>
              <a className={`nav-link ${isActive('/signin')}`} aria-current="page" >Sign In</a>
            </Link>
            </li>
           {/*  <li className="nav-item dropdown">
            <Link href='/' legacyBehavior>
              <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                User Name
              </a>
            </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Profile</a>
                <a className="dropdown-item" href="#">Logout</a>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
