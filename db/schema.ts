import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const inquiries = sqliteTable('inquiries', {
 id:text('id').primaryKey(), reference:text('reference').notNull(), company:text('company').notNull(), program:text('program').notNull(), goals:text('goals').notNull(), firstName:text('first_name').notNull(), lastName:text('last_name').notNull(), email:text('email').notNull(), phone:text('phone').notNull(), smsConsent:integer('sms_consent',{mode:'boolean'}).notNull(), consentVersion:text('consent_version').notNull(), createdAt:text('created_at').notNull(),
});
