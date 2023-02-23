import { Container } from '../Container/Container';
import style from './Navigation.module.css';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { categoryRequestAsync, changeCategory } from '../../store/category/categorySlice';
import { useEffect } from 'react';
import { API_URL } from '../../const';

export const Navigation = () => {

  const { category, activeCategory } = useSelector(state => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryRequestAsync())
  }, [])

  return (
    <nav className={style.navigation}>
      <Container className={style.container}>
        <ul className={style.list}>
          {category.map((item, i) => (
            <li key={item.title} className={style.item}>
              <button
                className={classNames(
                  style.button,
                  activeCategory === i ? style.button_active : '')}
                style={{ backgroundImage: `url(${API_URL}/${item.image})` }}
                onClick={() => {
                  dispatch(changeCategory({ indexCategory: i }))
                }}
              >
                {item.rus}
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  )
}