import { isMobile } from '@/utils/index';
if (isMobile()) import('./prefix.js').then(module => module.init());
