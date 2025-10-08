CREATE TABLE `skills` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`group` text NOT NULL,
	`projects` text,
	`image_src` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
