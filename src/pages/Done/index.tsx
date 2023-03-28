import { useAppSelector } from '../../store/store';
import style from '../Todo/Todo.module.css';
import { MdDownloadDone } from 'react-icons/md';

const Done = () => {
  const { todo } = useAppSelector((state) => state.rootReducer.todoReducer);
  return (
    <section className={style.done}>
      <div className={style.list}>
        {todo
          .filter((el) => !el.isActive)
          .map((item) => {
            const { id, title } = item;
            return (
              <article className={style.item} key={id}>
                <p className={style.title}>{title}</p>
                <div className={style.svg}>
                  <MdDownloadDone className={style.icon} />
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default Done;
