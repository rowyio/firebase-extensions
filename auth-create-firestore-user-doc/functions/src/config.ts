interface IConfig {
  usersCollectionPath: string;
  fieldsToPopulate: string[];
}

const config: IConfig = {
  usersCollectionPath: process.env.USERS_COLLECTION_PATH!,
  fieldsToPopulate: process.env.FIELDS_TO_POPULATE!.split(','),
};

export default config;
