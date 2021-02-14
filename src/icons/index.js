import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

/**
 * Use of plugin svg-sprite-loade, the benefit can be:
 * 1. can use svg ID to load anywhere
 * 2. can casually change size and color
 * Refer to https://segmentfault.com/a/1190000012213278
 */

 //build context to get all modules under ./svg directory; no searching into sub directory
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

//then use <svg-icon icon-class=“user/table/link/xxx”> to load respective svg
