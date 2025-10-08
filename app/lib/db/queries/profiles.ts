import db from '~/lib/db';

export async function findProfiles() {
  return db.query.profile.findMany();
}
