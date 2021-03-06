module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: 'AKIAWOSZWSMNWDN6AXUP',
      secretAccessKey: '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',
      region: 'eu-north-1',
      params: {
        Bucket: 'strapi-admin-bucket',
      },
    },
  },
});
