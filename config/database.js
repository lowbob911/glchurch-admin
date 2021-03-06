module.exports = ({ env }) => {
  return {
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: 'mongodb://127.0.0.1:27017/glchurch'
      },
      options: {
        ssl: false
      }
    }
  }
}};
