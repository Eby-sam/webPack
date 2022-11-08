const webpack = require('webpack');
const path = require('path'); // module nod utilisable avec webpack , sert a resoudre les chemins relatifs
const  MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // point d'entrée javascript; fichier qui contiendra vos includes
    entry: {
        front: './assets/js/front/main.js',
        admin: "./assets/js/admin/main.js"
    },
    // objet contenant le chemin de sortie , ainsi que le nom a donner au fichier
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: '[name]-bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            import : true,
                            url : true,
                            sourceMap : true,
                        }
                    }
                ],
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),
    ]

};