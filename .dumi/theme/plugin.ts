
import routesPlugin from './plugins/routes';
import semanticMdPlugin from './plugins/semantic-md';
import llmsPlugin from './plugins/llms';

export default async function plugin(api: any) {
  routesPlugin(api);
  semanticMdPlugin(api);
  llmsPlugin(api);
}
