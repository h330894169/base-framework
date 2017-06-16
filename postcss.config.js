module.exports = {
    /**
    plugins: {
        'autoprefixer': {},
    }
     **/
    plugins: [
        require('autoprefixer')({
            browsers: ['last 15 versions']
        })
    ]

}