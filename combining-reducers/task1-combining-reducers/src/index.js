import store from './store';
import { decrement, increment, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';


store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(updateUser(76, { name: "Anna" }));
store.dispatch(deleteUser(76));
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());