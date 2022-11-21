import s from './FriendList.module.css';
import PropTypes from 'prop-types';
import defaultAvatar from './defaultAvatar.jpg';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendlist}>
      {friends.map(({ avatar = defaultAvatar, name, isOnline, id }) => (
        <li key={id} className={s.item}>
          <span className={isOnline ? s.isOnline : s.isOffline}></span>
          <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
          <p className={s.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
