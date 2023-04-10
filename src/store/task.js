import { defineStore } from 'pinia';

export const useTaskStore = defineStore('task', {
    state: () => {
        return { 
            tasks: [
                { 
                    id: 1,
                    title: 'HTML 공부',
                    description: '즐거운 웹 개발',
                    importance: false,
                  },
                  { 
                    id: 2,
                    title: 'HTML 공부',
                    description: '즐거운 웹 개발',
                    importance: false,
                  },
                  { 
                    id: 3,
                    title: 'HTML 공부',
                    description: '즐거운 웹 개발',
                    importance: false,
                  },
                  { 
                    id: 4,
                    title: 'HTML 공부',
                    description: '즐거운 웹 개발',
                    importance: false,
                  },
                  { 
                    id: 5,
                    title: 'HTML 공부',
                    description: '즐거운 웹 개발',
                    importance: false,
                  },
                  { 
                    id: 6,
                    title: 'HTML 공부',
                    description: '즐거운 웹 개발',
                    importance: false,
                  },

            ],
            sideTasks: [
                { 
                    id: 1,
                    title: 'HTML 공부',
                    description: '즐거운 웹 개발',
                    importance: false,
                  },
                  { 
                    id: 2,
                    title: 'css 공부',
                    description: '즐거운 웹 개발',
                    importance: false,
                  },
                  { 
                    id: 3,
                    title: 'JS 공부',
                    description: '즐거운 웹 개발',
                    importance: false,
                  }
            ],
            toggleSide : false
        }
    },
    actions: {
        setSideToggle(state) {
            this.toggleSide = state;
        }
    },

});