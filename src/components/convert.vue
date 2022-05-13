<template>
  <div>
    <el-form label-width="auto">
      <el-row>
        <el-col :span="24">
          <el-form-item>
            <label>选择日期:</label>
            <el-date-picker
              v-model="filters.column.create_start_date"
              type="date"
              :picker-options="pickerBeginDateBefore"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              @change="selectTime"
              placeholder="">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item>
            <el-input type="textarea" ref="textarea2" autosize placeholder="请输入内容" v-model="textarea2"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item>
            <el-button type="primary" @click="changedRight()">向右</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="changedLeft()">向左</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item>
            <el-input type="textarea" ref="textarea3" autosize placeholder="请输入内容" v-model="textarea3"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
var selectedTime_
var selectedTime

export default {
  name: 'convert',
  data () {
    return {
      textarea2: '',
      textarea3: '',
      filters: {
        column: {
          create_start_date: '',
          create_end_date: ''
        }
      },
      pickerBeginDateBefore: {
        disabledDate: (time) => {
          let beginDateVal = this.filters.column.create_end_date
          if (beginDateVal) {
            return time.getTime() > beginDateVal
          }
        }
      },
      pickerBeginDateAfter: {
        disabledDate: (time) => {
          let beginDateVal = this.filters.column.create_start_date
          if (beginDateVal) {
            return time.getTime() < beginDateVal
          }
        }
      }
    }
  },
  methods: {
    changedRight () {
      let textarea2 = this.$refs.textarea2.value
      let textarea3 = textarea2.replaceAll('$^', '\'')
      textarea3 = textarea3.replaceAll('#_CURRENCYDATE#', selectedTime_)
      textarea3 = textarea3.replaceAll('#CURRENCYDATE#', selectedTime)
      this.$refs.textarea3.value = textarea3
    },
    changedLeft () {
      let textarea3 = this.$refs.textarea3.value
      let textarea2 = textarea3.replaceAll('\'', '$^')
      textarea2 = textarea2.replaceAll(selectedTime_, '#_CURRENCYDATE#')
      textarea2 = textarea2.replaceAll(selectedTime, '#CURRENCYDATE#')
      this.$refs.textarea2.value = textarea2
    },
    selectTime (value) {
      selectedTime_ = value
      selectedTime = value.replaceAll('-', '')
    }
  }
}
</script>

<style scoped>

</style>
