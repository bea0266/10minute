<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMenuStore } from './store/menu';
import { useIndexStore } from './store';
import { changeRouterView } from '@/util/utils';
import Menu from '@/components/Menu.vue';
import Header from '@/components/Header.vue';

const route = useRoute()
const router = useRouter();
const currentMenu = computed(() => useMenuStore().currentMenu);
const loginUser = computed(() => useIndexStore().loginUser);

onMounted(() => {
  router.replace('Task');
});

</script>

<template>
    <Header @showHeaderLink="changeRouterView(router, currentMenu)"></Header>
    <Menu @showMenuLink="changeRouterView(router, currentMenu)"></Menu>
    <div id="cont">
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
@import "./assets/scss/common.scss";
@import "./assets/scss/task.scss";
@import "./assets/scss/time.scss";

    
</style>
