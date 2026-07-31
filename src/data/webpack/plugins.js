export const chapter = {
  slug: "webpack-plugins",
  title: "Plugins",
  description: "Gunakan plugins untuk optimasi, HTML generation, dan environment variables.",
  icon: "SiWebpack",
  color: "#8DD6F9",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["webpack-loaders"],
  tags: ["webpack", "plugins", "html", "define"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Essential Plugins

### HtmlWebpackPlugin
\`\`\`bash
npm install -D html-webpack-plugin
\`\`\`

\`\`\`javascript
import HtmlWebpackPlugin from 'html-webpack-plugin';

plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'My App',
        favicon: './src/favicon.ico',
        minify: true
    })
]
\`\`\`

### MiniCssExtractPlugin
\`\`\`bash
npm install -D mini-css-extract-plugin
\`\`\`

\`\`\`javascript
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

plugins: [
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
    })
]

// Ganti style-loader
{
    test: /\\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader']
}
\`\`\`

### DefinePlugin
\`\`\`javascript
import webpack from 'webpack';

plugins: [
    new webpack.DefinePlugin({
        'process.env.API_URL': JSON.stringify('https://api.example.com'),
        'APP_VERSION': JSON.stringify('1.0.0')
    })
]
\`\`\`

### CopyWebpackPlugin
\`\`\`bash
npm install -D copy-webpack-plugin
\`\`\`

\`\`\`javascript
import CopyWebpackPlugin from 'copy-webpack-plugin';

plugins: [
    new CopyWebpackPlugin({
        patterns: [
            { from: 'public', to: 'public' }
        ]
    })
]
\`\`\`

### BundleAnalyzerPlugin
\`\`\`bash
npm install -D webpack-bundle-analyzer
\`\`\`

\`\`\`javascript
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

plugins: [
    new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false
    })
]
\`\`\`

## Production Plugins

\`\`\`javascript
plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.DefinePlugin({ ... })
]
\`\`\`
  `,

  quiz: [
    { question: "HtmlWebpackPlugin?", options: ["CSS extract", "Generate HTML with bundles", "Minify", "Copy files"], correctAnswer: 1 },
    { question: "MiniCssExtractPlugin?", options: ["Inject CSS", "Extract CSS to separate file", "Minify CSS", "Remove CSS"], correctAnswer: 1 }
  ],

  codeExamples: []
};