import React from 'react';

// Sample menu data
const menuItems = [
  { name: 'Manager Users', link: '/ManagerUsers' },
  { name: 'Manager Products', link: '/ManagerProducts' },
];

const Menu = () => {
  return (
    <nav style={styles.menu}>
      <ul style={styles.list}>
        {menuItems.map((item, index) => (
          <li key={index} style={styles.listItem}>
            <a href={item.link} style={styles.link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const styles = {
  menu: {
    width: '200px',
    backgroundColor: 'white',
    padding: '10px',
    border: '1px solid black',
    borderRadius: '5px',
    margin: '20px', /* magin right */
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    margin: '10px 0',
    float:'left',
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 600,
  },
};

export default Menu;