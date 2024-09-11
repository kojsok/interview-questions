В TypeScript есть несколько основных типов событий, которые часто используются с элементами <input> и <form>. Вот список этих типов:

1. ChangeEvent
Используется для событий изменения значения в элементах ввода, таких как <input>, <textarea>, и <select>.
Пример: ChangeEvent<HTMLInputElement>.
typescript
Копировать код
const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
};
2. FocusEvent
Используется для событий фокусировки и потери фокуса (focus и blur) в элементах формы.
Пример: FocusEvent<HTMLInputElement>.
typescript
Копировать код
const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    console.log("Input focused");
};
3. KeyboardEvent
Используется для событий клавиатуры, таких как нажатие, отпускание и удержание клавиш (keydown, keypress, keyup).
Пример: KeyboardEvent<HTMLInputElement>.
typescript
Копировать код
const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log(`Key pressed: ${e.key}`);
};
4. MouseEvent
Используется для событий мыши, таких как клик (click), двойной клик (dblclick), нажатие кнопки (mousedown), отпускание кнопки (mouseup), наведение (mouseover), уход курсора (mouseout).
Пример: MouseEvent<HTMLButtonElement>.
typescript
Копировать код
const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked");
};
5. SubmitEvent
Используется для обработки события отправки формы (submit).
Пример: FormEvent<HTMLFormElement>.
typescript
Копировать код
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
};
6. InputEvent
Используется для обработки ввода данных в элементы, такие как <input> и <textarea>. Это событие срабатывает при каждом изменении значения.
Пример: InputEvent<HTMLInputElement>.
typescript
Копировать код
const handleInput = (e: InputEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
};
7. DragEvent
Используется для обработки событий перетаскивания (drag and drop).
Пример: DragEvent<HTMLInputElement>.
typescript
Копировать код
const handleDrag = (e: DragEvent<HTMLInputElement>) => {
    console.log("Element being dragged");
};
Обобщенный пример:
typescript
Копировать код
import { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent, FormEvent, InputEvent, DragEvent } from 'react';

const handleChange = (e: ChangeEvent<HTMLInputElement>) => { /* handle change */ };
const handleFocus = (e: FocusEvent<HTMLInputElement>) => { /* handle focus */ };
const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => { /* handle key down */ };
const handleClick = (e: MouseEvent<HTMLButtonElement>) => { /* handle click */ };
const handleSubmit = (e: FormEvent<HTMLFormElement>) => { /* handle submit */ };
const handleInput = (e: InputEvent<HTMLInputElement>) => { /* handle input */ };
const handleDrag = (e: DragEvent<HTMLInputElement>) => { /* handle drag */ };
Эти типы позволяют точно определить события и их цели, что делает код более безопасным и предсказуемым в TypeScript.
