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
  }),
  getters: {},
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
    addBox(state, data) {
      state.boxes.push({
        type: data.type === "صندوق" ? "box" : "bank account",
        boxName: data.boxName,
        managerName: data.boxManagerName,
        typeOfBox: data.type,
      });
      alert("تم اضافة الصندوق بنجاح");
    },
  },
  actions: {},
  modules: {},
});
