import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSideBarOpen, closeSideBar } = useGlobalContext();
  return (
    <aside
      className={`${
        isSideBarOpen ? `sidebar-wrapper show` : `slidebar-wrapper`
      }`}
    >
      <div className={`${isSideBarOpen ? 'sidebar shows' : 'sidebar'}`}>
        <button className='close-btn' onClick={closeSideBar}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item, index) => {
            const { page, links } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a href={url} key={index}>
                        {icon} {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
