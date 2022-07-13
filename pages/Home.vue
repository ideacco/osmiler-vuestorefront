<template>
<div>
    <div id="page" class="uk-section-default">
    <VideoPlayback />
    <GridList />
    <BannerGrids />
    <Community />
    <Mp3 />
    <Automatic />
    <AutoPage />
    <Proudcut />
    <Autouk />
    <AutoPages />
    <DetailedpParameters />

    <Certificate />
    <Autobox />
    <Autotitle />
    <HomeLogolist />
    <SendEmali />
    <Contact />
  </div>
</div>
</template>

<script type="module">
import Certificate from '~/components/Home/Certificate'
import Autouk from '~/components/Home/Autouk'
import Contact from '~/components/Home/Contact'
import GridList from '~/components/Home/GridList'
import VideoPlayback from '~/components/Home/VideoPlayback'
import BannerGrids from '~/components/Home/BannerGrids'
import Community from '~/components/Home/Community'
import Mp3 from '~/components/Home/Mp3'
import Automatic from '~/components/Home/Automatic'
import AutoPage from '~/components/Home/AutoPage'
import AutoPages from '~/components/Home/AutoPages'
import Proudcut from '~/components/Home/Proudcut'
import Autobox from '~/components/Home/Autobox'
import HomeLogolist from '~/components/Home/HomeLogolist'
import SendEmali from '~/components/Home/SendEmali'
import DetailedpParameters from '~/components/Home/Detailedparameters'
import Autotitle from '~/components/Home/Autotitle'
import { ref, computed, onMounted, onUnmounted } from '@nuxtjs/composition-api'
import { useUiState } from '~/composables'

export default {
  name: 'HoMe',
//   async asyncData({ $seoMeta }) {
//   $seoMeta({
//     title: 'My awesome site',
//     description: 'awesome site description',
//     url: 'https://awesome.site',
//     image: 'https://awesome.cdn/awesome.png'
//   })
// },
  components: {
    Contact,
    VideoPlayback,
    GridList,
    BannerGrids,
    Community,
    Mp3,
    Proudcut,
    Automatic,
    AutoPage,
    AutoPages,
    Autobox,
    Certificate,
    HomeLogolist,
    DetailedpParameters,
    Autotitle,
    Autouk,
    SendEmali,
    Lcoalfooter: () =>
      import(/* webpackPrefetch: true */ '~/components/Lcoalfooter.vue')
  },
  setup() {
    const {
      isNavbarTransparent,
      toggleNavbarTransparent,
      setNavbarTransparent
    } = useUiState()
    onMounted(() => {
      // console.log('子页面初始化!,设置透明导航')
      setNavbarTransparent(true)
    })
    const Home = () => {
      toggleNavbarTransparent()
      console.log('子页面test,isNavbarTransparent', isNavbarTransparent)
    }
    // console.log(Home, 444)
    onUnmounted(() => {
      // console.log('子页面卸载!,清除透明导航')
      setNavbarTransparent(false)
    })

    return {
      isNavbarTransparent,
      toggleNavbarTransparent,
      Home
    }
  },
head({$seoMeta}){
  const title = 'Osmiler'
  return {
    title,
    meta: $seoMeta({
      title,
      description: 'Osmiler site description'
    }, false)
  }
  }
}
</script>
<style lang="scss" scoped>
.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}
#page {
  box-sizing: border-box;
  @include for-desktop {
    --font-family--secondary: var(--font-family--primary);
    margin: 0 auto;
  }
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
</style>
