import { setLogged } from './menu';

describe("Menu Action-Creators", () => {
    test("SetLogged", () => {
        const mockTodoText = true;
        const mockedAction = setLogged(mockTodoText);

        expect(mockedAction.type).toEqual("SET_LOGGED");
        expect(mockedAction.payload.logged).toBeDefined();
        expect(mockedAction.payload.logged).toEqual(mockTodoText);
    });
});