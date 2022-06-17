<template>
  <div
    style="
      background-image: url('/wp-content/themes/yootheme/cache/music-hero-4f873de3.jpeg');
    "
    ref="hero"
  >
    <h1>test1111</h1>
    <h1>test1111</h1>
    <h1>test1111</h1>

    <button @click="test">切换测</button>
    <button @click="fetchSomething">测试请求</button>
    <div class="uk-light">
      {{ product ? product : 'no product' }}
    </div>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat
      perspiciatis praesentium, accusantium illum nulla similique quas illo
      aspernatur earum vitae consectetur, ullam eius corrupti accusamus
      voluptate saepe dolores cupiditate.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat
      perspiciatis praesentium, accusantium illum nulla similique quas illo
      aspernatur earum vitae consectetur, ullam eius corrupti accusamus
      voluptate saepe dolores cupiditate.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat
      perspiciatis praesentium, accusantium illum nulla similique quas illo
      aspernatur earum vitae consectetur, ullam eius corrupti accusamus
      voluptate saepe dolores cupiditate.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat
      perspiciatis praesentium, accusantium illum nulla similique quas illo
      aspernatur earum vitae consectetur, ullam eius corrupti accusamus
      voluptate saepe dolores cupiditate.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat
      perspiciatis praesentium, accusantium illum nulla similique quas illo
      aspernatur earum vitae consectetur, ullam eius corrupti accusamus
      voluptate saepe dolores cupiditate.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat
      perspiciatis praesentium, accusantium illum nulla similique quas illo
      aspernatur earum vitae consectetur, ullam eius corrupti accusamus
      voluptate saepe dolores cupiditate.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat
      perspiciatis praesentium, accusantium illum nulla similique quas illo
      aspernatur earum vitae consectetur, ullam eius corrupti accusamus
      voluptate saepe dolores cupiditate.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat
      perspiciatis praesentium, accusantium illum nulla similique quas illo
      aspernatur earum vitae consectetur, ullam eius corrupti accusamus
      voluptate saepe dolores cupiditate.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat
      perspiciatis praesentium, accusantium illum nulla similique quas illo
      aspernatur earum vitae consectetur, ullam eius corrupti accusamus
      voluptate saepe dolores cupiditate.
    </p>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati placeat
      perspiciatis praesentium, accusantium illum nulla similique quas illo
      aspernatur earum vitae consectetur, ullam eius corrupti accusamus
      voluptate saepe dolores cupiditate.
    </p>
  </div>
</template>

<script>
import {
  ref,
  useRoute,
  computed,
  onMounted,
  onUnmounted
} from '@nuxtjs/composition-api'
import { useUiState } from '~/composables'
import { onSSR } from '@vue-storefront/core'
import { 
  useProduct, 
  productGetters,
  useCategory
} from '@vue-storefront/shopify'

export default {
  setup() {
    const {
      isNavbarTransparent,
      toggleNavbarTransparent,
      setNavbarTransparent
    } = useUiState()


    const { categories } = useCategory('menuCategories')

    const menus = computed(() => [
      ...categories.value
    ])


    onMounted(() => {
      console.log('子页面初始化!,设置透明导航')
      setNavbarTransparent(true)
      console.log('获取系统的列表',menus)
    })

    
    const route = useRoute()
    const { products, search } = useProduct('products')
    const { slug } = route?.value?.params

    // console.log('子页面初始化!,获取产品', slug)
    const product = computed(() => productGetters.getFiltered(products.value))

    onSSR(async () => {
      await search({})
    })

    const test = () => {
      console.log('子页面初始化!,点击测试', route)
      // toggleNavbarTransparent()
      // console.log('子页面test,isNavbarTransparent', isNavbarTransparent)
    }

    onUnmounted(() => {
      console.log('子页面卸载!,清除透明导航')
      setNavbarTransparent(false)
      
    })

    return {
      isNavbarTransparent,
      toggleNavbarTransparent,
      test,
      product
    }
  },

  data() {
    return {
      email: ''
    }
  },

  methods: {
    async fetchSomething() {
      const datas = {
        email_address: 'kensss@gmail.com'
      }
      const res = await this.$axios.$post('/v1/mailchimp/subscribed', datas)
      this.email = res
      console.log('子页面fetchSomething,res', res)
    }
  }
}
</script>

<style lang="scoped"></style>
