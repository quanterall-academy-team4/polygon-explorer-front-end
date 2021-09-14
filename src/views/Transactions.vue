<template>
  <Footer />
  <TransactionsTable />
</template>

<script>
import Footer from "../components/Footer.vue";
import TransactionsTable from "../components/TransactionsTable.vue"
export default {
  name: "Transactions",
  components: {
    Footer,
    TransactionsTable,
  },
};
</script>

<style>
</style>