import { createPinia, storeToRefs } from 'pinia';

import userInfoStore from './module/userInfo';
const store = createPinia();
export { userInfoStore, store, storeToRefs };
