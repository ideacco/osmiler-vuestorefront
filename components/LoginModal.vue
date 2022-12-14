<template>
  <SfModal
    v-e2e="'login-modal'"
    :visible="isLoginModalOpen"
    class="modal"
    @close="closeModal"
  >
    <template #modal-bar>
      <SfBar
        class="sf-modal__bar smartphone-only"
        :close="true"
        :title="$t(barTitle)"
        @click:close="closeModal"
      />
    </template>
    <transition name="sf-fade" mode="out-in">
      <div v-if="isLogin">
        <ValidationObserver v-slot="{ handleSubmit }" key="log-in">
          <form class="form" @submit.prevent="handleSubmit(handleLogin)">
            <ValidationProvider v-slot="{ errors }" rules="required|email">
              <SfInput
                v-model.lazy="form.username"
                v-e2e="'login-modal-email'"
                :valid="!errors[0]"
                :error-message="errors[0]"
                name="email"
                label="Your email"
                class="form__element for-email"
              />
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" rules="required">
              <SfInput
                v-model.lazy="form.password"
                v-e2e="'login-modal-password'"
                :valid="!errors[0]"
                :error-message="errors[0]"
                name="password"
                label="Password"
                type="password"
                class="form__element"
              />
            </ValidationProvider>
            <div>
              <SfCheckbox
                v-model.lazy="rememberMe"
                v-e2e="'login-modal-remember-me'"
                name="remember-me"
                label="Remember me"
                class="checkbox"
              />
              <div v-if="error.login">
                {{ error.login }}
              </div>
              <div class="action" style="float: right">
                <SfButton
                  class="sf-button--text"
                  @click="setIsForgottenValue(true)"
                >
                  {{ $t('Forgotten password?') }}
                </SfButton>
              </div>
            </div>
            <SfButton
              v-e2e="'login-modal-submit'"
              type="submit"
              class="sf-button--full-width form__button"
              :disabled="loading"
            >
              <SfLoader :class="{ loader: loading }" :loading="loading">
                <div>{{ $t('Login') }}</div>
              </SfLoader>
            </SfButton>
          </form>
        </ValidationObserver>

        <div class="bottom">
          <!-- <p class="bottom__paragraph">{{ $t('No account') }}</p> -->
          <SfButton
            class="color-secondary sf-button sf-button--full-width"
            type="button"
            @click="setIsLoginValue(false)"
            style="
              margin-top: 30px;
              box-sizing: border-box;
              border: 1px solid #fff;
            "
          >
            <div>{{ $t('Register today') }}</div>
          </SfButton>
        </div>
      </div>
      <div v-else-if="isForgotten">
        <p>{{ $t('Forgot Password') }}</p>
        <ValidationObserver v-slot="{ handleSubmit }" key="log-in">
          <form class="form" @submit.prevent="handleSubmit(handleForgotten)">
            <ValidationProvider v-slot="{ errors }" rules="required|email">
              <SfInput
                v-model.lazy="form.username"
                v-e2e="'forgot-modal-email'"
                :valid="!errors[0]"
                :error-message="errors[0]"
                name="email"
                :label="$t('Forgot Password Modal Email')"
                class="form__element"
              />
            </ValidationProvider>
            <div v-if="forgotPasswordError.request">
              {{ forgotPasswordError.request.message }}
            </div>
            <SfButton
              v-e2e="'forgot-modal-submit'"
              type="submit"
              class="sf-button--full-width form__button"
              :disabled="forgotPasswordLoading"
            >
              <SfLoader
                :class="{ loader: forgotPasswordLoading }"
                :loading="forgotPasswordLoading"
              >
                <div>{{ $t('Reset Password') }}</div>
              </SfLoader>
            </SfButton>
          </form>
        </ValidationObserver>
      </div>
      <div v-else-if="isThankYouAfterForgotten" class="thank-you">
        <i18n
          tag="p"
          class="thank-you__paragraph"
          path="forgotPasswordConfirmation"
        >
          <span class="thank-you__paragraph--bold">{{ userEmail }}</span>
        </i18n>
        <p class="thank-you__paragraph">{{ $t('Thank You Inbox') }}</p>
      </div>
      <div v-else class="form">
        <ValidationObserver v-slot="{ handleSubmit }" key="sign-up">
          <form
            class="form"
            autocomplete="off"
            @submit.prevent="handleSubmit(handleRegister)"
          >
            <ValidationProvider v-slot="{ errors }" rules="required|email">
              <SfInput
                v-model.lazy="form.email"
                v-e2e="'login-modal-email'"
                :valid="!errors[0]"
                :error-message="errors[0]"
                name="email"
                label="Your email"
                class="form__element for-email"
              />
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" rules="required">
              <SfInput
                v-model.lazy="form.firstName"
                v-e2e="'login-modal-firstName'"
                :valid="!errors[0]"
                :error-message="errors[0]"
                name="first-name"
                label="First Name"
                class="form__element"
              />
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" rules="required">
              <SfInput
                v-model.lazy="form.lastName"
                v-e2e="'login-modal-lastName'"
                :valid="!errors[0]"
                :error-message="errors[0]"
                name="last-name"
                label="Last Name"
                class="form__element"
              />
            </ValidationProvider>
            <ValidationProvider v-slot="{ errors }" rules="required">
              <SfInput
                v-model.lazy="form.password"
                v-e2e="'login-modal-password'"
                :valid="!errors[0]"
                :error-message="errors[0]"
                name="password"
                label="Password"
                type="password"
                class="form__element"
              />
            </ValidationProvider>
            <ValidationProvider
              v-slot="{ errors }"
              :rules="{ required: { allowFalse: false } }"
            >
              <SfCheckbox
                v-model.lazy="createAccount"
                v-e2e="'login-modal-create-account'"
                :valid="!errors[0]"
                :error-message="errors[0]"
                name="create-account"
                label="I want to create an account"
                class="form__element"
              />
            </ValidationProvider>
            <div v-if="error.register">
              {{ error.register }}
            </div>
            <SfButton
              type="submit"
              class="sf-button--full-width form__button"
              :disabled="loading"
              @click="createAccounts()"
            >
              <SfLoader :class="{ loader: loading }" :loading="loading">
                <div>{{ $t('Create an account') }}</div>
              </SfLoader>
            </SfButton>
          </form>
        </ValidationObserver>
        <SfButton
          class="color-secondary sf-button sf-button--full-width back-to-login"
          @click="setIsLoginValue(true)"
          style="margin-top: 20px"
        >
          {{ $t('login in to your account') }}
        </SfButton>
      </div>
    </transition>
  </SfModal>
