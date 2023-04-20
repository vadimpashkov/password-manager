import { isDev } from './isDev';
import { webpackDevPlugins, webpackProdPlugins } from '../mods';

export const getModePlugins = () => (isDev ? webpackDevPlugins : webpackProdPlugins);
