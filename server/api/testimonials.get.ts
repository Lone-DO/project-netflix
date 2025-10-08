import { findTestimonials } from '~/lib/db/queries';

export default defineEventHandler(async () => {
  return findTestimonials();
});
