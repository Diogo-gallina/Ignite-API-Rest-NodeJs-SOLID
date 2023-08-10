import { rollup } from 'rollup';
import exclude from 'rollup-plugin-exclude';

export default {

  plugins: [
    exclude({
      exclude: '**/*.spec.ts',
    }),
  ],
};
