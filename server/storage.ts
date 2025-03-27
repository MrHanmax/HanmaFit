import { 
  users, type User, type InsertUser,
  trialLeads, type TrialLead, type InsertTrialLead,
  contactInquiries, type ContactInquiry, type InsertContactInquiry
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
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private trialLeads: Map<number, TrialLead>;
  private contactInquiries: Map<number, ContactInquiry>;
  currentId: number;
  currentTrialLeadId: number;
  currentContactInquiryId: number;

  constructor() {
    this.users = new Map();
    this.trialLeads = new Map();
    this.contactInquiries = new Map();
    this.currentId = 1;
    this.currentTrialLeadId = 1;
    this.currentContactInquiryId = 1;
  }

  // User methods (original)
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Trial lead methods
  async createTrialLead(lead: InsertTrialLead): Promise<TrialLead> {
    const id = this.currentTrialLeadId++;
    const createdAt = new Date();
    const trialLead: TrialLead = { ...lead, id, createdAt };
    this.trialLeads.set(id, trialLead);
    return trialLead;
  }
  
  async getTrialLeads(): Promise<TrialLead[]> {
    return Array.from(this.trialLeads.values());
  }
  
  async getTrialLead(id: number): Promise<TrialLead | undefined> {
    return this.trialLeads.get(id);
  }
  
  // Contact inquiry methods
  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = this.currentContactInquiryId++;
    const createdAt = new Date();
    const contactInquiry: ContactInquiry = { ...inquiry, id, createdAt };
    this.contactInquiries.set(id, contactInquiry);
    return contactInquiry;
  }
  
  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }
  
  async getContactInquiry(id: number): Promise<ContactInquiry | undefined> {
    return this.contactInquiries.get(id);
  }
}

export const storage = new MemStorage();