</template>
<script>
import {
  ref,
  watch,
  reactive,
  computed,
  useRouter,
  useContext,
inject,
onMounted
} from '@nuxtjs/composition-api'
import {
  SfModal,
  SfInput,
  SfButton,
  SfCheckbox,
  SfLoader,
  SfBar
} from '@storefront-ui/vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'
import { useUser, useForgotPassword } from '@vue-storefront/shopify'
import { useUiState, useUiNotification } from '~/composables'

extend('email', {
  ...email,
  message: 'Invalid email'
})

extend('required', {
  ...required,
  message: 'This field is required'
})

export default {
  name: 'LoginModal',
  components: {
    SfModal,
    SfInput,
    SfButton,
    SfCheckbox,
    SfLoader,
    ValidationProvider,
    ValidationObserver,
    SfBar
  },
  setup() {
    const { isLoginModalOpen, toggleLoginModal } = useUiState()
    const form = ref({})
    const isLogin = ref(true)
    const isForgotten = ref(false)
    const isThankYouAfterForgotten = ref(false)
    const userEmail = ref('')
    const createAccount = ref(false)
    const rememberMe = ref(false)
    const { register, login, loading, error: userError, user } = useUser()
    const forgotPasswordError = ref(false)
    const forgotPasswordLoading = ref(false)
    const { request } = useForgotPassword()
    const { send: sendNotification } = useUiNotification()
    const router = useRouter()
    const context = useContext()
    // const { request } = useForgotPassword()
    // const { request, error: forgotPasswordError, loading: forgotPasswordLoading } = useForgotPassword();

    const error = reactive({
      login: null,
      register: null
    })
    const resetErrorValues = () => {
      error.login = null
      error.register = null
    }
    const createAccounts = () =>{
    window.uetq = window.uetq || []
    window.uetq.push('event', 'Create an account', {})
    }

    const barTitle = computed(() => {
      if (isLogin.value) {
        return 'Sign in'
      } else if (isForgotten.value || isThankYouAfterForgotten.value) {
        return 'Reset Password'
      }
      return 'Register'
    })

    watch(isLoginModalOpen, () => {
      if (isLoginModalOpen) {
        form.value = {}
        resetErrorValues()
      }
    })

    const setIsLoginValue = (value) => {
      resetErrorValues()
      isLogin.value = value
    }

    const setIsForgottenValue = (value) => {
      resetErrorValues()
      isForgotten.value = value
      isLogin.value = !value
    }

    const handleForm = (fn) => async () => {
      resetErrorValues()
      await fn({ user: form.value })
      if (user.value.error && user.value.error !== '') {
        if (user.value.error === 'Unidentified customer') {
          user.value.error = 'Invalid email id or password!'
        } else if (user.value.error === 'Email has already been taken') {
          user.value.error =
            'This email address is already associated with an account. If this account is yours, you can reset your password'
        }
        sendNotification({
          key: 'login_failed',
          message: user.value.error,
          type: 'danger',
          title: 'Failed!'
        })
      } else if (user.value.token && user.value.token === 'forgotPassword') {
        sendNotification({
          key: 'link_sent',
          message:
            'Reset password link has been successfully sent to ' +
            form.value.username,
          type: 'success',
          icon: 'check',
          title: 'linkSent!'
        })
        isForgotPassword.value = false
        isLogin.value = true
      } else if (user.value.token && user.value.token === 'SignUpSuccess') {
        sendNotification({
          key: 'signup_success',
          message: 'Your registration is successfully done',
          type: 'success',
          icon: 'check',
          title: 'Sign Up Success!'
        })
        form.value = {}
        if (process.client) {
          document.querySelector('button.back-to-login').click()
        }
      } else {
        toggleLoginModal()
        sendNotification({
          key: 'login_success',
          message: 'You are successfully logged in',
          type: 'success',
          title: 'Success!',
          icon: 'check'
        })
        router.push(context.app.localePath('/my-account'))
      }
    }

    const closeModal = () => {
      setIsForgottenValue(false)
      toggleLoginModal()
      isThankYouAfterForgotten.value = false
    }

    const handleRegister = () => handleForm(register)()

    const handleLogin = () => handleForm(login)()

    const handleForgotten = async () => {
      userEmail.value = form.value.username
      await request({ email: userEmail.value })

      if (!forgotPasswordError.value.request) {
        isThankYouAfterForgotten.value = true
        isForgotten.value = false
      }
    }

    return {
      form,
      error,
      userError,
      loading,
      isLogin,
      createAccount,
      createAccounts,
      rememberMe,
      isLoginModalOpen,
      toggleLoginModal,
      handleLogin,
      handleRegister,
      setIsLoginValue,
      isForgotten,
      setIsForgottenValue,
      forgotPasswordError,
      forgotPasswordLoading,
      handleForgotten,
      closeModal,
      isThankYouAfterForgotten,
      userEmail,
      barTitle
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  --font-family--secondary: var(--font-family--primary);
  --modal-index: 999;
  --overlay-z-index: 999;
}
.form {
  margin-top: var(--spacer-sm);
  &__element {
    margin: 0 0 var(--spacer-xl) 0;
  }
}

.action {
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // margin: var(--spacer-xl) 0 var(--spacer-xl) 0;
  font: var(--font-weight--light) var(--font-size--base) / 1.6
    var(--font-family--secondary);
  & > * {
    margin: 0 0 0 var(--spacer-xs);
  }
}
// .action {
//   margin: var(--spacer-xl) 0 var(--spacer-xl) 0;
// }
// .checkbox {
//   margin-bottom: var(--spacer-2xl);
// }
.checkbox {
  float: left;
  margin-bottom: 30px;
}
::v-deep .sf-modal__container {
  border-radius: 5px;
}
::v-deep .form__element {
  margin: 0 0 10px 0;
}
.sf-button {
  --button-border-radius: 5px;
}
.bottom {
  text-align: center;
  margin-bottom: var(--spacer-lg);
  font-size: var(--h3-font-size);
  font-weight: var(--font-weight--semibold);
  font-family: var(--font-family--secondary);
  &__paragraph {
    color: var(--c-primary);
    margin: 0 0 var(--spacer-base) 0;
    @include for-desktop {
      margin: 0;
    }
  }
}
.thank-you {
  &__paragraph {
    &--bold {
      font-weight: var(--font-weight--semibold);
    }
  }
}
</style>
