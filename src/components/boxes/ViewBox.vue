<template>
  <div class="view-box">
    <div class="container">
      <div class="category">
        <div class="form-check form-check-inline mt-5 mb-4">
          <label class="boxes" for="boxes"
            >الصناديق
            <input
              class="form-check-input"
              type="radio"
              name="category"
              id="box"
              value="box"
              v-model="selectedCategory"
            />
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="category"
            id="bank accounts"
            value="bank account"
            v-model="selectedCategory"
          />
          <label class="form-check-label" for="bankaccounts"
            >الحسابات البنكية</label
          >
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="category"
            id="all"
            value="all"
            v-model="selectedCategory"
          />
          <label class="form-check-label" for="all">الكل</label>
        </div>
      </div>

      <div class="all-boxes p-2 border border-warning">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 col-sm-12"
            v-for="box in filteredBoxes"
            :key="box.id"
          >
            <div class="box p-2 pt-4 mt-3 mb-2 border-top border-danger">
              <div class="mb-3">
                <img
                  v-if="box.type === 'box'"
                  class="img-fluid ms-3"
                  src="@/assets/box.png"
                  alt=""
                />
                <img
                  v-else-if="box.type === 'bank account'"
                  class="img-fluid ms-3"
                  src="@/assets/bank.png"
                  alt=""
                />
                <label for="box_name">
                  {{ box.boxName }}
                </label>
              </div>
              <div class="mb-3">
                <label for="box_managerName">ادارة : </label>
                <label for="box_managerName">
                  {{ box.managerName }}
                </label>
              </div>
              <div>
                <label for="box-type" class="p-3">{{ box.typeOfBox }} </label>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle rounded-pill"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    اجراء
                  </button>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="#">تفعيل / إيقاف</a>
                    <a class="dropdown-item" href="#">العمليات المالية </a>
                    <a class="dropdown-item" href="#">سجل فتح الصندوق</a>
                    <a class="dropdown-item" href="#"> اغلاق الصندوق</a>
                  </div>
                </div>
                <a
                  href="#"
                  class="btn btn-warning text-light rounded-pill me-1"
                >
                  <router-link
                    to="/create-edit-box"
                    @click="viewBoxToEdit(box)"
                  >
                    تعديل
                  </router-link>
                </a>
                <a
                  @click="deleteBox(box.boxName)"
                  class="btn btn-danger rounded-pill me-1"
                  >حذف</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="addBox">
        <a class="btn btn-primary mt-4 mb-5 p-2">
          <router-link to="/create-edit-box"> إضافة صندوق </router-link>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: function () {
    return {
      selectedCategory: "all",
    };
  },
  methods: {
    ...mapMutations(["viewFilteredBoxes"]),
    deleteBox: function (boxName) {
      this.$store.commit("deleteBox", boxName);
      this.viewFilteredBoxes(this.selectedCategory);
    },
    viewBoxToEdit: function (box) {
      this.store.commit("viewBoxToEdit", box);
    },
    // viewFilteredBoxes: function () {
    //   this.$store.commit("viewFilteredBoxes", this.selectedCategory);
    // },
  },
  watch: {
    selectedCategory: function (v) {
      this.viewFilteredBoxes(v);
    },
  },
  mounted() {
    this.viewFilteredBoxes(this.selectedCategory);
  },
  computed: {
    boxes() {
      return this.$store.state.boxes;
    },
    filteredBoxes() {
      return this.$store.state.filteredBoxes;
    },
  },
  name: "ViewBox",
};
</script>
<style>
.view-box {
  direction: rtl;
  text-align: center;
}
input {
  float: right !important;
  margin-left: 10px !important;
}
.box {
  display: inline-block;
  min-width: 350px;
  background-color: rgba(104, 103, 103, 0.082);
}

.dropdown {
  display: inline;
}
.addBox {
  text-align: left;
  margin-left: 10px;
}
</style>
