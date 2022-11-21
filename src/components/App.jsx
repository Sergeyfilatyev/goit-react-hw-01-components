import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import user from './Profile/user.json';
import stats from './Statistics/data.json';
import friends from './FriendList/friends.json';
console.log(user);
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="upload stats" stats={stats} />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
    </>
  );
};
