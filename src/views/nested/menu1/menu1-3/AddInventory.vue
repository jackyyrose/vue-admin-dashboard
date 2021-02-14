<template>
  <div>
    <el-dialog title="Add Stocktaking Record" :visible.sync="dialogAdd.show">
    <el-form ref="formstocktake" :model="form" label-width="80px" style="width:60%;margin:10px auto" :rules="formrules">
      <el-form-item label="SKU" prop="productId">
          <el-select v-model="form.productId" placeholder="Please Choose SKU" style="width:100%" @change="getStock(form.productId)">
              <el-option
                v-for="item in typeList"
                :key="item.id"
                :label="item.id"
                :value="item.id"
              ></el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="Stocktaking Date" prop="inventoryTime">
          <el-date-picker
            v-model="form.inventoryTime"
            type="date"
            placeholder="Choose Date"
            style="width:100%">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="Max Count">
          <el-input :disabled="true" v-model="maxCount"></el-input>
      </el-form-item>
      <el-form-item label="Min Count">
          <el-input :disabled="true" v-model="minCount"></el-input>
      </el-form-item>
      <el-form-item label="Stock">
          <el-input :disabled="true" v-model="stock"></el-input>
      </el-form-item>
      <el-form-item label="Loss Number" prop="lossNum">
          <el-input  v-model="form.lossNum"></el-input>
      </el-form-item>
      <el-form-item label="Memo" prop="intro">
          <el-input v-model="form.intro"></el-input>
      </el-form-item>
    </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="clear()">Cancel</el-button>
        <el-button type="primary" @click="dialogFormAdd('formstocktake')">Save</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
  export default {
    props: {
        dialogAdd: Object,
    },
    data() {
      return {
        maxCount:'',
        minCount:'',
        stock:'',
        typeList:Array,
        form: {
           productId:'',
           lossNum:'',
           inventoryTime:'',
           intro:''
        },
        formrules: {
          productId: [
            { required: true, message: 'Sku can not be blank', trigger: 'change' }
          ],
          lossNum: [{ required: true, message: 'Loss number can not be blank', trigger: 'blur' }],
          inventoryTime: [{ required: true, message: 'Date can not be blank', trigger: 'blur' }]

        }
      }
    },
    methods: {
      dialogFormAdd () {
        // api.inventory({
        //   productId: this.form.productId,
        //   lossNum: parseInt(this.form.lossNum),
        //   inventoryTime: this.form.inventoryTime,
        //   intro: this.form.intro
        // }) .then(res => {
        //     console.log(res)
        //     this.dialogAdd.show = false
        //   if(res.resultCode == 0){
        //       alert('success！')
        //       this.form.productId = ''
        //       this.form.lossNum = '',
        //       this.form.inventoryTime = '',
        //       this.form.intro = ''

        //   }
        //   })
      },
      dialogFormAdd(formstocktake) {
        // this.$refs[formstocktake].validate((valid) => {
        //   if (valid) {
        //        api.inventory({
        //         productId: this.form.productId,
        //         lossNum: parseInt(this.form.lossNum),
        //         inventoryTime: this.form.inventoryTime,
        //         intro: this.form.intro
        //         }) .then(res => {
        //             console.log(res)
        //             this.dialogAdd.show = false
        //         if(res.resultCode == 0){
        //             alert('success！')
        //             this.form.productId = ''
        //             this.form.lossNum = '',
        //             this.form.inventoryTime = '',
        //             this.form.intro = ''
        //         }
        //         })
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // })
      },

      clear(){
        this.form.productId = ''
        this.form.lossNum = '',
        this.form.inventoryTime = '',
        this.form.intro = ''
        this.dialogAdd.show = false
      },

      getAllProducts () {
        // api.getAllProducts().then(res => {
        //   this.typeList = res.products
        //   console.log(this.typeList)
        // })
      },

      getStock (id) {
      //   api.getStock({
      //   productId: parseInt(id),
      // })
      //   .then(res => {
      //     console.log(res.stock.product.maxCount)
      //     console.log(res.stock.product.minCount)
      //     console.log(res.stock.stock)
      //     this.maxCount = res.stock.product.maxCount
      //     this.minCount = res.stock.product.minCount
      //     this.stock = res.stock.stock
      //   })
      }
    },
    created () {
      this.getAllProducts()
    },
  }
</script>
