import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menu', {
    state: () => {
        return { 
            toggleMenu: false,
            currentMenu: 'Task',
        }
    },
    actions: {
        setMenuToggle(state) {
            this.toggleMenu = state;
        }
    },
    
});