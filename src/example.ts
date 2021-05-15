// concat('Hello ', 'World') => Hello World

type TypeFn<T> = (first: T, second: T) => T;

const concat: TypeFn<string> = (first, second) => {
  return first + second;
};

concat('Hello ', 'World');

// interface

interface HomeTaskData {
  howIDoIt: string;
  someArray: (string | number)[]; // использование алиаса тут кажется излишним
}

interface MyHomeTask extends HomeTaskData {
  withData: HomeTaskData[];
}

const myHomeTask: MyHomeTask = {
  howIDoIt: 'I Do It Wel',
  someArray: ['string one', 'string two', 42],
  withData: [{ howIDoIt: 'I Do It Wel', someArray: ['string one', 23] }],
};

const returnFunc = () => {
  return myHomeTask;
};

returnFunc(); // чтобы линтер не ругался

// Generic

interface MyArray<T> {
  [N: number]: T;

  map<U>(fn: (el: T) => U): U[];
  reduce<U>(fn: (previous: U, current: T, index: number, array: T[]) => T, init: U): U;
}

const tsArr: MyArray<number> = [1, 2, 3];
const reducer: TypeFn<number> = (accumulator, currentValue) => accumulator + currentValue;

tsArr.map((i) => i + 1);
tsArr.map((i) => `${i} + 1`);
tsArr.reduce(reducer, 5);
