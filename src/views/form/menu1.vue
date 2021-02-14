<template>
  <div class="app-container">
	  <el-tabs type="border-card" >

			<el-form ref="form2"  label-width="80px">
				<el-form-item label="Display">
					<el-select v-model="formreport.technician" placeholder="Choose Technician">
							<el-option label="All" value="All"></el-option>
							<el-option label="Harry" value="Harry"></el-option>
							<el-option label="Jack" value="Jack"></el-option>
							<el-option label="Tom" value="Tom"></el-option>
					</el-select>
					<el-select v-model="formreport.period" placeholder="Choose Period">
							<el-option label="Today" value="Today"></el-option>
							<el-option label="This Week" value="This Week"></el-option>
							<el-option label="Last Week" value="Last Week"></el-option>
							<el-option label="This Month" value="This Month"></el-option>
							<el-option label="Last Month" value="Last Month"></el-option>
					</el-select>
					<el-button type="primary" @click="vm_server_query">Go</el-button>
					<el-button type="success" @click="vm_new_or_edit(0)">New</el-button>
				</el-form-item>
			</el-form>
			<el-table
				ref="stattable"
				:data="tableData"
				style="width: 100%"
				:default-sort = "{prop: 'TimeStart', order: 'descending'}"
				highlight-current-row  row-key="Id"
				show-summary sum-text="*"
				@row-dblclick = "vm_row_dblclick"
			>
				<el-table-column
				  prop="Id"
				  label="Id"
				  width="40"
				  >
				</el-table-column>
				<el-table-column
				  prop="TimeStart"
				  label="Start"
				  sortable
				  width="180">
				</el-table-column>
				<el-table-column
				  prop="TimeEnd"
				  label="End"
				  width="180">
				</el-table-column>
				<el-table-column
				  prop="Technician"
				  label="Name"
				  sortable
				  width="100"
				  :filters="[{text:'Harry',value:'Harry'},{text:'Jack',value:'Jack'},{text:'Tom',value:'Tom'}]"
				  :filter-method="vm_filterName">
				</el-table-column>
				<el-table-column
				  prop="Category"
				  label="Category"
				  sortable
				  width="100">
				</el-table-column>
				<el-table-column
				  prop="Action"
				  label="Action"
				  sortable
				  width="100">
				</el-table-column>
				<el-table-column
				  prop="Duration"
				  label="Duration(Min)"
				  width="150">
				</el-table-column>
				<el-table-column
				  prop="Comment"
				  label="Comment"
          width="180"
				  >
				</el-table-column>
				<el-table-column
				  prop="TicketStatus"
				  label="TicketStatus"
				  sortable
				  width="180">
				</el-table-column>

			</el-table>




	</el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formreport:{
          technician:'All',
          period: 'This Week',
      },
      tableData: [{
        Id:1,
        Technician: 'Harry',
        TimeStart:'2021-02-12 12:10:00',
        TimeEnd:'2021-02-12 14:10:00',
        Category:'Aircon',
        Action:'Inspection',
        Comment:'Checking the faulty fan',
        UnderWarranty: 1,
        Duration: 2,
        TicketStatus:'Init'
      },{
        Id:2,
        Technician: 'Jack',
        TimeStart:'2021-02-13 12:10:00',
        TimeEnd:'2021-02-13 15:10:00',
        Category:'Cooktop',
        Action:'Repair',
        Comment:'Fixing the circuit',
        UnderWarranty: 1,
        Duration: 3,
        TicketStatus:'Init'

      }]

    }
  },
  created(){
      this.vm_loaddata();

  },
  methods: {

    vm_new_or_edit(num){

		},
		vm_filterName(value, row){
			return row.Technician === value;
		},
		vm_server_query(){
			this.vm_loaddata();
		},
		vm_save(rowId){

		},
		vm_loaddata(){

    },
		vm_row_dblclick (row, column, event){


		},
		vm_row_hightlight(rowId){
			let tgt = this.tableData.filter(item => {
				if (item.Id === rowId)
					return item;
			});
			if (tgt[0]){
				this.$refs.stattable.setCurrentRow(tgt[0]);
			}


		}
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

