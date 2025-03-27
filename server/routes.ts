import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTrialLeadSchema, insertContactInquirySchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from 'zod-validation-error';

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for trial lead submissions
  app.post("/api/trial-leads", async (req, res) => {
    try {
      const validatedData = insertTrialLeadSchema.parse(req.body);
      const createdLead = await storage.createTrialLead(validatedData);
      res.status(201).json({
        message: "Trial lead created successfully",
        data: createdLead
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          message: "Validation error",
          errors: validationError.message
        });
      } else {
        console.error("Error creating trial lead:", error);
        res.status(500).json({
          message: "An error occurred while creating the trial lead"
        });
      }
    }
  });

  app.get("/api/trial-leads", async (req, res) => {
    try {
      const leads = await storage.getTrialLeads();
      res.status(200).json(leads);
    } catch (error) {
      console.error("Error fetching trial leads:", error);
      res.status(500).json({
        message: "An error occurred while fetching trial leads"
      });
    }
  });

  app.get("/api/trial-leads/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          message: "Invalid ID format"
        });
      }
      
      const lead = await storage.getTrialLead(id);
      if (!lead) {
        return res.status(404).json({
          message: "Trial lead not found"
        });
      }
      
      res.status(200).json(lead);
    } catch (error) {
      console.error("Error fetching trial lead:", error);
      res.status(500).json({
        message: "An error occurred while fetching the trial lead"
      });
    }
  });

  // API routes for contact inquiries
  app.post("/api/contact-inquiries", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const createdInquiry = await storage.createContactInquiry(validatedData);
      res.status(201).json({
        message: "Contact inquiry created successfully",
        data: createdInquiry
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          message: "Validation error",
          errors: validationError.message
        });
      } else {
        console.error("Error creating contact inquiry:", error);
        res.status(500).json({
          message: "An error occurred while creating the contact inquiry"
        });
      }
    }
  });

  app.get("/api/contact-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.status(200).json(inquiries);
    } catch (error) {
      console.error("Error fetching contact inquiries:", error);
      res.status(500).json({
        message: "An error occurred while fetching contact inquiries"
      });
    }
  });

  app.get("/api/contact-inquiries/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          message: "Invalid ID format"
        });
      }
      
      const inquiry = await storage.getContactInquiry(id);
      if (!inquiry) {
        return res.status(404).json({
          message: "Contact inquiry not found"
        });
      }
      
      res.status(200).json(inquiry);
    } catch (error) {
      console.error("Error fetching contact inquiry:", error);
      res.status(500).json({
        message: "An error occurred while fetching the contact inquiry"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
