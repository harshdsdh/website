// In your webpack.config.js file
module.exports = {
    resolve: {
        fallback: {
            path: require.resolve("path-browserify"),
        },
    },
};