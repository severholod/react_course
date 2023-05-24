import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

export function buildCssLoaders(isDev: boolean): webpack.RuleSetRule {
    const localIdentName: string = isDev
        ? '[path][name]__[local]--[hash:base64:8]'
        : '[hash:base64:8]';

    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes('.module.'),
                        localIdentName,
                    },
                },
            },
            'sass-loader',
        ],
    };
}
