import { findSkills } from '~/lib/db/queries';

export default defineEventHandler(async () => {
  return findSkills();
});
