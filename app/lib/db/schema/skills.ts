import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const skill = sqliteTable('skills', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  group: text().notNull(),
  projects: text(),
  imageSrc: text().notNull(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});

/** TODO: Add relations to experiences, projects */
export type skill = typeof skill.$inferSelect;
