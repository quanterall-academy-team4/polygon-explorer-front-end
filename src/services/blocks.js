import axios from "axios";

export const getSingleBlock = async (store, arg, useWebSocket) => {
    const protocol = useWebSocket ? "http" : "ws";

    const blockResponse = await axios.get(protocol + "//localhost:3000/blocks/identifier/" + arg);

    const block = {
      blockNumberValue: blockResponse.data.number,
      blockTimeValue: blockResponse.data.timestamp,
      blockHashValue: blockResponse.data.hash,
      blockMinedByValue: blockResponse.data.miner,
      blockDifficultyValue: blockResponse.data.difficulty,
      blockSizeValue: blockResponse.data.size,
      blockGasUsedValue: blockResponse.data.gasUsed,
      blockGasLimitValue: blockResponse.data.gasLimit
    };
    console.log(useWebSocket);
    store.commit("getSingleBlock", block);
};

export const getLatestBlocks = async (store) => {
    let latestBlocksFetched = [];

    let blockResponse = await axios.get("http://localhost:3000/blocks/latest");
    let latestBlock = {
        blockId: 0,
        blockNumberValue: blockResponse.data.number,
        blockTimeValue: blockResponse.data.timestamp,
        blockHashValue: blockResponse.data.hash,
        blockMinedByValue: blockResponse.data.miner,
        blockDifficultyValue: blockResponse.data.difficulty,
        blockSizeValue: blockResponse.data.size,
        blockGasUsedValue: blockResponse.data.gasUsed,
        blockGasLimitValue: blockResponse.data.gasLimit
    };

    for (let i = latestBlock.blockNumberValue - 1; i >= latestBlock.blockNumberValue - 20; i--){
      blockResponse = await axios.get("http://localhost:3000/blocks/identifier/" + i);

      const currentBlock = {
        blockId: i,
        blockNumberValue: blockResponse.data.number,
        blockTimeValue: blockResponse.data.timestamp,
        blockHashValue: blockResponse.data.hash,
        blockMinedByValue: blockResponse.data.miner,
        blockDifficultyValue: blockResponse.data.difficulty,
        blockSizeValue: blockResponse.data.size,
        blockGasUsedValue: blockResponse.data.gasUsed,
        blockGasLimitValue: blockResponse.data.gasLimit
      };

        latestBlocksFetched.push(currentBlock); 
    }

    store.commit("getLatestBlocks", latestBlocksFetched);
};


export const toggleWebSocketUse = async (store) => {
    store.commit("toggleWebSocketUse");
};