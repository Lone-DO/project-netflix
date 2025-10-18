import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const testimonial = sqliteTable('testimonials', {
  id: int().primaryKey({ autoIncrement: true }),
  linkedIn: text(),
  date: text().notNull(),
  name: text().notNull(),
  imageSrc: text(),
  review: text().notNull(),
  relationship: text().notNull(),
  position: text().notNull(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});

export type testimonial = typeof testimonial.$inferSelect;
