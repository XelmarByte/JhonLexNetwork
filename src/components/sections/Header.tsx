import ThemeSwitcher from "../byME/ThemeSwitcher";
import Icon from "../byME/Icon";


const Header = () => {
  return (
    <header className="p-4 bg-white-light dark:bg-primaryBackground-dark flex justify-between items-center">
      <div className="flex items-center space-x-4">
      <button className=" bg-white text-white rounded-sm" style={{backgroundColor: '#1976D2'}}>
        <Icon></Icon>
      </button>
      <input 
          type="text" 
          placeholder="Search..." 
          className="h-8 px-4 py-2  bg-primaryBackground-light dark:bg-imputBg-dark rounded-lg text-sm" 
        />
    </div>
    
    
    <div className="flex space-x-4 items-center">
      <div className="w-8 h-8 bg-red-500"></div>
  
      <ThemeSwitcher />
    </div>
    </header>
  );
};

export default Header;

