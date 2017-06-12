var config = {
   entry: './main.js',

   output: {
      path:__dirname+'/',
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
         },

            {
             test: /\.css$/,
            loader: 'style-loader!css-loader'
          }
      ]
   }
}

module.exports = config;


// <Menu size='massive' inverted name="more events">
//   <Menu.Item name="know more">
//     Events
//   </Menu.Item>
//   <Menu.Menu size='massive' position='right'>
//   <Menu.Item name="know more" onClick={this.handleKnowMoore}>
//     <Popup
//       trigger={<Icon name='angle double right' />}
//       content='know more events'
//       />
//   </Menu.Item>
// </Menu.Menu>
// </Menu>
