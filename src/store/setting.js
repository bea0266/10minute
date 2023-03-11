import { defineStore } from 'pinia';

export const useSettingStore = defineStore('setting', {
    state: () => {
        return { settingStudyTime : '00:10:00' }
    },
    actions: {
        setStudyTime(value) {
            this.settingStudyTime = value;
        }
    },

})