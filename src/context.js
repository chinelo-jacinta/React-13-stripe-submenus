import React, { useState, useContext } from 'react';
import sublinks from './data';
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isSideBarOpen, setisSideBarOpen] = useState(false);
  const [isSubMenuOpen, setisSubMenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] });

  // console.log(location);
  const openSideBar = () => {
    setisSideBarOpen(true);
  };
  const closeSideBar = () => {
    setisSideBarOpen(false);
  };
  const openSubMenu = (texts, coordinates) => {
    const page = sublinks.find((link) => link.page === texts);
    console.log(page);
    setLocation(coordinates);
    setisSubMenuOpen(true);
    setPage(page);
  };
  const closeSubMenu = () => {
    setisSubMenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubMenuOpen,
        isSideBarOpen,
        openSubMenu,
        closeSideBar,
        openSideBar,
        closeSubMenu,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider };
