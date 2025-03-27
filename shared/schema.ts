import { pgTable, text, serial, integer, boolean, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema (original, unchanged)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Trial leads schema
export const trialLeads = pgTable("trial_leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  classInterest: text("class_interest"),
  howHeard: text("how_heard"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertTrialLeadSchema = createInsertSchema(trialLeads).pick({
  name: true,
  email: true,
  phone: true,
  classInterest: true,
  howHeard: true,
});

export type InsertTrialLead = z.infer<typeof insertTrialLeadSchema>;
export type TrialLead = typeof trialLeads.$inferSelect;

// Contact inquiries schema
export const contactInquiries = pgTable("contact_inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  serviceInterest: text("service_interest"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactInquirySchema = createInsertSchema(contactInquiries).pick({
  name: true,
  email: true,
  phone: true,
  serviceInterest: true,
  message: true,
});

export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
export type ContactInquiry = typeof contactInquiries.$inferSelect;

// Welcome message generator schema
export const welcomeMessages = pgTable("welcome_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email"),  // Optional email for sending welcome message directly to user
  fitnessGoals: text("fitness_goals").notNull(),
  preferredWorkoutType: text("preferred_workout_type").notNull(),
  experienceLevel: text("experience_level").notNull(),
  personalMessage: text("personal_message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertWelcomeMessageSchema = createInsertSchema(welcomeMessages).pick({
  name: true,
  email: true,
  fitnessGoals: true,
  preferredWorkoutType: true,
  experienceLevel: true,
  personalMessage: true,
});

export type InsertWelcomeMessage = z.infer<typeof insertWelcomeMessageSchema>;
export type WelcomeMessage = typeof welcomeMessages.$inferSelect;
