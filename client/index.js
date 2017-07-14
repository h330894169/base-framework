/**
 * Created by jerryli on 2017/6/15.
 */
'use strict';
import Vue from 'vue';
import 'babel-polyfill';
import index from  './modules/lottery/index';
import store from './stores';
import mixins from './modules/common/js/mixin';
import fastclick from 'fastclick';

fastclick.attach(document.body);

Vue.mixin(mixins);

new Vue({...index, store}).$mount("#app")
