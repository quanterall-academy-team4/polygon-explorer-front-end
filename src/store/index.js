import { createStore } from "vuex";

const state = {
    useWebSocket: false,
    webSocketConnection: Object,
    latestWebSocketMessageReceived: Object,
    latestWebSocketMessageSent: String,

    latestBlocks: [],
    latestBlockSearched: Object,

    latestTransactions: []
};

const mutations = {
    getLatestBlocks(state, latestBlocksFetched){
        state.latestBlocks = latestBlocksFetched;
    },

    getLatestTransactions(state, latestTransactionsFetched){
        state.latestTransactions = latestTransactionsFetched; 
    },

    getSingleBlock(state, block){
        state.latestBlockSearched = block;
    },

    toggleWebSocketUse(state){
        state.useWebSocket = !state.useWebSocket;
    },

    setWebSocketConnection(state, connection){
        state.webSocketConnection = connection;
    },

    setLatestWebSocketMessageReceived(state, message){
        state.latestWebSocketMessageReceived = message;
    },

    setLatestWebSocketMessageSent(state, message){
        state.latestWebSocketMessageSent = message;
    },

    sendWebSocketTestMessage(state, message){
        state.webSocketConnection.send(message);
    }
};

export default createStore({
    state,
    mutations
});