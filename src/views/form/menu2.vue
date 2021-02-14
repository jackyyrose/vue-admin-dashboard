<template>
  <div class="app-container">
	<el-form :model="form" :rules="rules" size="small"
      label-position="left" ref="ruleform" label-width="180px">
		<el-form-item label="Technician" prop="Technician">
			<el-select v-model="form.Technician" placeholder="Choose Technician" >
				<el-option label="Harry" value="Harry"></el-option>
				<el-option label="Jack" value="Jack"></el-option>
				<el-option label="Tom" value="Tom"></el-option>

			</el-select>
		</el-form-item>

		<el-form-item label="Time Start" >
			<el-date-picker
				v-model="form.TimeStart"
				value-format="yyyy-MM-dd HH:mm:ss"
				type="datetime"
				placeholder="Choose DateTime">
			  </el-date-picker>
		</el-form-item>

		<el-form-item label="Time End" >
			  <el-date-picker
					v-model="form.TimeEnd"
					value-format="yyyy-MM-dd HH:mm:ss"
					type="datetime"
					placeholder="Choose DateTime" >
			  </el-date-picker>
		</el-form-item>

		<el-form-item label="SO/INV No.:" prop="SalesorderRef">
			<el-input v-model="form.SalesorderRef"></el-input>
		</el-form-item>

		<el-form-item label="Customer:" prop="CustomerType">
			<el-radio-group v-model="form.CustomerType">
			  <el-radio label="Internal"></el-radio>
			  <el-radio label="External"></el-radio>
			</el-radio-group>
		</el-form-item>

		<el-form-item label="Address:">
			<el-input v-model="form.Address"
				name="addressfinderelement"
				@blur="$_my_form_address_blur"
				@focus="$_my_form_geolocate"></el-input>
		</el-form-item>

		<el-form-item label="Product Category:" prop="Category">
			<el-select v-model="form.Category" placeholder="Choose Product Category">
				<el-option label="Aircon/Heatpump" value="Aircon/Heatpump"></el-option>
				<el-option label="Cooktop" value="Cooktop"></el-option>
				<el-option label="Cooling" value="Cooling"></el-option>
				<el-option label="Dryer" value="Dryer"></el-option>
				<el-option label="Dish Washer" value="Dish Washer"></el-option>
				<el-option label="Fridge" value="Fridge"></el-option>
				<el-option label="Oven/Microwave" value="Oven/Microwave"></el-option>
				<el-option label="Other" value="Other"></el-option>
				<el-option label="Rangehood" value="Rangehood"></el-option>
				<el-option label="Washing Machine" value="Washing Machine"></el-option>
			</el-select>

		</el-form-item>

		<el-form-item label="Action Type:" prop="Action">
			<el-select v-model="form.Action" placeholder="Choose Action Type">
				<el-option label="Dismantle for Parts" value="Dismantle for Parts"></el-option>
				<el-option label="Inspection" value="Inspection"></el-option>
				<el-option label="Repair" value="Repair"></el-option>
				<el-option label="Referb" value="Referb"></el-option>
				<el-option label="Other" value="Other"></el-option>
			</el-select>
		</el-form-item>

		<el-form-item label="Under Warranty?:" prop="UnderWarranty">
			<el-switch v-model="form.UnderWarranty"></el-switch>
		</el-form-item>

		<el-form-item label="Fault Desc:" prop="FaultDesc">
			<el-input type="textarea" v-model="form.FaultDesc"></el-input>
		</el-form-item>

		<el-form-item label="Comment:" prop="Comment">
			<el-input type="textarea" v-model="form.Comment"></el-input>
		</el-form-item>

		<el-form-item label="Ticket Status:" prop="TicketStatus">
			<el-select v-model="form.TicketStatus" placeholder="Choose Ticket Status">
				<el-option label="Init" value="Init"></el-option>
				<el-option label="Partially Completed" value="Partially Completed"></el-option>
				<el-option label="Fully Completed" value="Fully Completed"></el-option>
			</el-select>
		</el-form-item>

		<el-form-item>
			<el-button type="primary" @click="$_my_form_save('ruleform')">Save</el-button>
			<el-button @click="$_my_form_reset('ruleform')">Reset</el-button>
		</el-form-item>
	</el-form>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data(){
			return {
					form:{
					  Technician: "",
					  TimeStart: "",
					  TimeEnd: "",
					  SalesorderRef: "",
					  CustomerType: "",
					  Address: "",
					  Category: "",
					  Action: "",
					  UnderWarranty: true,
					  Comment: "",
					  FaultDesc: "",
					  TicketStatus: "Init",
					},
					rules:{
						Technician:[{required: true, message: 'Please Select Name', trigger: 'change'}],
						SalesorderRef:[{required: true, message: 'Please input related SO/INV', trigger: 'blur'}],
						CustomerType:[{required: true, message: 'Please Select Customer Type', trigger: 'change'}],
						Category: [{required: true, message: 'Please Select Product Category', trigger: 'change'}],
						Action:[{required: true, message: 'Please Select Action Type', trigger: 'change'}],
						TicketStatus:[{required: true, message: 'Please Select Ticket Status', trigger: 'change'}],
						FaultDesc:[{required: true, message: 'Please input Fault Description', trigger: 'blur'}],
						Comment:[{required: true, message: 'Please input comment', trigger: 'blur'}]
					},
			}
		},
  mounted(){
      this.form.TimeStart = this.getCurrentTime();
      this.form.TimeEnd = this.getCurrentTime();
      console.log(this.form);
  },
  methods: {

    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    getCurrentTime(){
      // let m = new Date();
      // let dateString = m.getUTCFullYear() +"-"+ (m.getUTCMonth()+1) +"-"+ m.getUTCDate() +
        // " " + m.getUTCHours() + ":" + m.getUTCMinutes() + ":" + m.getUTCSeconds();
        return moment().format('YYYY-MM-DD HH:mm:ss');
    },
    $_my_form_save(formname){
				var _thisobj = this;
				var id = this.logid;
				var acc = (id > 0) ? 'update' : 'create';
				this.$refs[formname].validate((valid) => {
					if(valid){
						_thisobj.onSubmit();
					}else{
						alert('error submit');
						return false;
					}
				});

			},
			$_my_form_reset(formname){
				this.$refs[formname].resetFields();
				this.onCancel();
			},
			$_my_form_get(logid){
				//api
			},
			$_my_form_address_blur(event){
				//console.log(event);
				//if (event && this.form.Address !== event.target.value)
					//this.form.Address = event.target.value;
			},
			$_my_form_geolocate(event){
				//geolocate();
			}
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

