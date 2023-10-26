import messagesReducer from './messages-reducer';

test('Empty message should not get to list', () => {
    const startState = {contacts: [], messages: [], newMessageText: ''}

    const endState = messagesReducer(startState, {type: 'SEND-MESSAGE'})

    expect(endState.messages.length).toBe(startState.messages.length)

})