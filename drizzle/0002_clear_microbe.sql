PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_histoires` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`synopsis` text NOT NULL,
	`creator_id` text,
	`theme` text,
	`musique` text,
	`animation` text
);
--> statement-breakpoint
INSERT INTO `__new_histoires`("id", "title", "synopsis", "creator_id", "theme", "musique", "animation") SELECT "id", "title", "synopsis", "creator_id", "theme", "musique", "animation" FROM `histoires`;--> statement-breakpoint
DROP TABLE `histoires`;--> statement-breakpoint
ALTER TABLE `__new_histoires` RENAME TO `histoires`;--> statement-breakpoint
PRAGMA foreign_keys=ON;