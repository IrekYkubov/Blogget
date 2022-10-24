import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 34,
      date: '2022-01-21T04:45:00.000Z',
      id: '768',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 21,
      date: '2022-01-31T00:00:00.000Z',
      id: '568',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 22,
      date: '2022-03-10T08:00:00.000Z',
      id: '893',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 26,
      date: '2022-02-24T09:45:00.000Z',
      id: '348',
    },
  ];
  return (
    <ul className={style.list}>
      {postsData.map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
    </ul>
  );
};
