import { createStore } from "vuex";

const state = {
    latestBlocks: [],
    latestTransactions: []
};

const mutations = {
    getLatestBlocks(state, latestBlocksFetched){
        state.latestBlocks = latestBlocksFetched;
        console.log("Mutation call: " + state.latestBlocks);
    },

    getLatestTransactions(state, latestTransactionsFetched){
        state.latestTransactions = latestTransactionsFetched; 
    }
};

export default createStore({
    state,
    mutations
});