import store from './store';
import { addUser, deleteUser } from './users.actions';

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(deleteUser(76));

store.subscribe(() => {
  console.log(store.getState());
});