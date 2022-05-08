import Navigation from '../Navigation';
import Logo from '../Logo';
import s from './AppBar.module.css';

export default function AppBar() {
  return (
   
    <header className={s.header}>
      <div className={s.headerContainer}>
        <Logo/>
        <Navigation />
      </div>
    </header>
  );
}