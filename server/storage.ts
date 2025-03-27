import { 
  users, User, InsertUser, 
  ContactSubmission, InsertContact, 
  TrialRequest, InsertTrial 
} from "@shared/schema";

// Interface for all storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form operations
  createContactSubmission(data: InsertContact): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Trial request operations
  createTrialRequest(data: InsertTrial): Promise<TrialRequest>;
  getAllTrialRequests(): Promise<TrialRequest[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private trialRequests: Map<number, TrialRequest>;
  currentUserId: number;
  currentContactId: number;
  currentTrialId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.trialRequests = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentTrialId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact form methods
  async createContactSubmission(data: InsertContact): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const now = new Date().toISOString();
    
    const submission: ContactSubmission = { 
      ...data, 
      id, 
      createdAt: now 
    };
    
    this.contactSubmissions.set(id, submission);
    return submission;
  }
  
  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
  
  // Trial request methods
  async createTrialRequest(data: InsertTrial): Promise<TrialRequest> {
    const id = this.currentTrialId++;
    const now = new Date().toISOString();
    
    const trial: TrialRequest = { 
      ...data, 
      id, 
      createdAt: now 
    };
    
    this.trialRequests.set(id, trial);
    return trial;
  }
  
  async getAllTrialRequests(): Promise<TrialRequest[]> {
    return Array.from(this.trialRequests.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }
}

export const storage = new MemStorage();
