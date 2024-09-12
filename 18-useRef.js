📌 Зачем нужен ref? 

💬 Спрашивают в 3% собеседований 

В React ref (сокращение от reference) используется для доступа к DOM-элементам или компонентам напрямую. Он позволяет взаимодействовать с элементами, которые были созданы в процессе рендеринга, предоставляя механизм для манипуляции с ними, получения их размеров, положения или вызова методов у компонент. Это особенно полезно в ситуациях, когда необходимо выполнить операции, которые не могут быть выполнены исключительно через декларативный подход React.

🤔 Основные случаи использования `ref`:

➕ Доступ к DOM-элементам:

➕ Использование в сторонних библиотеках:

➕ Сохранение состояния вне дерева компонентов:

🤔 Примеры использования `ref`:

1️⃣ Доступ к DOM-элементам

Установка фокуса на элемент:
import React, { useRef, useEffect } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // Установить фокус на текстовое поле
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Установить фокус</button>
    </div>
  );
}

export default TextInputWithFocusButton;

2️⃣ Получение размеров элемента

Измерение элемента:
import React, { useRef, useEffect, useState } from 'react';

function MeasureDiv() {
  const divRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (divRef.current) {
      const { width, height } = divRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);

  return (
    <div>
      <div ref={divRef} style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}>
        Измеряемый элемент
      </div>
      <p>Ширина: {dimensions.width}px, Высота: {dimensions.height}px</p>
    </div>
  );
}

export default MeasureDiv;

3️⃣ Использование в классовых компонентах

Доступ к методам компонента:
import React, { Component } from 'react';

class CustomComponent extends Component {
  customMethod() {
    console.log('Метод компонента вызван');
  }

  render() {
    return <div>Custom Component</div>;
  }
}

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.customComponentRef = React.createRef();
  }

  handleClick = () => {
    this.customComponentRef.current.customMethod();
  };

  render() {
    return (
      <div>
        <CustomComponent ref={this.customComponentRef} />
        <button onClick={this.handleClick}>Вызвать метод компонента</button>
      </div>
    );
  }
}

export default ParentComponent;

🤔 Важно помнить

  ➕ Прямое управление DOM может нарушить декларативный подход React, поэтому его следует использовать только тогда, когда это действительно необходимо.

  ➕ Когда необходимо использовать сторонние библиотеки, которые требуют прямого доступа к DOM-элементам.

  ➕ Состояние приложения и его логика должны по возможности управляться через состояния и пропсы React. ref следует использовать для случаев, которые не могут быть решены этим способом.

🤔 Заключение

ref в React предоставляет способ прямого доступа к DOM-элементам или компонентам. Он полезен для манипуляции с элементами, интеграции со сторонними библиотеками и сохранения информации вне состояния компонента. Тем не менее, ref следует использовать с осторожностью, чтобы не нарушить декларативный подход React.

Коротко: ref в React используется для доступа к DOM-элементам или компонентам напрямую, что позволяет выполнять операции, которые не могут быть выполнены через декларативный подход React.
