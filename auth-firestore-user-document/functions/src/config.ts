interface IConfig {
  usersCollectionPath: string;
  fieldsToPopulate: string[];
  backfillExistingUsers: boolean;
  location: string;
}

const config: IConfig = {
  usersCollectionPath: process.env.USERS_COLLECTION_PATH!,
  fieldsToPopulate: process.env.FIELDS_TO_POPULATE!.split(','),
  backfillExistingUsers: process.env.BACKFILL_EXISTING_USERS === 'true',
  location: process.env.FUNCTIONS_LOCATION!,
};

export default config;
