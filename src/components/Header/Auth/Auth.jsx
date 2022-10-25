import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as Login} from './img/login.svg';
import {urlAuth} from '../../api/auth';
import {Text} from '../../../UI/Text';
import {useEffect, useState} from 'react';
import {URL_API} from '../../api/const';

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [loqoutBtn, setLoqoutBtn] = useState(false);
  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.error(err);
        setAuth({});
        delToken();
      });
  }, [token]);

  const handleShowLoqout = () => {
    setLoqoutBtn(!loqoutBtn);
  };
  const handleDelToken = () => {
    delToken();
    setAuth({});
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <button className={style.btn}>
          <img
            className={style.img}
            src={auth.img}
            title={auth.name}
            alt={`Аватар ${auth.name}`}
            onClick={handleShowLoqout}
          />
          {loqoutBtn && (
            <Text className={style.logout} onClick={handleDelToken}>Выйти</Text>
          )}
        </button>
        ) : (
          <Text className={style.authLink} As='a' href={urlAuth}>
            <Login width={50} height={50} />
          </Text>
        )
      }
    </div>
  );
};
Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
