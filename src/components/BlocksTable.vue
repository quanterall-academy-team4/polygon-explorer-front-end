<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />

  <input v-model="argument" placeholder="Search.." name="search" />
  <button v-on:click="searchBlock" type="submit">
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
    <template v-for="(block, index) in this.blocks" v-bind:key="index">
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

export default {
  name: "BlocksTable",
  
  data() {
    return {
      blocks: [
      {
        blockNumberValue: "",
        blockTimeValue: "",
        blockHashValue: "",
        blockMinedByValue: "",
        blockDifficultyValue: "",
        blockSizeValue: "",
        blockGasUsedValue: "",
        blockGasLimitValue: "",
      },
      ],

      blockNumberValue: "",
        blockTimeValue: "",
        blockHashValue: "",
        blockMinedByValue: "",
        blockDifficultyValue: "",
        blockSizeValue: "",
        blockGasUsedValue: "",
        blockGasLimitValue: "",
      
      

      argument: "",
      initialLoad: true
    };
  },

  

  methods: {
    searchBlock: function () {
      let path = "http://localhost:3000";
      

      console.log(this.argument);

       if (this.argument === ''){
          path += '/blocks/latest';
      } else if (this.argument === '/blocks'){
        path += '/blocks/latest';
      }else {
        path += '/blocks/' + this.argument;

        const firstBlock = path.indexOf('blocks');
        const secondBlock = path.lastIndexOf('blocks');

        console.log(firstBlock);
        console.log(secondBlock);

        if (firstBlock !== secondBlock){
          path = 'http://localhost:3000' + this.argument;
        }

        this.initialLoad = false;
      }

      console.log(path);

      let iterations = 0;
  

      if (this.initialLoad === false){
        iterations = 1;
        this.blocks = []; // display searched block only
      } else {
        iterations = 25;
        this.initialLoad = false;
      }

      // hardcoded value
      for (let i = 0; i < iterations; i++){
          axios.get(path).then((response) => {
            
            const block = {
              blockNumberValue: response.data.number,
              blockTimeValue: response.data.timestamp,
              blockHashValue: response.data.hash,
              blockMinedByValue: response.data.miner,
              blockDifficultyValue: response.data.difficulty,
              blockSizeValue: response.data.size,
              blockGasUsedValue: response.data.gasUsed,
              blockGasLimitValue: response.data.gasLimit
            };

            console.log(block);
            this.blocks.push(block);
          });
          this.initialLoad = false;
      }
    },
  },

  mounted() {
    this.argument = this.$route.fullPath; 
    this.searchBlock();
    console.log(this.argument);
  },

  delayFunction: function(){
    console.log('delay');
  }
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
  position: fixed;
  left: 40%;
  top: 12%;
  width: 15%;
}
button {
  position: fixed;
  left: 55%;
  height: 21px;
  top: 12%;
}
</style>