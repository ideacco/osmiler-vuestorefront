<template>
  <div
    style="background-image: url('/wp-content/themes/yootheme/cache/music-hero-4f873de3.jpeg');"
    ref="hero"
  >
    <div class="uk-padding-large">
      <h1>产品接口测试</h1>

      <button @click="testRouterParams">获取路由信息</button>
      <button @click="fetchSomething">测试请求</button>

      <div class="uk-margin-large uk-light">
        <h3> 获取的产品内容 </h3>

        产品Title:{{ productTitle ? productTitle : 'no Title' }}
        <br>
        产品Id:{{ productId ? productId : 'no Id' }}
        <br>
        产品图片:
        <img 
        v-if="productImage"
        :src="productImage"
        alt=""
        >
        <br>
        图片URL:{{ productImage ? productImage : 'no imags' }}

        <br>

        产品的图库信息: {{ productGallery ? productGallery : 'no gallery' }}

        <br>
        产品的描述: {{ prdDescription ? prdDescription : 'no Description' }}
        <br>
        产品的类别Id: {{ productCategoryIds ? productCategoryIds : 'no productCategoryIds' }}
        <br>
        产品的loading信息: {{ loading ? loading : 'no loading' }}

        <br>
        产品的类别信息: {{ categories ? categories : 'no categories' }}

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
    </div>

  </div>
</template>

<script>
import {
  useRoute,
  useRouter,
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
  name: 'test_page',
  setup() {
    const {
      isNavbarTransparent,
      toggleNavbarTransparent,
      setNavbarTransparent
    } = useUiState()

    // 程序化路由方法
    const router = useRouter()
    // 实例化路由信息
    const route = useRoute()

    // 功能组件
    const { products, search } = useProduct('products')
    const { categories, loading } = useCategory('toothbrush-accessories')

    // 根据接口进行查询填充
    const { slug } = route?.value?.params
    // const slug = 'osmiler-swing'

    // 自定义查询id
    const id = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg='

    // 初始化(ssr)钩子
    onSSR(async () => {
      console.log('后端执行的 ssr 查询')
      // 用来更新产品的钩子函数
      // await search({slug})
      await search({})
    })

    // 自定义查询
    const productsSearchParams = {
      customQuery: {
        first: 1,
        sortKey: 'bestSelling',
        reverse: false
      }
    }

    // 产品根元素
    // const product = computed(() => productGetters.getFiltered(products.value))
    const product = computed(
      () =>
        productGetters.getFiltered(products.value, {
          master: true,
          attributes: route?.value?.query
        })[0]
    )

    // 获取信息
    const productImage = computed(() => productGetters.getCoverImage(product.value))
    const productCategoryIds = computed(() => productGetters.getCategoryIds(product.value))
    const prdDescription = computed(() => productGetters.getDescription(product.value, true))
    const productId = computed(() => productGetters.getId(product.value))
    const productTitle = computed(() => productGetters.getName(product.value))
    // const productGallery = computed(() => productGetters.getGallery(product.value))
    // 高级写法,将不同的尺寸图片分类使用
    const productGallery = computed(() =>
      productGetters.getGallery(product.value).map((img) => ({
        mobile: { url: img.small },
        desktop: { url: img.normal },
        big: { url: img.big }
      }))
    )

    // const productCategory = computed(() => { categories })

    // search 可以查询的单个选项
    const params = {
      id: '',
      ids: [],
      slug: slug,
      customQuery: {
        // first: 1,
        // sortKey: 'bestSelling',
        // reverse: false,
        query: {
          images: []
        }
      }
    }

    const testRouterParams = () => {
      // console.log('子页面初始化!,点击测试', route)
      // router.push({name: 'test_page', params: 'osmiler-swing'})
      router.push({path: '/test_page', params: 'osmiler-swing'})
      // toggleNavbarTransparent()
      // console.log('子页面test,isNavbarTransparent', isNavbarTransparent)
    }


    onMounted(() => {
      if (slug) {
        console.log('子页面初始化!,获取产品', slug)
      }
      console.log('子页面初始化!,路由信息', route)
      setNavbarTransparent(true)
    })

    onUnmounted(() => {
      console.log('子页面卸载!,清除透明导航')
      setNavbarTransparent(false)
    })

    return {
      isNavbarTransparent,
      toggleNavbarTransparent,
      testRouterParams,
      product,
      productImage,
      prdDescription,
      productCategoryIds,
      categories,
      loading,
      productId,
      productTitle,
      productGallery
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
