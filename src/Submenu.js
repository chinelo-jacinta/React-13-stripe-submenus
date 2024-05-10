import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';
const Submenu = () => {
  const {
    isSubMenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const element = useRef(null);
  const [column, setColumn] = useState('col-2');
  useEffect(() => {
    setColumn(`col-2`);
    const { center, bottom } = location;
    element.current.style.left = `${center}px`;
    element.current.style.top = `${bottom}px`;
    if (links.length === 3) {
      return setColumn(`col-3`);
    }
    if (links.length > 3) {
      return setColumn(`col-4`);
    }
  }, [location, links]);
  return (
    <aside
      className={`${isSubMenuOpen ? `submenu show` : `submenu`}`}
      ref={element}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${column}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
