import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    boxes: [
      {
        type: "box",
        boxName: "الصندوق الأول",
        managerName: " محمد إبراهيم علي",
        typeOfBox: "صندوق",
      },
      {
        type: "bank account",
        boxName: "الحساب الأول",
        managerName: "أحمد محمد القحطاني",
        typeOfBox: "حساب بنكي",
      },
      {
        type: "bank account",
        boxName: "الحساب الثاني",
        managerName: " محمد القحطاني",
        typeOfBox: "حساب بنكي",
      },
      {
        type: "box",
        boxName: "الصندوق الثاني",
        managerName: " محمد اسماعيل الرويني",
        typeOfBox: "صندوق",
      },
    ],
    filteredBoxes: [],
    type: "",
    boxName: "",
    primary: "",
    managerName: "",
    branch: "",
  }),
  getters: {
    setTypeToState: (state) => (typeFromComponent) => {
      state.type = typeFromComponent;
      return state.type;
    },
    setBoxNameToState: (state) => (boxNameFromComponent) => {
      state.boxName = boxNameFromComponent;
      return state.boxName;
    },
    setManagerNameToState: (state) => (managerNameFromComponent) => {
      state.managerName = managerNameFromComponent;
      return state.managerName;
    },
    setPrimaryToState: (state) => (primaryFromComponent) => {
      state.primary = primaryFromComponent;
      return state.primary;
    },
    setBranchToState: (state) => (branchFromComponent) => {
      state.branch = branchFromComponent;
      return state.branch;
    },
  },
  mutations: {
    deleteBox: (state, val) => {
      var result = confirm("هل ترغب بإتمام عملية الحذف؟");
      if (result) {
        state.boxes = state.boxes.filter((el) => el.boxName !== val);
        alert("تم الحذف");
      }
    },
    viewFilteredBoxes: (state, val) => {
      state.filteredBoxes = state.boxes.filter(function (el) {
        if (val === "all" || val === "") {
          return el.type === "box" || el.type === "bank account";
        } else return el.type === val;
      });
    },
    addBox(state) {
      state.boxes.push({
        type: state.type === "صندوق" ? "box" : "bank account",
        boxName: state.boxName,
        managerName: state.managerName,
        typeOfBox: state.type,
      });
      alert("تم اضافة الصندوق بنجاح");
    },
  },
  actions: {},
  modules: {},
});
