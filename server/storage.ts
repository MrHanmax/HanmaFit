import { 
  users, type User, type InsertUser,
  trialLeads, type TrialLead, type InsertTrialLead,
  contactInquiries, type ContactInquiry, type InsertContactInquiry,
  welcomeMessages, type WelcomeMessage, type InsertWelcomeMessage
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods (original)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Trial lead methods
  createTrialLead(lead: InsertTrialLead): Promise<TrialLead>;
  getTrialLeads(): Promise<TrialLead[]>;
  getTrialLead(id: number): Promise<TrialLead | undefined>;
  
  // Contact inquiry methods
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  getContactInquiry(id: number): Promise<ContactInquiry | undefined>;
  
  // Welcome message methods
  createWelcomeMessage(message: InsertWelcomeMessage): Promise<WelcomeMessage>;
  getWelcomeMessages(): Promise<WelcomeMessage[]>;
  getWelcomeMessage(id: number): Promise<WelcomeMessage | undefined>;
  getWelcomeMessageByName(name: string): Promise<WelcomeMessage | undefined>;
}

import { db } from "./db";
import { eq } from "drizzle-orm";

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  // Trial lead methods
  async createTrialLead(lead: InsertTrialLead): Promise<TrialLead> {
    const [trialLead] = await db
      .insert(trialLeads)
      .values({
        ...lead,
        createdAt: new Date()
      })
      .returning();
    return trialLead;
  }
  
  async getTrialLeads(): Promise<TrialLead[]> {
    return await db.select().from(trialLeads);
  }
  
  async getTrialLead(id: number): Promise<TrialLead | undefined> {
    const [trialLead] = await db.select().from(trialLeads).where(eq(trialLeads.id, id));
    return trialLead || undefined;
  }
  
  // Contact inquiry methods
  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const [contactInquiry] = await db
      .insert(contactInquiries)
      .values({
        ...inquiry,
        createdAt: new Date()
      })
      .returning();
    return contactInquiry;
  }
  
  async getContactInquiries(): Promise<ContactInquiry[]> {
    return await db.select().from(contactInquiries);
  }
  
  async getContactInquiry(id: number): Promise<ContactInquiry | undefined> {
    const [contactInquiry] = await db.select().from(contactInquiries).where(eq(contactInquiries.id, id));
    return contactInquiry || undefined;
  }
  
  // Welcome message methods
  async createWelcomeMessage(message: InsertWelcomeMessage): Promise<WelcomeMessage> {
    const [welcomeMessage] = await db
      .insert(welcomeMessages)
      .values({
        ...message,
        createdAt: new Date()
      })
      .returning();
    return welcomeMessage;
  }
  
  async getWelcomeMessages(): Promise<WelcomeMessage[]> {
    return await db.select().from(welcomeMessages);
  }
  
  async getWelcomeMessage(id: number): Promise<WelcomeMessage | undefined> {
    const [welcomeMessage] = await db.select().from(welcomeMessages).where(eq(welcomeMessages.id, id));
    return welcomeMessage || undefined;
  }
  
  async getWelcomeMessageByName(name: string): Promise<WelcomeMessage | undefined> {
    // Since we can't do case-insensitive comparisons easily in SQL without using ILIKE (which might not be available in all databases)
    // we'll fetch all messages and then filter in JS (not optimal for large datasets)
    const messages = await db.select().from(welcomeMessages);
    return messages.find(message => message.name.toLowerCase() === name.toLowerCase()) || undefined;
  }
}

export const storage = new DatabaseStorage();
