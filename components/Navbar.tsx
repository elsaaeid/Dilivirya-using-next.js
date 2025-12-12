  // Notification button handler
  const handleNotification = () => {
    alert('You have 3 new notifications!');
  };
import React, { useRef } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HiBars3BottomRight } from "react-icons/hi2";


export const Navbar = ({ onMenuToggle }) => {
  // Refs for input and ul
  const inputRef = useRef<HTMLInputElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  // Search filter function with 'No results found'
  const filter = () => {
    const input = inputRef.current;
    const ul = ulRef.current;
    if (!input || !ul) return;
    const ulStyle = ul.style;
    if (!input.value) {
      ulStyle.display = 'none';
      return;
    } else {
      ulStyle.display = 'block';
    }
    const filter = input.value.toUpperCase();
    const li = ul.getElementsByTagName('li');
    let anyVisible = false;
    for (let i = 0; i < li.length; i++) {
      const a = li[i].getElementsByTagName('a')[0];
      if (!a) {
        li[i].style.display = 'none';
        continue;
      }
      const txtValue = a.textContent || a.innerText || '';
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
        anyVisible = true;
      } else {
        li[i].style.display = 'none';
      }
    }
    // Handle 'No results found' message
    let noResult = ul.querySelector('.no-results');
    if (!anyVisible) {
      if (!noResult) {
        noResult = document.createElement('li');
        noResult.className = 'no-results';
        noResult.textContent = 'No results found';
        ul.appendChild(noResult);
      }
    } else {
      if (noResult) {
        ul.removeChild(noResult);
      }
    }
  };

  return (
    <nav id="navbar" className="navbar w-full">
      <div className="top-nav w-full flex flex-row justify-content-between align-items-center d-sm-flex d-md-none d-lg-none d-xl-none d-xxl-none">
        <span className="navbar-brand mb-0 h1">
          <Image src="/assets/images/logo.png" alt="logo" width={40} height={40} />
        </span>
        <a className="btn btn-gold" role="button" id="menu-toggle" onClick={onMenuToggle}><HiBars3BottomRight /></a>
      </div>
      <div className="nav-main w-full flex flex-row justify-content-between align-items-center">
        <div className="search-container w-50">
          <div className="input-group mb-3">
            <button className="btn btn-lavender" type="button" id="button-search"></button>
            <input
              type="text"
              onKeyUp={filter}
              className="form-control"
              id="myInput"
              placeholder="Search ..."
              aria-label=""
              aria-describedby="button-search"
              ref={inputRef}
            />
          </div>
          <div className='search-content'>
            <ul id="myUL" ref={ulRef}>
              <li><a href="#">Adele</a></li>
              <li><a href="#">Agnes</a></li>
              <li><a href="#">Billy</a></li>
              <li><a href="#">Bob</a></li>
              <li><a href="#">Calvin</a></li>
              <li><a href="#">Christina</a></li>
              <li><a href="#">Cindy</a></li>
            </ul>
          </div>
        </div>
        <div className="nav-group mb-3 d-flex">
          <div className="user-menu">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0 user-image">
                <Image src="/assets/images/users/user.png" alt="user image" width={40} height={40} />
              </div>
              <div className="flex-grow-1 mx-1">
                <span className="user-name">User</span>
              </div>
            </div>
          </div>
          <button className="btn btn-gold" type="button" id="button-notification" onClick={handleNotification}>
            <span className="bg-danger bill">3</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
