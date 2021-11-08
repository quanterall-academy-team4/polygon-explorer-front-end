
import { computed } from "vue";

export const createConnection = async(store) => {
    const connection = new WebSocket("ws://localhost:9898"); // export as runtime env

    connection.onmessage = (event) => {
        store.commit("setLatestWebSocketMessageReceived", event.data);

        const latestMessageSent = computed(() => store.state.latestWebSocketMessageSent);
        const latestMessageReceived = computed(() => store.state.latestWebSocketMessageReceived);

        if (latestMessageSent.value !== null && latestMessageSent.value === "/blocks/latest"){
            let latestBlock = {
                blockId: 0,
                blockNumberValue: latestMessageReceived.value.number,
                blockTimeValue: latestMessageReceived.value.timestamp,
                blockHashValue:  latestMessageReceived.value.hash,
                blockMinedByValue:  latestMessageReceived.value.miner,
                blockDifficultyValue:  latestMessageReceived.value.difficulty,
                blockSizeValue:  latestMessageReceived.value.size,
                blockGasUsedValue:  latestMessageReceived.value.gasUsed,
                blockGasLimitValue:  latestMessageReceived.value.gasLimit
            };

            console.log(latestBlock);

            store.commit("getLatestBlocks", latestBlock);
        }
    };

    connection.onopen = () => {
        console.log("WS Connection: ");
        connection.send("/blocks/latest");

        store.commit("setLatestWebSocketMessageSent", "/blocks/latest");
    };

    // save connection to state for cross-component access
    setTimeout(() => {
        store.commit("setWebSocketConnection", connection);
    }, 5000);
    
}