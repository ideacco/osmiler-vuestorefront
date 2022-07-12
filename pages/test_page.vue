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
        <h3>获取的产品内容</h3>

        产品Title:{{ productTitle ? productTitle : 'no Title' }}
        <br />
        产品Id:{{ productId ? productId : 'no Id' }}
        <br />
        产品图片:
        <img
          v-if="productImage"
          :src="productImage"
          alt=""
        />
        <br />
        图片URL:{{ productImage ? productImage : 'no imags' }}

        <br />

        产品的图库信息: {{ productGallery ? productGallery : 'no gallery' }}

        <br />
        产品的描述: {{ prdDescription ? prdDescription : 'no Description' }}
        <br />
        产品的类别Id:
        {{ productCategoryIds ? productCategoryIds : 'no productCategoryIds' }}
        <br />
        产品的loading信息: {{ loading ? loading : 'no loading' }}

        <br />
        产品的类别信息:
        {{ productCategory ? productCategory : 'no productCategory' }}

        <br />
        产品的图:
        {{ productGallery2 ? productGallery2 : 'no productGallery2' }}

        <br />
        产品的图333:
        {{ productGallery3 ? productGallery3 : 'no productGallery3' }}
        <br />
        <!-- blogs:
        {{ blogs ? blogs : 'no blogs' }}

        <br />
        产品的 page:
        {{ isPages ? isPages : 'no page' }}
        <br />
        产品的 page:
        {{ isPages ? isPages : 'no page' }} -->

        <br />
        产品的 isComsterData:
        {{ isComsterData ? isComsterData : 'no isComsterData' }}

        <br />
        产品的 isMetaDatas:
        {{ isMetaDatas ? isMetaDatas : 'no isMetaDatas' }}

        <br />
        产品的 isMetaData:
        {{ isMetaData ? isMetaData : 'no isMetaData' }}
      </div>

    </div>
  </div>
</template>

<script>
import {
  isRef,
  useRoute,
  useRouter,
  computed,
  onMounted,
  onUnmounted
} from '@nuxtjs/composition-api'

import { useUiState, useCustom, useMeta } from '~/composables'
import { onSSR } from '@vue-storefront/core'
import {
  useProduct,
  productGetters,
  useCategory,
  useContent,
  ContentType,
  contentGetters
  // useRoute
} from '@vue-storefront/shopify'

import {
  SfGallery
} from '@storefront-ui/vue'

export default {
  components: {
    SfGallery
  },
  name: 'TestPage',
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

    const { products, search } = useProduct('products222')
    const { search: inSearch, categories, loading } = useCategory('categories')

    const { search: isSearch, custom } = useCustom('custom')

    const { search: getBlogs, result: blogs } = useContent('blogs')
    const { search: searchBlog } = useContent('blog')

    const { search: getPages, result: pages } = useContent('Pages')
    const { search: searchPage } = useContent('Page')

    const {search: isMeta, meta: isMetaDatas } = useMeta('test')

    // 根据接口进行查询填充
    // const { slug } = route?.value?.params
    const slug = 'osmiler-swing'

    // 自定义查询id
    const id = 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0Lzc3MTcwNDc5OTI1Nzg='

    // 初始化(ssr)钩子
    onSSR(async () => {
      console.log('后端执行的 ssr 查询')
      // 用来更新产品的钩子函数
      // await search({
      //   customQuery: {
      //     products: 'myQsuery',
      //     metadata: {}
      //   }
      // })
      // await search({slug})
      // await inSearch({})
      // await isContent({slug})
      // await getPages({ contentType: 'page' })

      // if(pages) {
      //   await searchPage ({
      //     // contentType: 'page'
      //     // handle: pages?.value?.[0]?.handle
      //   })
      // }

      // await getBlogs({ contentType: 'blog' })

      // if (blogs) {
      //   // console.log('测试???',blogs)
      //   await searchBlog({
      //     contentType: 'blog',
      //     handle: blogs?.value?.[0]?.handle
      //   })
      // }
    })

    onMounted(async() => {
      if (slug) {
        // console.log('子页面初始化!,获取产品', slug)
      }
      console.log('onMounted')
      await isMeta({slug})

      await isSearch()

      await search({})
    
      setNavbarTransparent(true)
      // console.log('product.value',product.value)
    })

    onUnmounted(() => {
      // console.log('子页面卸载!,清除透明导航')
      setNavbarTransparent(false)
    })

    // console.log('获取路由?',route?.value?.query.id)

    // const isPages = computed(()=> pages.value)
    console.log('isRef?222',isRef(isMetaDatas))
    const isComsterData = computed(()=> custom.value)
    const isMetaData = computed(()=> isMetaDatas.value)
    if(isMetaDatas){
      console.log('isMetaDatas',isMetaDatas)
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
    const productImage = computed(() =>
      productGetters.getCoverImage(products.value)
    )
    const productCategoryIds = computed(() =>
      productGetters.getCategoryIds(product.value)
    )
    const prdDescription = computed(() =>
      productGetters.getDescription(product.value, true)
    )
    const productId = computed(() => productGetters.getId(product.value))
    const productTitle = computed(() => productGetters.getName(product.value))
    const productGallery2 = computed(() => productGetters.getGallery(product.value))

    const getProductGallery = (product) => (product ? product.images : []).map((image) => {
      const imgPath = image.originalSrc.substring(0, image.originalSrc.lastIndexOf('.'))
      const imgext = image.originalSrc.split('.').pop()
      const imgSmall = imgPath + '_160x160.' + imgext
      const imgBig = imgPath + '_295x295.' + imgext
      const imgNormal = imgPath + '_1500x1500.' + imgext
      return ({
        small: imgSmall,
        big: imgBig,
        normal: imgNormal
      })
    })

    const productGallery3 = computed(() =>
      getProductGallery(product.value).map((img) => {
        // console.log('img?',img)
        return ({
          mobile: { url: img.small },
          desktop: { url: img.normal },
          big: { url: img.big }
        })
      })
    )


    // 高级写法,将不同的尺寸图片分类使用
    const productGallery = computed(() =>
      productGetters.getGallery(product.value).map((img) => {
        // console.log('img?',img)
        return ({
          mobile: { url: img.small },
          desktop: { url: img.normal },
          big: { url: img.big }
        })

      })
    )

    const productCategory = computed(() => [...categories.value])


    const testRouterParams = () => {
      router.push({ path: '/test_page', params: 'osmiler-swing' })
    }

    

    return {
      isNavbarTransparent,
      toggleNavbarTransparent,
      testRouterParams,
      product,
      productImage,
      prdDescription,
      productCategoryIds,
      productCategory,
      categories,
      loading,
      productId,
      productTitle,
      productGallery,
      productGallery2,
      productGallery3,
      isComsterData,
      // blogs,
      // pages,
      // isPages,
      isMetaDatas,
      isMetaData
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
      // console.log('子页面fetchSomething,res', res)
    }
  }
}
</script>

<style lang="scoped"></style>
