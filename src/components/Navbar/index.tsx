import logo from '../../assets/images/logo.png';
import style from './Navbar.module.css';
import { useAppSelector } from '../../store/store';
import { ITask } from 'types';

export default function Navbar() {
  const { todo } = useAppSelector((store) => store.rootReducer.todoReducer);
  const { user } = useAppSelector((store) => store.rootReducer.userReducer);

  const count = () => {
    const num = todo.filter((el: ITask) => el.isActive).length;
    let answer = `${num} active tasks`;
    switch (num) {
      case 0:
        answer = 'no active tasks';
        break;
      case 1:
        answer = '1 active task';
        break;
      default:
        return answer;
    }
    return answer;
  };

  return (
    <nav>
      <div className={style.center}>
        <div className={style.header}>
          <img src={logo} className={style.logo} alt="logo" />
          {user && (
            <p>
              <span className={style.item}>Hello, {user}</span>
              <span className={style.counter}>{count()}</span>
            </p>
          )}
        </div>
      </div>
    </nav>
  );
}
