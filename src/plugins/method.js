import Vue from 'vue'
import Loading from '@/components/loading'
import { formatDate } from '@/utils/date'
Vue.prototype.$loading = Loading
Vue.prototype.formatDate = formatDate
