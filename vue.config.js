module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/schedule-calendar-cuc/dist/' : './',
  productionSourceMap: false,
  pwa: {
    manifestOptions: {
      icons: [],
    },
    iconPaths: {
      favicon32: './favicon.ico',
      favicon16: './favicon.ico',
      appleTouchIcon: './favicon.ico',
      maskIcon: './favicon.ico',
      msTileImage: './favicon.ico',
    },
  },
};
