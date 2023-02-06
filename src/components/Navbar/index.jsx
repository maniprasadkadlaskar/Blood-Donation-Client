import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login } from '../../redux';

const PageNavbar = () => {

  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(login());
    localStorage.removeItem("access_token");
  }
    
  return (
    <Navbar bg="danger" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Blood Donation</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="text-center ms-auto space-between me-lg-5"
            style={{ maxHeight: '800px' }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/donate">Donate</NavLink>
            {!user ? <NavLink to="/login">Login</NavLink> : ''}
            {user ? <NavLink to="/">{user.decodedToken.email}</NavLink> : ''}
            {user ? <NavLink className="" onClick={logout}>Logout</NavLink> : ''}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNavbar;