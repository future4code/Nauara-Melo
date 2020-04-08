import { setPost,setFeed } from './posts';

describe("Posts Action-Creators", () => {
    test("SetPost", () => {
        const mockTodoText = "Teste do post";
        const mockedAction = setPost(mockTodoText);

        expect(mockedAction.type).toEqual("SET_POST");
        expect(mockedAction.payload.post).toBeDefined();
        expect(mockedAction.payload.post).toEqual(mockTodoText);
    });

    test("SetFeed", () => {
        const mockTodoText = "Teste do feed";
        const mockedAction = setFeed(mockTodoText);

        expect(mockedAction.type).toEqual("SET_FEED");
        expect(mockedAction.payload.feed).toB
        expect(mockedAction.payload.feed).toBeDefined();
        expect(mockedAction.payload.feed).toEqual(mockTodoText);   
    });
});