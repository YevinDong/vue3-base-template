import { Router } from 'vue-router';
import { setDocumentTitle } from '@/utils';
import { get_env } from '@/config';
export default (router: Router) => {
    router.beforeEach((to, from) => {
        if (window.location.href.indexOf('replace_title') !== -1) {
            return;
        }
        type TitleType = string | undefined;
        const title = (to.meta.title as TitleType) || (get_env('title') as TitleType) || '';
        setDocumentTitle(title);
    });
};
