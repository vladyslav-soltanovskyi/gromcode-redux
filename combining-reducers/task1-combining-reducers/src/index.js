import store from './store';
import { decrement, increment } from './counter.actions';
import { addUser, deleteUser } from './users.actions';


store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(deleteUser(76));
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());