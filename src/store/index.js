import { defineStore } from 'pinia';

export const useIndexStore = defineStore('index', {
    state: () => {
        return { 
           loginUser: {
               id: 'admin',
               name: '관리자'
           }    
        }
    },
    
    actions: {
    
    }
    
});