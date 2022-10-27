import style from './Post.module.css';
// import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import formatDate from '../../../../utils/formatDate';
import Content from './Content';
import Rating from './Rating';
import {Thumbnail} from './Thumbnail/Thumbnail';
import {ReactComponent as Delete} from './img/delete.svg';

export const Post = ({postData}) => {
  const {title, author, ups, date, thumbnail} = postData;
  return (
    <li className={style.post}>
      <Thumbnail thumbnail={thumbnail}/>

      <Content title={title} author={author} />

      <Rating ups={ups} />

      <button className={style.delete}><Delete /></button>

      <time className={style.date} dateTime={date}>{formatDate(date)}</time>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
