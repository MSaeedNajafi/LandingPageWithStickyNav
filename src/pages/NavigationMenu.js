/* eslint-disable react/react-in-jsx-scope */

import { Outlet,  NavLink } from "react-router-dom";
import logo from '../logo.svg';

const NavigationMenu = () => {
  const activeStyles = ({isActive}) => (isActive ? {...styles.activeClass} : styles.notActiveClass);  
  return (
    <>
      <nav style={styles.navMenu}>
        <ul style={{...styles.navigationMenuList, ...styles.bgHeaderColor}}>
          <li>
            <img src={logo} width={100} height={100} />
          </li>
          <li>
            <NavLink to="/" style={activeStyles}>Home</NavLink>          
          </li>
          <li>
            <NavLink to="/blogs" style={activeStyles}>Blogs</NavLink >
          </li>
          <li>
            <NavLink to="/contact" style={activeStyles}>Contact</NavLink >
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

const styles = {
  navMenu: { 
    backgroundColor: 'red',
    // padding: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    // bottom: 0,
    width: '100%',
    backgroundColor: 'red', 
    borderBottom: '1px solid black',
  },
  navigationMenuList: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    listStyleType: 'none',   
  },
  activeClass: {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white',
    backgroundColor: 'blue',
    padding: 15,
    border: '1px solid black'
  },
  notActiveClass: {
    textDecoration: 'none',
    color: 'black',
    padding: 15,
    backgroundColor: 'white',
    border: '1px solid black'
  },
  bgHeaderColor : {
    // backgroundColor: 'white',
  }
}

export default NavigationMenu;
