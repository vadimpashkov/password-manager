import { Configuration } from 'webpack';
import { isDev } from './isDev';
import { webpackDevConfig, webpackProdConfig } from '../mods';

export const getModeConfig = (): Configuration => (isDev ? webpackDevConfig : webpackProdConfig);
