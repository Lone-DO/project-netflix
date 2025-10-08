import { findProfiles } from '~/lib/db/queries';

export default defineEventHandler(async () => {
  return findProfiles();
});
