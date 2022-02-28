<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="(header, idxHeader) in tableHeaders"
          :key="idxHeader"
          v-html="header.headerName"
        ></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, idxData) in filteredTableDatasByPage[currentPage]" :key="idxData">
        <td
          v-for="(dataHeader, idxHeaderData) in tableHeaders"
          :key="idxHeaderData"
          v-html="data[dataHeader.propertyName]"
        ></td>
      </tr>
    </tbody>
  </table>
  <nav class="paginate">
    <ul>
      <li class="prev paginate-indicators" @click="currentPage !== 0 ? currentPage-- : ''">&lt;</li>
      <li 
        v-for="(page, idx) in filteredTableDatasByPage" 
        :key="idx" 
        @click="currentPage = idx"
        class="pages"
        :class="currentPage === idx ? 'current-page' : ''"
      >
        {{ idx + 1 }}
      </li>
      <li class="next paginate-indicators" @click="currentPage !== filteredTableDatasByPage.length - 1 ? currentPage++ : ''">&gt;</li>
    </ul>
  </nav>
</template>

<script>
import { onMounted, ref, computed } from 'vue';
export default {
  props: {
    tableHeaders: {
      type: Array,
      default: () => [],
    },
    tableDatas: {
      type: Array,
      default: () => [],
    },
    quantityByPage: {
      type: Number,
      default: 10,
    }
  },
  setup(props) {
    // States
    let currentPage = ref(0);
    let numberPages = null;
    let filteredTableDatasByPage = ref([]);

    // Mounting
    onMounted(() => {
      numberPages = Math.ceil(props.tableDatas.length / props.quantityByPage);
      for(let page = 1 ; page <= numberPages ; page++) {
        filteredTableDatasByPage.value.push(props.tableDatas.slice(((page - 1) * props.quantityByPage), page * props.quantityByPage));
      }
      console.log(filteredTableDatasByPage.value)
    })

    return {
      filteredTableDatasByPage,
      currentPage
    }
  },
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

table th:not(:first-child),
table tbody tr td:not(:first-child) {
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

.paginate {
  width: 75% !important;
  margin: 0 auto;
}

ul {
  display: flex;
  justify-content: space-evenly;
}

ul li {
  text-align: center;
  padding: 5px 0;
  width: 35px;
  border-radius: 10px;
}

ul li:hover {

}

.current-page {
  background-color: var(--secondary-yellow)
}

.paginate-indicators {
  border-radius: 7px;
}
</style>