CREATE TABLE `testimonials` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`linked_in` text,
	`date` text NOT NULL,
	`name` text NOT NULL,
	`profile_image_src` text,
	`review` text NOT NULL,
	`relationship` text NOT NULL,
	`position` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
