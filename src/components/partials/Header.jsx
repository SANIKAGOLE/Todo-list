import React from 'react'
import { Link } from 'react-router-dom';

function Header()
{
  return(
  <header>
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TO-DO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <Link class="nav-link active" to="/">Home
            <span class="visually-hidden">(current)</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/login">Login
          <span class="visually-hidden">(current)</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/register">Register
          <span class="visually-hidden">(current)</span>
          </Link>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="#">Logout
          <span class="visually-hidden">(current)</span>

          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search"/>
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</header>
      );

}

export default Header;
