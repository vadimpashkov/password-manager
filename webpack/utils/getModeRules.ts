import { isDev } from './isDev';
import { webpackDevRules, webpackProdRules } from '../mods';

export const getModeRules = () => (isDev ? webpackDevRules : webpackProdRules);
