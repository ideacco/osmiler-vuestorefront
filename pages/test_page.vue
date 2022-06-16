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
import { ref, computed, onMounted, onUnmounted } from '@nuxtjs/composition-api'
import { useUiState } from '~/composables'

export default {
  setup() {
    const {
      isNavbarTransparent,
      toggleNavbarTransparent,
      setNavbarTransparent
    } = useUiState()
    onMounted(() => {
      console.log('子页面初始化!,设置透明导航')
      setNavbarTransparent(true)
    })

    const test = () => {
      toggleNavbarTransparent()
      console.log('子页面test,isNavbarTransparent', isNavbarTransparent)
    }

    onUnmounted(() => {
      console.log('子页面卸载!,清除透明导航')
      setNavbarTransparent(false)
    })

    return {
      isNavbarTransparent,
      toggleNavbarTransparent,
      test
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
