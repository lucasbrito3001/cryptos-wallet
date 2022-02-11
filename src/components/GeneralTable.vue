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
    border-collapse: collapse;
}

table thead {
    border-bottom: 1px solid rgb(241, 241, 241);
}

table thead tr th {
    text-align: left;
    background-color: white;
    font-weight: 500;
}

table th:not(:first-child), table tbody tr td:not(:first-child)  {
    text-align: right;
}

table tbody tr:not(:last-child) {
    border-bottom: 1px solid rgb(241, 241, 241);
}

table tbody tr td {
    min-width: 80px;
    padding: 18px 0px 18px 10px;
    font-weight: 400;
    color: black;
    font-size: 14px;
    background-color: white;
}

table thead tr th:first-child {
    position: sticky;
    left: 0;
}

table tbody tr td:first-child {
    position: sticky;
    left: 0;
}
</style>