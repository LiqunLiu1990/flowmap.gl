/*
 * Copyright 2018 Teralytics
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import resolve from 'rollup-plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

const pkg = require('./package.json')

export default {
  input: './dist-esm/index.js',
  output: [
    { file: './dist-umd/bundle.js', name: 'flowmap.gl', format: 'umd', sourcemap: true },
  ],
  external: [ 'deck.gl', 'luma.gl', 'react', 'react-dom' ],
  plugins: [
    resolve({
      browser: true,
      jsnext: true,
    }),
    uglify(),
  ],
}