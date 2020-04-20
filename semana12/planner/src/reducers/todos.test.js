import todos from './todos';
import { getTasks } from '../actions/todos';
import { isExportDeclaration } from 'typescript';

const mockStore = {
    tasks: [
      {
        day: "seg",
        text: "Comprar pão",
      },
      {
        day: "ter",
        text: "Comprar pão",
      },
      {
        day: "qua",
        text: "Comprar pão",
      }
    ]
  };

describe("Todos Reducer", () => {
    test("GET_TASKS", () => {
        const mockTest =  {
            day: "sex",
            text: "Comprar banana",
        }

        const newTodoAction = getTasks(mockTest);
        const newStore = todos(mockStore, newTodoAction);

        expect(newStore.tasks.text).toBe(mockTest.text);
        expect(newStore.tasks.day).toBe(mockTest.day);
    })

    test("default", () => {

        const newTodoAction = {};
        const newStore = todos(mockStore, newTodoAction)

        expect(mockStore).toBe(newStore);
        expect(newStore).toBeDefined()
    })
})