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
       let path = "http://localhost:3000/blocks/latest";

      // hardcoded value
       for (let i = 1; i <= 25; i++){
        const response = await axios.get(path);
        const block = {
          blockId: i,
          blockNumberValue: response.data.number,
          blockTimeValue: response.data.timestamp,
          blockHashValue: response.data.hash,
          blockMinedByValue: response.data.miner,
          blockDifficultyValue: response.data.difficulty,
          blockSizeValue: response.data.size,
          blockGasUsedValue: response.data.gasUsed,
          blockGasLimitValue: response.data.gasLimit
        };

        latestBlocksFetched.push(block);  
        console.log(latestBlocksFetched);   
       
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