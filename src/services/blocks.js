import axios from "axios";

export const getSingleBlock = async (store, arg) => {
    const blockResponse = await axios.get("http://localhost:3000/blocks/identifier/" + arg);

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

    store.commit("getSingleBlock", block);
  };