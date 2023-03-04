import DeathStar from '../../assets/images/deathStar.png'
import { Link } from 'react-router-dom';
import css from './PageNotFound.module.scss'
const PageNotFound = () => {
  return (
    <main className={css.mainNotFound}>
      <span>404</span>
      <img src={DeathStar} draggable={false} alt="" />
      <Link to="/">Return</Link>
    </main>
  );
}

export default PageNotFound;
