<template>
  <div ref="root">
    <!-- {{options}} -->
    <slot v-if="isVisible" />
  </div>
</template>
<script>
import {
  defineComponent,
  onMounted,
  onUnmounted,
  ref
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'LoadWhenVisible',
  props: {
    // options: {
    //   type: Object,
    //   default: () => ({
    //     root: null,
    //     rootMargin: '0px 0px 200px 0px', // 定义了扩展的视口监听区域,从底部开始计算
    //     threshold: 1.0
    //   })
    // }
  },
  setup() {
    const isVisible = ref(false)
    const root = ref(null)

    const IntersectionObserverOptions = {
      root: null,
      rootMargin: '0px 0px 200px 0px',
      threshold: 1.0
    }

    let observer = null
    // 如果是在浏览器中，则初始化observer
    if (process.browser && 'IntersectionObserver' in window) {
      // 初始化observer
      observer = new IntersectionObserver((entries) => {

        // 如果不在视口中,则返回
        if (entries[0].intersectionRatio <= 0) return

        // 如果在视口中,则移除监听root元素
        observer.unobserve(root.value)
        // 如果在视口中,则设置isVisible为true
        isVisible.value = true

        console.log('in viewport',entries)

        // entries.forEach(item => {
        //   // isIntersecting是一个Boolean值，判断目标元素当前是否可见
        //   if (item.isIntersecting) {
        //     console.log('daad',entries)
        //     // 如果在视口中,则移除监听root元素
        //     observer.unobserve(root.value)
        //     isVisible.value = true
        //     return
        //   }
        // })
      }, IntersectionObserverOptions)

      // console.log('初始化完成observer',observer)

    }

    // 生命周期钩子开始监听
    onMounted(() => {
      console.log(root.value)
      if (observer) {
        observer.observe(root.value)
      }
    })

    onUnmounted(() => {
      if (observer) {
        observer.unobserve(root.value)
      }
    })

    return {
      root,
      isVisible
    }
  }
})
</script>
