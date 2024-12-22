<script>
import { defineComponent } from "vue";
import { Chart } from "chart.js/auto";

export default defineComponent({
  name: "StatisticsGraphics",

  data() {
    return {
      pieInstance: null,
      barInstance: null,
      pieData: {
        labels: ["Заявка", "Оплачено", "Отказ"],
        datasets: [
          {
            data: [],
            backgroundColor: ["#03BAF7", "#A9F703", "#F37B0D"],
          },
        ],
      },
      barData: {
        labels: [],
        datasets: [
          {
            label: "",
            data: [],
          },
        ],
      },
    };
  },

  computed: {
    pieConfig() {
      return {
        type: "pie",
        data: this.pieData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Статус заявок",
            },
          },
        },
      };
    },

    barConfig() {
      return {
        type: "bar",
        data: this.barData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Количество заявок по курсам",
            },
          },
        },
      };
    },
  },

  methods: {
    fetchOrdersStatistics() {
      this.$api.get("order/statistics").then((r) => {
        const statusesStatistics = r.data.statuses;
        const directionsStatistics = r.data.directions;

        this.pieData.datasets[0].data = [
          statusesStatistics["Заявка"],
          statusesStatistics["Оплачено"],
          statusesStatistics["Отказ"],
        ];

        this.barData.labels = Object.keys(directionsStatistics);

        this.barData.datasets[0].data = Object.keys(directionsStatistics).map(
          (key) => directionsStatistics[key]
        );
        this.barData.datasets[0].backgroundColor = Object.keys(
          directionsStatistics
        ).map(() => "#F37B0D");

        this.pieInstance = new Chart(this.$refs.chartCanvas, this.pieConfig);
        this.barInstance = new Chart(this.$refs.barCanvas, this.barConfig);
      });
    },
  },

  mounted() {
    this.fetchOrdersStatistics();
  },
});
</script>

<template>
  <div class="flex no-wrap">
    <canvas
      id="pieChart"
      ref="chartCanvas"
      style="max-width: 420px; max-height: 420px"
    ></canvas>

    <canvas id="barChart" ref="barCanvas" style="max-height: 420px"></canvas>
  </div>
</template>

<style scoped lang="scss"></style>
