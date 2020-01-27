import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VCard,
  VTextField,
   transitions,
   VAvatar,
   VChip,
   VHover,
   VForm,
   VCheckbox,
   VDivider,
   VProgressCircular,
   VTextarea

} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VCard,
    VTextField,
     transitions,
     VAvatar,
     VChip,
     VHover,
     VForm,
     VCheckbox,
     VDivider,
     VProgressCircular,
     VTextarea

  },
   iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})
