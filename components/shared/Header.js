import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';


const BsNavLink = props => {
  const { href, title } = props;
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  )
}

const BsNavBrand = () =>
  <Link href="/">
    <a className="navbar-brand port-navbar-brand">Natalia</a>
  </Link>

const LoginLink = _ =>  <a className="nav-link port-navbar-link clickable" href="/api/auth/login">Login</a>

const LogoutLink = _ => <a className="nav-link port-navbar-link clickable" href="/api/auth/logout">Logout</a>

const Header = ({user, loading}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="transparent"
        dark
        expand="md">
        <BsNavBrand/>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/" title="Home"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="About"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/portfolios" title="Portfolios"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/blogs" title="Blogs"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="Cv"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/secret" title="secret"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/secretssr" title="secretssr"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyAdmin" title="Admin"/>
            </NavItem>
          </Nav>
          <Nav navbar>
            {
              !loading &&
              <>
              {
                user &&
                <NavItem className="port-navbar-item">
                  <LogoutLink />
                </NavItem>            
              }
              {
                !user &&
                <NavItem className="port-navbar-item">
                  <LoginLink />
                </NavItem>
              }
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;