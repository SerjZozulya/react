import messagesReducer, { sendMessageActionCreator, updateNewMessageTextActionCreator } from './messages-reducer';

test('Empty message should not get to list', () => {
    const startState = {contacts: [], messages: [], newMessageText: '         '}

    const endState = messagesReducer(startState, sendMessageActionCreator())

    expect(endState.messages.length).toBe(startState.messages.length)

})

test('New message should get to list', () => {
    const startState = {contacts: [], messages: [], newMessageText: 'Hello World!'}

    const endState = messagesReducer(startState, sendMessageActionCreator())

    expect(endState.messages.length).toBe(startState.messages.length + 1)

})

test('New message text should changes', () => {
    const startState = {contacts: [], messages: [], newMessageText: ''}

    const newMessageText = 'test'

    const endState = messagesReducer(startState, updateNewMessageTextActionCreator(newMessageText))

    expect(endState.newMessageText).toBe('test')

})