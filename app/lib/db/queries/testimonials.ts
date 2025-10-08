import db from '~/lib/db';

export async function findTestimonials() {
  return db.query.testimonial.findMany();
}
