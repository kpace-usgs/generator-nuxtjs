import Vue from 'vue'
import { Line, Bubble, Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

Vue.component('line-chart', Line.extend({
  props: ['options', 'styles'],
  mixins: [reactiveProp],
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}));

Vue.component('bar-chart', Bar.extend({
	props: ['options', 'styles'],
	mixins: [reactiveProp],
	mounted(){
		this.renderChart(this.chartData, this.options)
	}
}));

Vue.component('bubble-chart', Bubble.extend({
	mixins: [reactiveProp],
	props: ['options', 'styles'],
	mounted() {
		this.renderChart(this.chartData, this.options);
	}
}))
