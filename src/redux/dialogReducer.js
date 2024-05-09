const SEND_MESSAGE = "SEND_MESSAGET"

let initialState = {
   dialogData: [
      { id: 1, name: 'Артур' },
      { id: 2, name: 'Вадим' },
      { id: 3, name: 'Айдар' },
      { id: 4, name: 'Петя' },
      { id: 5, name: 'Митя' },
   ],
   messageData: [
      { message: 'привет' },
      { message: 'здравствуй ' },
      { message: 'кек' },
      { message: 'чебурек' },
      { message: 'мек-мек' },
   ],
   newMessageText: "",
}

const dialogReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         return {
            ...state,
            messageData: [...state.messageData, { message: action.newMessageText }],
         }
      default:
         return state;
   }
}

export const sendMessageActionCreator = (newMessageText) => {
   return { type: SEND_MESSAGE, newMessageText }
}

export default dialogReducer;