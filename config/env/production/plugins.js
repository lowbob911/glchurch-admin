module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: 'AKIAWOSZWSMNYPJZLAJI',
      secretAccessKey: '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',
      region: 'eu-north-1',
      params: {
        Bucket: 'strapi-admin-bucket',
      },
    },
  },
});
