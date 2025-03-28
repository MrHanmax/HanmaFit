import { 
  users, type User, type InsertUser,
  trialLeads, type TrialLead, type InsertTrialLead,
  contactInquiries, type ContactInquiry, type InsertContactInquiry,
  welcomeMessages, type WelcomeMessage, type InsertWelcomeMessage
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

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

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createTrialLead(lead: InsertTrialLead): Promise<TrialLead> {
    const [trialLead] = await db.insert(trialLeads)
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
    return trialLead;
  }

  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const [contactInquiry] = await db.insert(contactInquiries)
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
    return contactInquiry;
  }

  async createWelcomeMessage(message: InsertWelcomeMessage): Promise<WelcomeMessage> {
    const [welcomeMessage] = await db.insert(welcomeMessages)
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
    return welcomeMessage;
  }

  async getWelcomeMessageByName(name: string): Promise<WelcomeMessage | undefined> {
    const [welcomeMessage] = await db.select().from(welcomeMessages).where(eq(welcomeMessages.name, name));
    return welcomeMessage;
  }
}

export const storage = new DatabaseStorage();