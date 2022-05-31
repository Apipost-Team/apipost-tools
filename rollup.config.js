import typescript from 'rollup-plugin-typescript';


export default {
  name:'apipostSampleModule',
  input: 'src/index.ts',
  output: {
    name:'apipostSampleModule',
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    typescript(),
  ]
}

