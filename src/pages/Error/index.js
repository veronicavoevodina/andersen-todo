import { Link } from 'react-router-dom';
import img from '../../assets/images/not-found.svg';
import style from './Error.module.css';

const Error = () => {
  return (
    <div className={style.main}>
      <div>
        <img src={img} alt="not found" className={style.img} />
        <h3 className={style.h3}>Ohh! Page Not Found</h3>
        <p className={style.text}>
          We can not seem to find the page you are looking for
        </p>
        <Link to="/" className={style.link}>
          back home
        </Link>
      </div>
    </div>
  );
};
export default Error;
