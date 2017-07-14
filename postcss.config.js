module.exports = {
    /**
    plugins: {
        'autoprefixer': {},
    }
     **/
    plugins: [
        require('autoprefixer')({
            browsers: ['last 30 versions', 'ie > 8']
        })
    ]

}