<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />

  <input v-model="argument" type="text" placeholder="Search.." name="search" />
  <button v-on:click="searchTransaction" type="submit">
    <i class="fa fa-search"></i>
  </button>

  <table border="2">
    <tr>
      <th>Transaction Hash</th>
      <th>Nonce</th>
      <th>From</th>
      <th>To</th>
      <th>Value</th>
      <th>Block number</th>
    </tr>
    <template v-for="(transaction, index) in this.transactions" v-bind:key="index">
    <tr>
      <td>{{ transaction.transactionHash }}</td>
      <td>{{ transaction.nonceValue }}</td>
      <td>{{ transaction.addressFromValue }}</td>
      <td>{{ transaction.addressToValue }}</td>
      <td>{{ transaction.amountValue }}</td>
      <td><router-link :to="`/blocks/${transaction.blockNumberValue}`">{{ transaction.blockNumberValue }}</router-link></td>
    </tr>
    </template>
    <tr>
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
  name: "TransactionsTable",
  data() {
    return {
      transactions: [
      {
        transactionHash: '',
        nonceValue: '',
        addressFromValue: '',
        addressToValue: '',
        amountValue: '',
        blockNumberValue: '',
      },
      ],
      

      argument: '',
      initialLoad: true
    };
  },
  methods: {
    searchTransaction: function () {
      let path = "http://localhost:3000/transactions/";

      if (this.argument === ''){
        path += 'latest';
      } else {
        path += 'hash=' + this.argument;
      }

      console.log(path);

      let iterations = 0;
  

      if (this.initialLoad === false){
        iterations = 1;
        this.transactions = []; // display searched block only
      } else {
        iterations = 25;
        this.initialLoad = false;
      }

    for (let i = 0; i < iterations; i++){
      axios.get(path).then((response) => {
        const transaction = {
          transactionHash: response.data.hash,
          nonceValue: response.data.nonce,
          addressFromValue: response.data.from,
          addressToValue: response.data.to,
          amountValue: response.data.value,
          blockNumberValue: response.data.blockNumber,
        };
         this.transactions.push(transaction);
      });
    }
    },
  },
};
</script>

<style>

</style>