<template>
    <tr>
      <td> {{blockNumberValue}} </td>
      <td> {{blockTimeValue}}</td>
      <td>{{blockHashValue}}</td>
      <td>{{blockMinedByValue}}</td>
      <td>{{blockDifficultyValue}}</td>
      <td>{{blockSizeValue}}</td>
      <td>{{blockGasUsedValue}}</td>
      <td>{{blockGasLimitValue}}</td>
    </tr>
</template>

<script>
export default {
  name: "BlockTableRow",
  components: {},
  props: {
      blockNumberValue
  },
  data() {

    return {
      blockNumberValue: '',
      blockTimeValue: '',
      blockHashValue: '',
      blockMinedByValue: '',
      blockDifficultyValue: '',
      blockSizeValue: '',
      blockGasUsedValue: '',
      blockGasLimitValue: ''
    }
  },
  methods : {
    populateFields: function(response){   
      this.blockNumberValue = response.data.number;
      this.blockTimeValue = response.data.timestamp;
      this.blockHashValue = response.data.hash;
      this.blockMinedByValue = response.data.miner;
      this.blockDifficultyValue = response.data.difficulty;
      this.blockSizeValue = response.data.size;
      this.blockGasUsedValue = response.data.gasUsed;
      this.blockGasLimitValue = response.data.gasLimit;
    }
  }
};
</script>