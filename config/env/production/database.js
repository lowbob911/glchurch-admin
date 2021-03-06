module.exports = ({ env }) => {
  return {
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: 'mongodb://admin:QAsq6lZd@strapi-shard-00-00.mwb6t.mongodb.net:27017,strapi-shard-00-01.mwb6t.mongodb.net:27017,strapi-shard-00-02.mwb6t.mongodb.net:27017?ssl=true'
      },
      options: {
        ssl: true
      }
    }
  }
}};
