import { createStore } from "vuex";

const state = {
    latestBlocks: [],
    latestBlockSearched: Object,

    latestTransactions: []
};

const mutations = {
    getLatestBlocks(state, latestBlocksFetched){
        state.latestBlocks = latestBlocksFetched;
        console.log("Mutation call: " + state.latestBlocks);
    },

    getLatestTransactions(state, latestTransactionsFetched){
        state.latestTransactions = latestTransactionsFetched; 
    },

    getSingleBlock(state, block){
        state.latestBlockSearched = block;
    }
};

export default createStore({
    state,
    mutations
});