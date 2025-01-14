import { useState } from "react";
import "./style.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayChildren, setDisplayChildren] = useState(false);

  const handleExpand = () => {
    setDisplayChildren(!displayChildren);
  };

  const hasChildren = item.children && item.children.length;

  return (
    <li className="tree-menu-item">
      <div
        onClick={handleExpand}
        className={`menu-item-label ${hasChildren ? "clickable" : ""}`}
      >
        <p>{item.label}</p>
        {hasChildren ? (
          <span>
            {displayChildren ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>

      {displayChildren && item && item.children && item.children.length ? (
        <MenuList items={item.children} />
      ) : null}
    </li>
  );
};

const MenuList = ({ items }) => {
  return (
    <ul className="tree-menu-list">
      {items && items.length
        ? items.map((item) => <MenuItem item={item} />)
        : null}
    </ul>
  );
};

const TreeView = ({ items = [] }) => {
  return (
    <div className="tree-view-container">
      <h1>Tree Nav</h1>
      <MenuList items={items} />
    </div>
  );
};

export default TreeView;
