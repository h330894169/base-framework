/**
 * Created by jerryli on 2017/6/19.
 */
const ExtractTextPlugin = require("extract-text-webpack-plugin")
/***
 *
 * @param options{sourceMap,extract,publicPath}
 * @returns {{scss: [string,string,string,string]}}
 */
exports.styleLoaders = options => {

    let generateLoaders = loaders => {
        if(options.sourceMap){
            loaders = loaders.map(loader=>{
                if(loader === 'postcss-loader'){
                    loader = `${loader}?sourceMap`
                }
                return loader;
            });
        }
        if (options.extract) {
            return ExtractTextPlugin.extract({use:loaders, fallback: 'style-loader',publicPath : options.publicPath || ""});
        }
        loaders.unshift('style-loader');
        return loaders;
    }

    let styleMap = {
        scss: generateLoaders(['css-loader?importLoaders=1','postcss-loader','sass-loader']),
        sass: generateLoaders(['css-loader?importLoaders=1','postcss-loader','sass-loader?indentedSyntax']),
        stylus: generateLoaders(['css-loader?importLoaders=1','postcss-loader','stylus-loader']),
        styl: generateLoaders(['css-loader?importLoaders=1','postcss-loader','stylus-loader']),
        css: generateLoaders([ 'css-loader?importLoaders=1','postcss-loader'])
    };
    const result = [];
    for(extension in styleMap) {
        result.push({
            test: new RegExp('\\.' + extension + '$'),
            use: styleMap[extension]
        });
    }

    return result;
}