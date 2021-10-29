<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />

  <input v-model="argument" placeholder="Search.." name="search" />
  <button v-on:click="getLatestBlocks" type="submit">
    <i class="fa fa-search"></i>
  </button>

  <table border="2">
    <tr>
      <th>Number</th>
      <th>Time</th>
      <th>Hash</th>
      <th>Mined by</th>
      <th>Dificulty</th>
      <th>Size</th>
      <th>Gas Used</th>
      <th>Gas Limit</th>
    </tr>
    <template v-for="block in latestBlocks" v-bind:key="block">
    <tr>
      <td>{{ block.blockNumberValue }}</td>
      <td>{{ block.blockTimeValue }}</td>
      <td>{{ block.blockHashValue }}</td>
      <td>{{ block.blockMinedByValue }}</td>
      <td>{{ block.blockDifficultyValue }}</td>
      <td>{{ block.blockSizeValue }}</td>
      <td>{{ block.blockGasUsedValue }}</td>
      <td>{{ block.blockGasLimitValue }}</td>
    </tr>
    </template>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </table>
</template>

<script>
import axios from "axios";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "BlocksTable",

  setup() {
      const store = useStore();
      const latestBlocks = computed(() => store.state.latestBlocks);

     const getLatestBlocks = async () => {    
       
       let latestBlocksFetched = [];
       store.commit("getLatestBlocks", latestBlocksFetched);

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
        console.log("state");
        console.log(latestBlocks.value);
      }

      // expose to template
      return { latestBlocks, getLatestBlocks };
  },
  

  mounted() {
    this.argument = this.$route.fullPath; 
    console.log(this.argument);
  },

};
</script>

<style>
table {
table-layout: fixed;
margin-top: 8.5em;
margin-left: 2.5em;
width: 95%;
word-break: break-word;
}

input {
  position: absolute;
  left: 40%;
  top: 12%;
  width: 15%;
}
button {
  position: absolute;
  left: 55%;
  height: 21px;
  top: 12%;
}
</style>