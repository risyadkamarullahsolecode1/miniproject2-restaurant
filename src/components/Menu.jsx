import React, { useState } from 'react';
import MenuList from './MenuList';
import AddMenuForm from './AddMenuForm';

let nextMenuId = 0;

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [editingMenu, setEditingMenu] = useState(null);

  const addMenu = (menu) => {
    setMenuItems([...menuItems, { ...menu, id: nextMenuId++ }]);
  };

  const updateMenu = (menu) => {
    setMenuItems(menuItems.map(item => (item.id === menu.id ? menu : item)));
    setEditingMenu(null); // Reset form
  };

  const editMenu = (menu) => {
    setEditingMenu(menu);
  };

  const deleteMenu = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <AddMenuForm
        key={editingMenu ? editingMenu.id : 'add-new-menu'}
        onSubmit={editingMenu ? updateMenu : addMenu}
        editingMenu={editingMenu}
      />
      <MenuList 
        menuItems={menuItems}
        onEdit={editMenu}
        onDelete={deleteMenu}
      />
    </div>
  );
}

export default Menu;
