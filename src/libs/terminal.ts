import { getSearch } from '@/utils';
const Eruda = () => import('eruda');
const VConsole = () => import('vconsole');
async function getTerminal() {
    switch (getSearch('terminal')) {
        case 'vc':
            const vc = await VConsole();
            new (vc as any).default();
            break;
        case 'er':
            const eruda = await Eruda();
            eruda.init();
            break;
    }
}
if (getSearch('terminal')) getTerminal();
