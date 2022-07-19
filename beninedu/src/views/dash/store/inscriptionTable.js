import { defineStore } from "pinia";

const pagination = (personDatas, page, rows) => {
  let trimStart = (page - 1) * rows;
  var trimEnd = trimStart + rows;
  let trimedData = personDatas.slice(trimStart, trimEnd);
  return trimedData;
};
function sort(obj, input) {
  let inputS = input.toLowerCase();
  let dataArray = obj.filter(
    (el) =>
      el.nom.toLowerCase().includes(inputS) ||
      el.prenom.toLowerCase().includes(inputS)
  );
  return dataArray;
}
const store = defineStore("inscriptionTable", {
  state: () => ({
    returnDatas: [],
    personData: [],
    sortDirection: true,
    page: 1,
    rows: 5,
    maxpage: 1,
    onsearch: false,
    input: "",
    searchTab: [],
    search: "",
  }),

  getters: {
    maxpage: (state) => {
      if (state.onsearch === true) {
        return Math.ceil(sort(state.personData,state.search).length / state.rows);
      } else {
        return Math.ceil(state.personData.length / state.rows);
      }
    },
    gettersk: (state) => {
      if (state.page > state.maxpage) {
        console.log("popopopopo");
      }
    },
    returnDatasG: (state) => {
      return state.returnDatas;
    },
  },
  actions: {
    loadTable(table) {
      this.returnDatas = [];
      if (this.maxpage < this.page) {
        this.page = 1;
      }
      if (this.onsearch == true) {
        console.log(this.maxpage, "max");
        let tmp = pagination(sort(table, this.search), this.page, this.rows);
        this.returnDatas = tmp;
      } else {
        let tmp = pagination(table, this.page, this.rows);
        this.returnDatas = tmp;
      }
    },
    reloadTableDatas(rows) {
      this.rows = parseInt(rows);
      this.loadTable(this.personData);
    },
    ppage() {
      console.log(this.page);
      if (this.page < this.maxpage) {
        this.page++;
        this.loadTable(this.personData);
      }
    },
    mpage() {
      if (this.page > 1) {
        this.page--;
        this.loadTable(this.personData);
      }
    },
    navigate(page) {
      this.page = page;
      this.loadTable(this.personData);
    },
    toggleOnsearch() {
      this.onsearch = !this.onsearch;
    },
  },
});

export { store };
