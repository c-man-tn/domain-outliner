<template>
  <div class="outline-point-with-sub-points">
    <div class="o-point">
      <span class="pt-label" @click="toggleChildren">
        {{ pt_label }}
      </span>
      <span class="pt-title">
        {{ pt_title }}
      </span>
      <span class="pt-descr" v-if="descrIsShort"> - {{ pt_descr }} </span>
    </div>
    <div class="long-pt-descr" v-if="descrIsLong">
      Description: {{ pt_descr }}
    </div>
    <div class="sub-points" v-show="showSubs">
      <outline-point
        v-for="new_point in sub_points"
        :key="new_point.pt_id"
        v-bind:point="new_point"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'outline-point',
    data: function() {
      return {
        showSubs: false,
        pt_id: 'pending',
        pt_label: 'pending',
        pt_title: 'pending',
        pt_descr: 'pending',
        sub_points: [],
      }
    },
    props: {
      point: {
        type: Object,
      },
    },
    computed: {
      descrIsShort: function() {
        return (
          this.pt_descr &&
          this.pt_descr.length > 0 &&
          this.pt_descr.length <= 32
        )
      },
      descrIsLong: function() {
        return this.pt_descr && this.pt_descr.length > 32
      },
    },
    methods: {
      toggleChildren: function() {
        this.showSubs = this.showSubs ? false : true
      },
    },
    mounted() {
      this.pt_id = this.point.pt_id
      this.pt_label = this.point.pt_label
      this.pt_title = this.point.pt_title
      this.pt_descr = this.point.pt_descr
      this.sub_points = this.point.sub_points
    },
  }
</script>

<style lang="scss" scoped>
  .outline-point-with-sub-points {
    text-align: left;
  }
  .outline-pt {
    height: 24px;
    padding: 5px;
    text-align: left;
    background-color: wheat;
  }
  .pt-title {
    font-weight: bold;
  }
  .pt-label {
    margin-right: 15px;
    font-weight: 400;
  }
  .pt-descr {
    margin-left: 5px;
  }
  .long-pt-descr {
    margin-left: 15px;
  }
  .sub-points {
    margin-left: 15px;
  }
</style>
