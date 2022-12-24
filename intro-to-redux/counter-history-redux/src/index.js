import { store, decrement, increment, reset } from './store';
import './index.scss';

const counterElem = document.querySelector('.counter__result');
const counterBtnsElem = document.querySelectorAll('.counter__button');
const actions = {
  decrement,
  increment,
  reset
}

const actionHandler = (e) => {
  const { action } = e.target.dataset;
  actions[action] && store.dispatch(actions[action]())
}

store.subscribe(() => {
  const { counter, history } = store.getState();
  const textResult = history.join('') + ` = ${counter}`;
  counterElem.textContent = history.length > 0 ? textResult : '';
});

counterBtnsElem.forEach(btn => btn.addEventListener('click', actionHandler));