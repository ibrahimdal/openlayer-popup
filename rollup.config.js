import babel from 'rollup-plugin-babel';

module.exports = {
    entry: 'src/openlayer-popup.js',
    targets: [
        {
            dest: 'dist/openlayer-popup.js',
            format: 'umd',
            moduleName: 'Popup'
        }
    ],
    plugins: [
        require('rollup-plugin-node-resolve')(),
        require('rollup-plugin-commonjs')(),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        })
    ],
    external: function(id) {
        return /ol\//.test(id);
    },
    globals: {
        'ol/Map': 'ol.Map',
        'ol/Overlay': 'ol.Overlay'
    }
};