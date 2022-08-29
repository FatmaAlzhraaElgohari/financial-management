<template>
  <div class="create-edit">
    <div class="container">
      <h2 class="mt-5 me-5">اضافة صندوق</h2>
      <form class="w-75 m-auto mt-3 mb-5 border border-warning p-4">
        <div class="form-group row mb-4">
          <label for="box-type" class="col-sm-2 col-form-label">النوع</label>
          <div class="col-sm-10">
            <select class="col-sm-10 form-control" v-model="type">
              <option>صندوق</option>
              <option>حساب بنكي</option>
            </select>
          </div>
        </div>
        <div class="form-group row mb-4">
          <label for="box-name" class="col-sm-2 col-form-label">الاسم</label>
          <div class="col-sm-6">
            <input
              type="text"
              class="form-control mb-3"
              id="box-name"
              placeholder="اسم الصندوق"
              v-model="boxName"
            />
          </div>

          <div class="col-sm-4 m-auto">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value="true"
                id="defaultCheck1"
                v-model="primary"
              />
              <label class="form-check-label" for="defaultCheck1">
                صندوق رئيسي
              </label>
            </div>
          </div>
        </div>
        <div class="form-group row mb-4">
          <label for="box-type" class="col-sm-2 col-form-label"
            >المدير المسؤول</label
          >
          <div class="col-sm-4 mb-3">
            <select class="col-sm-10 form-control" v-model="managerName">
              <option>فهد بن عبدالله القحطاني</option>
              <option>محمد بن عبدالله العتيبي</option>
            </select>
          </div>
          <label for="box-type" class="col-sm-2 col-form-label"> الفرع</label>
          <div class="col-sm-4">
            <select class="col-sm-10 form-control" v-model="branch">
              <option>فرع الشمال</option>
              <option>فرع الجنوب</option>
              <option>فرع وسط الرياض</option>
            </select>
          </div>
        </div>
        <div class="form-group row mb-4">
          <label for="box-name" class="col-sm-2 col-form-label">لون مميز</label>
          <div class="col-sm-2">
            <input
              type="color"
              class="m-auto mb-4"
              id="favcolor"
              name="favcolor"
              value="#ff0000"
            />
          </div>

          <div class="col-sm-4 m-auto">
            <a type="button" class="btn btn-warning ms-5 pr-3 pl-3">
              <router-link to="/financialBoxes"> تراجع</router-link>
            </a>
            <a type="submit" @click="addBox()" class="btn btn-primary">حفظ</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      type: "",
      boxName: "",
      primary: "",
      managerName: "",
      branch: "",
    };
  },
  methods: {
    addBox: function () {
      this.$store.commit("addBox");
      this.type = "";
      this.managerName = "";
      this.boxName = "";
      this.branch = "";
      this.primary = "";
    },
  },
  computed: {
    boxes() {
      return this.$store.state.boxes;
    },
    setTypeToState() {
      return this.$store.getters.setTypeToState(this.type);
    },
    setBoxNameToState() {
      return this.$store.getters.setBoxNameToState(this.boxName);
    },
    setManagerNameToState() {
      return this.$store.getters.setManagerNameToState(this.managerName);
    },
    setPrimaryToState() {
      return this.$store.getters.setPrimaryToState(this.primary);
    },
    setBranchToState() {
      return this.$store.getters.setBranchToState(this.branch);
    },
  },
  name: "CreateEditBox",
};
</script>

<style>
.create-edit {
  direction: rtl;
  text-align: right;
}
</style>
