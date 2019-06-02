module.exports = {
    configureWebpack: { 
      resolve: { 
        alias: {
          "@": path.resolve(__dirname, "./src"),
          "@common": path.resolve(__dirname, "./src/common"),
          "@api": path.resolve(__dirname, "./src/api"),
          "@components": path.resolve(__dirname, "./src/components")
        }
      }
    }
}