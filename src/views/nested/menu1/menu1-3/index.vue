<template>
  <div>
    <el-container>
      <!-- main -->
      <el-container>
        <el-main id="main" style="height:500px;padding:0">

          <el-row>
            <el-col :span="20" :push="2">
              <div>
                <el-form :inline="true">
                  <el-form-item style="float: left" label="Check SKU:">
                    <el-input v-model="keyProduct" placeholder="input Sku here......"></el-input>
                  </el-form-item>
                  <el-form-item style="float: right">
                    <el-button
                      type="primary"
                      size="small"
                      icon="el-icon-edit-outline"
                      @click="hanldeAdd()"
                    >Add Record</el-button>
                  </el-form-item>
                </el-form>
              </div>
              <div class="table">
                <el-table :data="searchProductInfo(keyProduct)" border style="width: 100%">
                  <el-table-column type="index" label="ID" align="center" width="60"></el-table-column>
                  <el-table-column label="SKU" align="center" width="200">
                    <template slot-scope="scope">
                      <span>{{ scope.row.productId}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Stocktaking Date" align="center" width="230">
                    <template slot-scope="scope">
                      <span>{{ scope.row.inventoryTime }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Faulty / Extra" align="center" width="200">
                    <template slot-scope="scope">
                      <span>{{ scope.row.lossNum }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="Memo" align="center" width="">
                    <template slot-scope="scope">
                      <span>{{ scope.row.intro }}</span>
                    </template>
                  </el-table-column>

                  <!-- <el-table-column label="Action" align="center" fixed="right">
                    <template slot-scope="scope">
                      <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">Delete</el-button>
                    </template>
                  </el-table-column> -->
                </el-table>
              </div>
            </el-col>
          </el-row>
          <AddInventory :dialogAdd="dialogAdd" @update="getInventorys"></AddInventory>
          <!-- <EditProduct :dialogEdit="dialogEdit" :form="form" @updateEdit="getProductInfo"></EditProduct>
          <ShowProduct :dialogShow="dialogShow" :form="form" @updateEdit="getProductInfo"></ShowProduct> -->
        </el-main>
        <!-- footer -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AddInventory from './AddInventory.vue'
export default {
  data () {
    return {
      dialogVisible: false,
      inboundId: '',
      tableData: null,
      typeList: null,
      dialogEdit: {
        show: false
      },
      dialogAdd: {
        show: false
      },
      dialogShow: {
        show: false
      },
      keyProduct: '',
      form: {
        // Edit and Read
        date: '',
        productId: '',
        productName: '',
        productUnit: '',
        productScale: '',
        inboundTime: '',
        count: '',
        workshop: '',
        principal: ''
      }
    }
  },
  methods: {
    getInventorys () {
      // api.getInventorys().then(res => {
      //   this.tableData = res.inventory
      //   console.log(res)
      // })
    },
    hanldeAdd () {

      this.dialogAdd.show = true
    },
    handleDelete (id) {
      console.log(id)
      // api.deleteInbound ({
      //   inboundId: parseInt(id)
      // }).then(res => {
      //     console.log(res)
      //     this.getInventorys();
      //   })
    },
    searchProductInfo (keyProduct) {
      // return this.tableData.filter(item => {
      //   if (String(item.productId).includes(keyProduct)) {
      //     return item
      //   }
      // })
    }
  },
  created () {
    this.getInventorys()
  },
  components:{
    AddInventory
  }

}
</script>
<style scoped>
h1 {
  font-size: 30px;
  color: #333;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 5px;
  border-bottom: 2px solid #409eff;
  width: 300px;
}
</style>
