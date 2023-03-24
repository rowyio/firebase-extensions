interface IConfig {
  usersCollectionPath: string;
}

const config: IConfig = {
  usersCollectionPath: process.env.USERS_COLLECTION_PATH!,
};

export default config;
