Redux — это библиотека для управления состоянием приложений, часто используемая с библиотекой React, но она может быть использована и с другими библиотеками или фреймворками JavaScript. Redux предоставляет централизованное хранилище (store) для всех состояний приложения, что упрощает управление и отладку состояний.

🤔 Основные концепции

1️⃣ Хранилище (store):

➕ Является объектом, который содержит все состояние приложения. В приложении может быть только одно хранилище.

2️⃣ Действия (actions):

➕ Действия — это объекты, которые отправляются в хранилище для изменения состояния. Они должны иметь тип (type), который описывает тип действия, и могут содержать дополнительные данные (payload).

3️⃣ Редюсеры (reducers):

➕ Это чистые функции, которые принимают текущее состояние и действие в качестве аргументов и возвращают новое состояние. Они описывают, как состояние приложения изменяется в ответ на действия.

4️⃣ Диспетчеры (dispatch):

➕ Отправляют действия в хранилище. Это единственный способ изменить состояние в Redux.

5️⃣ Подписки (subscriptions):

➕ Позволяют компонентам подписываться на изменения состояния в хранилище и реагировать на эти изменения.

🤔 Пример

Для начала установим необходимые пакеты:
npm install redux react-redux

Создание действий (actions)
// actions.js
export const increment = () => ({
  type: 'INCREMENT',
});

export const decrement = () => ({
  type: 'DECREMENT',
});

Создание редюсера (reducer)
// reducer.js
const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;

Создание хранилища (store)
// store.js
import { createStore } from 'redux';
import counterReducer from './reducer';

const store = createStore(counterReducer);

export default store;


Подключение Redux к React
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


Использование состояния и действий
// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

const App = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;


🤔 Преимущества

1️⃣ Централизованное управление состоянием:

➕ Все состояние приложения находится в одном месте, что упрощает управление и отладку.

2️⃣ Предсказуемость:

➕ Поскольку редюсеры являются чистыми функциями, их поведение предсказуемо, что облегчает тестирование и отладку.

3️⃣ Легкость тестирования:

➕ Действия и редюсеры легко тестировать из-за их чистоты и изолированности.

4️⃣ Возможность временной петли (time travel):

➕ Инструменты разработки Redux позволяют перемещаться по истории состояний, что облегчает отладку.

Redux — это библиотека для управления состоянием приложений, предоставляющая централизованное хранилище для всех состояний. Основные концепции Redux включают хранилище (store), действия (actions), редюсеры (reducers), диспетчеры (dispatch) и подписки (subscriptions). Redux часто используется с React, но может быть применен и с другими библиотеками.
