<template>
  <table>
    <thead>
      <tr>
        <th v-for="(header, idxHeader) in tableHeaders" :key="idxHeader">
          {{ header.headerName }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, idxData) in tableDatas" :key="idxData">
        <td v-for="(dataHeader, idxHeaderData) in tableHeaders" :key="idxHeaderData" v-html="data[dataHeader.propertyName]">
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    props: {
        tableHeaders: {
            type: Array,
            default: () => ([])
        },
        tableDatas: {
            type: Array,
            default: () => ([])
        }
    }
};
</script>

<style scoped>
table {
    width: 100%;
}

table th {
    text-align: left;
}

table th:not(:first-child), table tbody tr td:not(:first-child)  {
    text-align: right;
}

table tbody tr {
    border-bottom: 1px solid gray;
}

table tbody tr td {
    padding: 18px 0;
    width: 25%;
    font-weight: 500;
    color: black;
    font-size: 15px;
}
</style>