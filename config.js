const getConfig = () => {
  const PROD = process.env.PROD || false;

  return {
    port: process.env.PORT || 5000,

    gcloud: {
      projectId: process.env.GCLOUD_PROJECT || 'fashionm-1267',
    },
  };
};

export default getConfig();
