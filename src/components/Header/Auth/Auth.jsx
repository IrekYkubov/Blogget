import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as Login} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useState, useContext} from 'react';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';


export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const {auth, clearAuth} = useContext(authContext);
  const [loqoutBtn, setLoqoutBtn] = useState(false);
  const handleShowLoqout = () => {
    setLoqoutBtn(!loqoutBtn);
  };
  const handleDelToken = () => {
    delToken();
    clearAuth();
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
          {loqoutBtn === true && (
            <Text className={style.logout} onClick={handleDelToken}>Выйти</Text>
          )}
        </button>
        ) : (
          <Text className={style.authLink} As='a' href={urlAuth}>
            <Login className={style.svg} width={50} height={50} />
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
