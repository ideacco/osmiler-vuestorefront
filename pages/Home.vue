<template>
  <div
    id="page"
    class="uk-section-default uk-light"
    tm-header-transparent="light"
    uk-scrollspy="target:[uk-scrollspy-class]; cls: uk-animation-slide-bottom-medium; delay: false;"
  >
    <Contact />
  </div>
</template>

<script type="module">
import Contact from '~/components/Contact'

export default {
  name: 'DefaultLayout',
  components: {
    Contact,
    Lcoalfooter: () =>
      import(/* webpackPrefetch: true */ '~/components/Lcoalfooter.vue')
  }
}
</script>
<style lang="css" scoped>
.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.bannerbox {
  position: relative;
}

/* #page\#0-0-0-0 {
  font-family: 'osmiler-title';
}

#page\#0-0-0-2 {
  margin-top: 40px;
}

@media (min-width: 960px) {
  #page\#0-0-0 {
    max-width: 453px;
  }
  #page\#0-0-0 .uk-tile {
    padding-left: 0;
  }
}

@media (min-width: 960px) {
  #page\#1 {
    padding-top: 0;
  }
}
#page\#2-0-1-1 {
  font-family: 'osmiler-title';
}
#page\#3-0-0-0 {
  font-family: 'osmiler-title';
}
#page\#3-0-0-2 {
  height: 16px;
}
#page\#3-0-0-4 {
  height: 32px;
}
#page\#4-0-1-0 {
  font-family: 'osmiler-title';
}
#page\#4-0-1-2 {
  height: 16px;
}
#page\#4-0-1-4 {
  height: 32px;
}
#page\#5-0-0-0 {
  font-family: 'osmiler-title';
}
#page\#5-0-0-2 {
  height: 16px;
}
#page\#5-0-0-4 {
  height: 16px;
}
@media (max-width: 959px) {
  #page\#5-0-1-0.uk-container-item-padding-remove-right {
    width: 100%;
    margin-right: 0;
  }
}
#page\#6-0-1-0 {
  font-family: 'osmiler-title';
}
#page\#7-0-0-0 {
  font-family: 'osmiler-title';
}
@media (max-width: 959px) {
  #page\#7-0-1-0.uk-container-item-padding-remove-right {
    width: 100%;
    margin-right: 0;
  }
}
#page\#7-0-1 {
  background: linear-gradient(120.11deg, #bfe0ff -0.73%, #4218bc 98.57%);
}
#page\#8-0-1-0 {
  font-family: 'osmiler-title';
}
#page\#8-0-1-2 .el-item {
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 1);
}
#page\#8 {
  background-color: #000;
}
#page\#10-0-0-0 {
  font-family: 'osmiler-title';
}
#page\#10-0-0-1 .el-item {
  border-radius: 10px;
}
#page\#11-0-0-0 {
  font-family: 'osmiler-title';
}
#page\#12-0-0-0 {
  font-family: 'osmiler-title';
}
#page\#14-0-0-0 {
  height: 32px;
}
#page\#14-0-0-1 .el-title {
  font-family: 'osmiler-title';
}
#subscribe {
  background: #f4f0ff;
}
#page\#15-0-0-0 {
  font-family: 'osmiler-title';
  color: #3a3543;
}
#page\#15-0-0-1 {
  color: #3a3543;
} */
</style>
