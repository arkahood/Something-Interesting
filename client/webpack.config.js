const path = require("path");

module.exports={
    mode: "development", 
    entry: "../src/index.js", 
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
    },
    target: "web",
    devServer: {
        port: "3000",
        static: ["./public"],
        open: true,
        hot: true ,
        // For enabling routing 
        historyApiFallback: true,
        liveReload: true,
        proxy: {
            '/user': {
                 target: 'http://localhost:3000',
                 router: () => 'http://localhost:9000',
                 logLevel: 'debug'
            }
         }
    },
    resolve: {
        extensions: ['.js','.jsx','.json'] 
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
                exclude: /node_modules/, //folder to be excluded
                use:  'babel-loader' //loader which we are going to use
            }
        ]
    }
}