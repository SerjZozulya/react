import { Action } from "../action-type";

export enum actionTypes {
  SEND_MESSAGE = "SEND_MESSAGE",
  UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY",
}

type DialogType = {
  id: number;
  name: string;
};

type MessageType = {
  id: number;
  text: string;
  dateAndTime: string;
};

let initialState = {
  contacts: [
    { id: 0, name: "Роман" },
    { id: 1, name: "Паштет" },
    { id: 2, name: "Гена" },
    { id: 3, name: "Semen" },
    { id: 5, name: "Лёха" },
    { id: 6, name: "Саня" },
    { id: 7, name: "Микрочелик" },
  ] as Array<DialogType>,
  messages: [
    {
      id: 0,
      text: "Beginning the new era of roman network!",
      dateAndTime: "26.10.2023\n12:46",
    },
    {
      id: 1,
      text: "Узнал, что такое тернарное выражение",
      dateAndTime: "26.09.2021\n21:18",
    },
    {
      id: 2,
      text: "Зарефакторил функцию мапинга",
      dateAndTime: "26.09.2021\n21:20",
    },
    {
      id: 3,
      text: "Посмотрел 25 урок IT-KAMASUTRA",
      dateAndTime: "26.09.2021\n21:25",
    },
    {
      id: 4,
      text: "Узнал, что переименовывание переменной в WebStorm происходит на комбинацию клавиш Shift+F6",
      dateAndTime: "26.09.2021\n21:29",
    },
    {
      id: 5,
      text: 'Баг: при нажатии на "Птица Детектив" меняется отступ. Статус: активен',
      dateAndTime: "26.09.2021\n22:41",
    },
    {
      id: 6,
      text: 'Баг: Блок "Сообщения" прокручивается вниз, а не должен. Статус: активен',
      dateAndTime: "27.09.2021\n0:04",
    },
    {
      id: 7,
      text: 'Баг: Блок "Сообщения" прокручивается вниз, а не должен. Статус: решено',
      dateAndTime: "27.09.2021\n13:07",
    },
    {
      id: 8,
      text: "Вынес все данные в стэйт. По-прежнему не решил проблему с прокруткой блоков. Возможно, дело в гриде",
      dateAndTime: "27.09.2021\n21:49",
    },
  ] as Array<MessageType>,

  newMessageText: "",
};

export type SendMessageActionType = {
  type: actionTypes.SEND_MESSAGE;
};

export type UpdateNewMessageBodyActionType = {
  type: actionTypes.UPDATE_NEW_MESSAGE_BODY;
  payload: string;
};

type ActionsType = SendMessageActionType | UpdateNewMessageBodyActionType;

const messagesReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      if (state.newMessageText.trim() === "") {
        return { ...state };
      } else {
        let now = new Date();
        let newMessage = {
          id: 15,
          text: state.newMessageText,
          dateAndTime:
            now.toLocaleDateString() +
            "\n" +
            now.getHours() +
            ":" +
            now.getMinutes(),
        };

        return {
          ...state,
          newMessageText: "",
          messages: [...state.messages, newMessage],
        };
      }

    case actionTypes.UPDATE_NEW_MESSAGE_BODY:
      console.log(action.payload);
      return { ...state, newMessageText: action.payload };

    default:
      return state;
  }
};

type SendMessageActionCreatorType = {
  type: actionTypes.SEND_MESSAGE;
};

type UpdateNewMessageTextActionCreatorType = {
  type: actionTypes.UPDATE_NEW_MESSAGE_BODY;
  payload: string;
};

export const sendMessageActionCreator = (): SendMessageActionCreatorType => ({
  type: actionTypes.SEND_MESSAGE,
});

export const updateNewMessageTextActionCreator = (
  text: string
): UpdateNewMessageTextActionCreatorType => ({
  type: actionTypes.UPDATE_NEW_MESSAGE_BODY,
  payload: text,
});

export default messagesReducer;
