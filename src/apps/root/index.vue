<template>
<!-- <div class="bg-primary"> -->
<!-- <section class="content"> -->
  <q-page :style="{height: height}">
    <!-- <all-page key="all" v-if="!table"/> -->
    <!-- <main key="all" v-if="!table"/> -->
    <root-main key="all"/>
    <!-- <table-page v-else :table="table" :key="table"/> -->
  </q-page>
  <!-- <table-page v-else :table="$route.params.table"/> -->
</template>
<script>
/* global EventBus */
// import { EventBus } from '@libs/eventbus'

import { dom } from 'quasar'
const { height, width } = dom

import Vue from 'vue'

import * as Debug from 'debug'
const debug = Debug('apps:root')

// import AdminLteMixin from '@components/mixins/adminlte'
// import DataSourcesMixin from '@components/mixins/dataSources'

import GridView from '@components/gridView'

// import Test from '@components/test/test.vue'

// import Pipeline from 'js-pipeline'
// import RootPipeline from './pipelines/index'

// import { dom } from 'quasar'
// const { height, width } = dom

// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'

import RootMain from './pages/main'

export default {
  // mixins: [AdminLteMixin, DataSourcesMixin],
  // mixins: [DataSourcesMixin],

  components: { RootMain },
  name: 'root',

  computed: {
    table () {
      return this.$route.query.table
    }
  },
  data () {
    return {
      height: '0px',

      /**
      * dataSources
      **/
      store: false,

      id: 'all',
      path: 'all'

    }
  },

  watch: {
    '$route': function (val) {
      debug('ROUTE %o', val)
    }
  },

  // beforeCreate: function (next) {
  //   // debug('beforeCreate', this)
  //
  //   // https://webpack.js.org/guides/dependency-management/#require-context
  //   const requireComponent = require.context(
  //     // Look for files in the current directory
  //     '@apps/root/components/',
  //     // Do not look in subdirectories
  //     true,
  //     // Only include "_base-" prefixed .vue files
  //     /[\w-]+\.vue$/
  //   )
  //
  //   // For each matching file name...
  //   requireComponent.keys().forEach((fileName) => {
  //     // Get the component config
  //
  //     const componentConfig = requireComponent(fileName)
  //     // Get the PascalCase version of the component name
  //     const componentName = upperFirst(
  //       camelCase(
  //         fileName
  //           // Remove the "./_" from the beginning
  //           // .replace(/^\.\/_/, '')
  //           // Remove the file extension from the end
  //           .replace(/\.\w+$/, '')
  //       )
  //     )
  //     // Globally register the component
  //     // console.log('componentName')
  //     Vue.component(componentName, componentConfig.default || componentConfig)
  //   })
  //
  //   if (next) { next() }
  // },
  created: function () {

  },

  methods: {
    // hide: function (table, event, vnode) {
    //   debug('hide', table, this.grid)
    //   for (const layout in this.grid.layouts) {
    //     for (let i = 0; i < this.grid.layouts[layout].length; i++) {
    //       let row = this.grid.layouts[layout][i]
    //       if (row.i === 'rethinkdb_table_' + table) {
    //         this.$set(this.grid.layouts[layout][i], 'h', 2)
    //       }
    //     }
    //   }
    //
    //   debug('hiden', table, this.grid)
    // },
    // show: function (table, event, vnode) {
    //   debug('show', table, this.grid)
    //   for (const layout in this.grid.layouts) {
    //     for (let i = 0; i < this.grid.layouts[layout].length; i++) {
    //       let row = this.grid.layouts[layout][i]
    //       if (row.i === 'rethinkdb_table_' + table) {
    //         this.$set(this.grid.layouts[layout][i], 'h', 27)
    //       }
    //     }
    //   }
    //
    //   debug('shown', table, this.grid)
    // },
    setHeight: function (height) {
      debug('setHeight', height)
      // this.height = height + 700 + 'px'
      this.height = height + 200 + 'px'
    },

    /**
    * @start pipelines
    **/
    create_pipelines: function (next) {
      // debug('create_pipelines')
      //
      // let template = Object.clone(RootPipeline)
      //
      // let pipeline_id = template.input[0].poll.id
      //
      // template.input[0].poll.conn[0].requests = this.__components_sources_to_requests(this.components)
      //
      // let pipe = new Pipeline(template)
      //
      // this.$options.__pipelines_cfg[pipeline_id] = {
      //   ids: [],
      //   connected: [],
      //   suspended: pipe.inputs.every(function (input) { return input.options.suspended }, this)
      // }
      //
      // this.__after_connect_inputs(
      //   pipe,
      //   this.$options.__pipelines_cfg[pipeline_id],
      //   this.__resume_pipeline.pass([pipe, this.$options.__pipelines_cfg[pipeline_id], this.id, function () {
      //     debug('__resume_pipeline CALLBACK')
      //     pipe.fireEvent('onOnce')
      //   }], this)
      // )
      //
      // this.$options.pipelines[pipeline_id] = pipe
      //
      // if (next) { next() }
    }

    /**
    * @end pipelines
    **/

  }
  // mounted: function () {
  //   debug('mounted refs', this.$refs)
  // //   // console.log('height:', height(document.getElementById('logs')))
  // //   this.height = this.getGridHeight() + 700 + 'px'
  // }

}
</script>
