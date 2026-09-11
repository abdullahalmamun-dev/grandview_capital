CREATE TABLE `inquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`reference` text NOT NULL,
	`company` text NOT NULL,
	`program` text NOT NULL,
	`goals` text NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text NOT NULL,
	`sms_consent` integer NOT NULL,
	`consent_version` text NOT NULL,
	`created_at` text NOT NULL
);
