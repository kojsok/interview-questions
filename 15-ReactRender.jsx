Как часто происходит рендер в React?

Первоначальный рендеринг
Когда компонент впервые добавляется в DOM, происходит его рендеринг. Это единственный раз, когда компонент рендерится в процессе монтирования.

function App() {
  return <MyComponent />;
}


Обновление состояния
Когда состояние компонента изменяется, React вызывает рендеринг компонента. Это позволяет компоненту отобразить новые данные.

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}


Обновление пропсов
Если родительский компонент передаёт новые пропсы, дочерний компонент будет ререндериться с новыми данными.

function ParentComponent() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <button onClick={() => setValue(value + 1)}>Change Value</button>
      <ChildComponent value={value} />
    </div>
  );
}

function ChildComponent({ value }) {
  return <p>{value}</p>;
}


Обновление контекста
Когда значение контекста изменяется, все компоненты, использующие этот контекст, будут ререндериться.

const MyContext = React.createContext();

function App() {
  const [value, setValue] = useState('initial');

  return (
    <MyContext.Provider value={value}>
      <button onClick={() => setValue('updated')}>Update Context</button>
      <MyComponent />
    </MyContext.Provider>
  );
}

function MyComponent() {
  const contextValue = useContext(MyContext);
  return <p>{contextValue}</p>;
}


Обновление при изменении ключа
Если ключ компонента изменяется, React удаляет старый компонент и добавляет новый, вызывая рендеринг нового компонента.

function App() {
  const [items, setItems] = useState([1, 2, 3]);

  return (
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={() => setItems([4, 5, 6])}>Change Items</button>
    </ul>
  );
}


Чтобы уменьшить количество ненужных рендеров, можно использовать:

 - PureComponent и React.memo для функциональных компонентов.
 - shouldComponentUpdate для классовых компонентов.
 - useMemo и useCallback для мемоизации значений и функций в функциональных компонентах.
