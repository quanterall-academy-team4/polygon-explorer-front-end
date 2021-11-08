<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />

  <label class="switch">
  <input type="checkbox" v-on:click="toggleWebSocketUse(store)">
    <span class="slider round"></span>
  </label>

  <input v-model="argument" placeholder="Search.." name="search" />
  <button v-on:click="getSingleBlock(store, argument, useWebSocket)" type="submit">
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
    <tr style="font-color:green">
      <td>{{ latestBlockSearched.blockNumberValue }}</td>
      <td>{{ latestBlockSearched.blockTimeValue }}</td>
      <td>{{ latestBlockSearched.blockHashValue }}</td>
      <td>{{ latestBlockSearched.blockMinedByValue }}</td>
      <td>{{ latestBlockSearched.blockDifficultyValue }}</td>
      <td>{{ latestBlockSearched.blockSizeValue }}</td>
      <td>{{ latestBlockSearched.blockGasUsedValue }}</td>
      <td>{{ latestBlockSearched.blockGasLimitValue }}</td>
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
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";

import { toggleWebSocketUse, getSingleBlock, getLatestBlocks } from "../services/blocks.js";
import { createConnection } from "../services/websocket.js";

export default {
  name: "BlocksTable",

  setup() {
    const store = useStore();
    const latestBlocks = computed(() => store.state.latestBlocks);
    const latestBlockSearched = computed(() => store.state.latestBlockSearched);
    const useWebSocket = computed(() => store.state.useWebSocket);
    const webSocketConnection = computed(() => store.state.webSocketConnection);

    const createWSConnection = async () => {
      if (useWebSocket.value && webSocketConnection.value === null){
          await createConnection(store);
      }
    }

    onBeforeMount(async () => {
      await createWSConnection(); // call if websocket toggle is on

    /* 
      WS messages are handled in websocket.js:
      The web socket service will directly provide set the state property "latestBlocks"
      and it will be accessible from the table. Http request will be handled by blocks service
    */

      console.log("ima li" + webSocketConnection.value);
      useWebSocket.value ? webSocketConnection.value.send("/blocks/latest") : getLatestBlocks(store);
    });

      // expose to template
    return { store, useWebSocket, latestBlockSearched, latestBlocks, getLatestBlocks, getSingleBlock, toggleWebSocketUse};
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

tr {
font-style:color-green;
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

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>