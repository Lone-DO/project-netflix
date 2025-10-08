import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const profile = sqliteTable('profiles', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  profileImageSrc: text(),
  requiresAuth: int().notNull().$default(() => 0),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});

export type profile = typeof profile.$inferSelect;
