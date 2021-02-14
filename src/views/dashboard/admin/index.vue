<template>
  <div class="dashboard-editor-container">

    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>


    <el-row >
      <el-col  style="margin-bottom:30px;">
        <todo-list />
      </el-col>

    </el-row>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import TodoList from './components/TodoList'

const lineChartData = {
  newVisitis: {
    lastWeekData: [900, 1100, 1210, 940, 805, 860, 965],
    thisWeekData: [920, 982, 1101, 854, 0, 0, 0]
  },
  messages: {
    lastWeekData: [200, 192, 120, 144, 160, 130, 140],
    thisWeekData: [180, 160, 151, 106, 0, 0, 0]
  },
  purchases: {
    lastWeekData: [11873, 10000, 9990, 10400, 9210, 8990, 12100],
    thisWeekData: [12157, 11800, 9980, 13800, 0, 0, 0]
  },
  shoppings: {
    lastWeekData: [9990, 9140, 8141, 10142, 8145, 9550, 9160],
    thisWeekData: [9120, 10130, 9551, 11012, 0, 0, 0]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {

    PanelGroup,
    LineChart,
    TodoList,
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis
    }
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
