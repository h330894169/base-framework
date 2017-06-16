/**
 * Created by jerryli on 2017/6/16.
 */

module.exports = ({ file, options, env }) => ({
    parser: file.extname === '.sss' ? 'sugarss' : false,
    plugins: {
        'autoprefixer': env == 'production' ? options.autoprefixer : false,
    }
})