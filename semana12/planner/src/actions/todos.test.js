import { getTasks } from './todos'

describe("todos Action-Creators", () => {
    test("getTasks", () => {
        const mockTodoText = "Teste";
        const mockedAction = getTasks(mockTodoText);

        expect(mockedAction.type).toEqual('GET_TASKS');
        expect(mockedAction.payload.tasks).toBeDefined();
        expect(mockedAction.payload.tasks).toEqual(mockTodoText);
    });
})