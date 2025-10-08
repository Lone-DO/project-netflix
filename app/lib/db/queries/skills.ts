import db from '~/lib/db';

export async function findSkills() {
  return db.query.skill.findMany();
}
