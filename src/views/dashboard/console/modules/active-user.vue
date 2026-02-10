<template>
  <div class="art-card h-105 p-4 box-border mb-5 max-sm:mb-4">
    <ArtBarChart
      class="box-border p-2"
      barWidth="50%"
      height="13.7rem"
      :showAxisLine="false"
      :data="chartData"
      :xAxisData="xAxisLabels"
    />
    <div class="ml-1">
      <h3 class="mt-5 text-lg font-medium">一周营业额</h3>
      <!-- <p class="mt-1 text-sm">比上周 <span class="text-success font-medium">+23%</span></p>
      <p class="mt-1 text-sm">我们为您创建了多个选项，可将它们组合在一起并定制为像素完美的页面</p> -->
    </div>
    <div class="flex-b mt-2">
      <div class="flex-1" v-for="(item, index) in list" :key="index">
        <p class="text-2xl text-g-900">{{ item.num }}</p>
        <p class="text-xs text-g-500">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface UserStatItem {
    name: string
    num: string
  }

  // 最近9个月
  const xAxisLabels = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

  // 每月活跃用户数
  const chartData = [160, 100, 150, 80, 190, 100, 175]

  /**
   * 用户统计数据列表
   * 包含总用户量、总访问量、日访问量和周同比等关键指标
   */
  const list: UserStatItem[] = [
    { name: '一周总量', num: '32k' },
    // { name: '总访问量', num: '128k' },
    // { name: '日访问量', num: '1.2k' },
    { name: '周同比', num: '+5%' }
  ]
</script>
