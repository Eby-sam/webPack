const webpack = require('webpack');
const path = require('path'); // module nod utilisable avec webpack , sert a resoudre les chemins relatifs
const  MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');



module.exports = (env, argv) =>  {

    const configuration = argv.mode === 'development' ? development : production();

    return {
        // point d'entrée javascript; fichier qui contiendra vos includes
        entry: {
            front: './assets/js/front/main.js',
            admin: "./assets/js/admin/main.js"
        },
        // objet contenant le chemin de sortie , ainsi que le nom a donner au fichier
        output: {
            path: path.resolve(__dirname, 'public/build'),
            filename: './js/[name]-bundle.js',
            publicPath: "/build/",
            clean: true,
        },

        ...configuration,

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
                                import: true,
                                sourceMap: true,
                            }
                        },
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'image/[name][ext]',
                    },
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }

            ]
        },

        optimization: {
            minimize: true,
            minimizer: [
                new CssMinimizerPlugin(),
                new TerserPlugin(),
            ]
        },

        plugins: [
            new MiniCssExtractPlugin({
                filename: './css/[name].css',
            })

        ]

    }

}


const development = {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', {
                        loader: 'css-loader',
                        options: {
                            import: true,
                            sourceMap: true,
                        }
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'image/[name][ext]',
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
            }

        ]
    },
    optimization: {
        minimize: false,
    }
}

const configuration = {

}