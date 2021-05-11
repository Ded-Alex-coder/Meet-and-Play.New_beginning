<template>
  <div>
    <header class="header-mobile side-bar_header">
      <button type="button" class="burger-btn" @click="onClick">
        <span></span>
      </button>
      <h2 class="header-title">Meet & Play</h2>
    </header>
    <template>
      <nav
        class="side-bar_navigation flex flex-grow flex-col items-center font-medium text-base"
      >
        <div class="w-9/12">
          <ul class="list-none mt-11">
            <NavItem
              v-for="(navItem, key) in navItemMenu"
              :to="navItem.to"
              :key="`navItem-${key}`"
            >
              <svg
                width="48px"
                height="48px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path :d="navItem.svg" />
              </svg>
              {{ navItem.name }}
            </NavItem>
          </ul>
          <ul class="list-none my-11">
            <NavBottom
              v-for="(navBottom, key) in navBottomMenu"
              :to="navBottom.to"
              :key="`navBottom-${key}`"
            >
              <svg
                width="48px"
                height="48px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path :d="navBottom.svg1" :stroke-width="navBottom.svgST" />
                <path
                  :d="navBottom.svg"
                  :stroke-width="navBottom.svgST"
                  :fill="navBottom.fill"
                  :stroke="navBottom.stroke"
                />
              </svg>
              {{ navBottom.name }}
            </NavBottom>
          </ul>
        </div>
        <span class="mx-auto mt-auto mb-5 text-xs"
          >Copyright&nbsp;&copy;&nbsp;{{ year }}&nbsp;Meet & Play</span
        >
      </nav>
    </template>
  </div>
</template>

<script>
export default {
  component: {
    NavItem: () => import('./Layouts/NavItem'),
    NavBottom: () => import('./Layouts/NavBottom'),
  },

  props: {
    navItemMenu: {
      type: Array,
      default: () => [],
    },
    navBottomMenu: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    year() {
      return new Date().getFullYear()
    },
  },

  methods: {
    onClick() {
      document.querySelector('.burger-btn').classList.toggle('active')
    },
  },
}
</script>

<style lang="scss">
@import 'assets/styles/mobile_haeder.scss';
</style>
