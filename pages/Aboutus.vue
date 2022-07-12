<template>
  <div>
    <AboutHead/>
    <Aboutyuanjing/>
    <AboutDesgin/>
    <AboutType/>
    <AboutosmilerSisan/>
    <!-- <AboutosmilerSisi/> -->
    <AboutProtection/>
    <AboutResearch/>
    <AboutTesting/>
    <Contact />
  </div>
</template>
<script type="module">
import Contact from '~/components/Home/Contact'
import AboutDesgin from '~/components/About/AboutDesgin'
import AboutHead from '~/components/About/AboutHead'
import AboutType from '~/components/About/AboutType.vue'
import AboutProtection from '~/components/About/AboutProtection.vue'
import AboutosmilerSisan from '~/components/About/AboutosmilerSisan'
import AboutosmilerSisi from '~/components/About/AboutosmilerSisi'
import AboutResearch from '~/components/About/AboutResearch'
import AboutTesting from '~/components/About/AboutTesting'
import Aboutyuanjing from '~/components/About/Aboutyuanjing'

export default {
  name: 'AboutS',
  components: {
    Contact,
    AboutHead,
    AboutDesgin,
    AboutType,
    AboutProtection,
    AboutosmilerSisan,
    AboutosmilerSisi,
    AboutResearch,
    AboutTesting,
    Aboutyuanjing
  }
}
</script>
<style lang="scss" scoped>


</style>
