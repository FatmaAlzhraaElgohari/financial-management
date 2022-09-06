import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    boxes: [
      {
        type: "box",
        boxName: "الصندوق الأول",
        managerName: "فهد بن عبدالله القحطاني",
        typeOfBox: "صندوق",
      },
      {
        type: "bank account",
        boxName: "الحساب الأول",
        managerName: "محمد بن عبدالله العتيبي",
        typeOfBox: "حساب بنكي",
      },
      {
        type: "bank account",
        boxName: "الحساب الثاني",
        managerName: "فهد بن عبدالله القحطاني",
        typeOfBox: "حساب بنكي",
      },
      {
        type: "box",
        boxName: "الصندوق الثاني",
        managerName: "محمد بن عبدالله العتيبي",
        typeOfBox: "صندوق",
      },
    ],
    filteredBoxes: [],
    currentBox: {
      type: "",
      managerName: "",
      boxName: "",
      branch: "",
      primary: "",
    },
    selectedCategory: "all",
    NameOfBoxToEdit: "",
  }),
  getters: {
    viewFilteredBoxes(state) {
      state.filteredBoxes = state.boxes.filter(function (el) {
        if (state.selectedCategory === "all") {
          return el.type === "box" || el.type === "bank account";
        } else return el.type === state.selectedCategory;
      });
    },
    getFilteredboxes(state) {
      return state.filteredBoxes;
    },
    getselectedCategory(state) {
      return state.selectedCategory;
    },
    getNameOfBoxToEdit(state) {
      return state.NameOfBoxToEdit;
    },
    getCurrentBoxData(state) {
      return state.currentBox;
    },
  },
  mutations: {
    deleteBox: (state, val) => {
      var result = confirm("هل ترغب بإتمام عملية الحذف؟");
      if (result) {
        state.boxes = state.boxes.filter((el) => el.boxName !== val);
      }
    },
    addBox: (state, val) => {
      state.boxes.push({
        type: val.type === "صندوق" ? "box" : "bank account",
        boxName: val.boxName,
        managerName: val.managerName,
        typeOfBox: val.type,
      });
      alert("تم اضافة الصندوق بنجاح");
    },
    clearCurrentBoxData(state) {
      (state.currentBox.type = ""),
        (state.currentBox.managerName = ""),
        (state.currentBox.branch = ""),
        (state.currentBox.primary = ""),
        (state.currentBox.boxName = "");
    },
    setCurrentBoxData(state, val) {
      const index = state.boxes.findIndex((box) => box.boxName == val);
      (state.currentBox.type = state.boxes[index].type),
        (state.currentBox.managerName = state.boxes[index].managerName),
        (state.currentBox.branch = state.boxes[index].branch),
        (state.currentBox.primary = state.boxes[index].primary),
        (state.currentBox.boxName = state.boxes[index].boxName);
    },
    setSelectedCategory(state, val) {
      state.selectedCategory = val;
    },
    setNameOfBoxToEdit(state, val) {
      state.NameOfBoxToEdit = val;
    },
    editBox(state, value) {
      const index = state.boxes.findIndex(
        (box) => box.boxName === state.getNameOfBoxToEdit
      );
      (state.boxes[index].type =
        value.type === "صندوق" ? "box" : "bank account"),
        (state.boxes[index].managerName = value.managerName),
        (state.boxes[index].branch = value.branch),
        (state.boxes[index].primary = value.primary),
        (state.boxes[index].boxName = value.boxName);
    },
  },
  actions: {},
  modules: {},
});
