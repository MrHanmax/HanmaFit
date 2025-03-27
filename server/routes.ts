import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertTrialSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      const submission = await storage.createContactSubmission({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        service: validatedData.service,
        message: validatedData.message
      });
      
      res.status(201).json({ 
        success: true,
        message: "Contact form submitted successfully",
        data: submission
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false,
          message: "Validation error",
          errors: validationError.message
        });
      } else {
        res.status(500).json({ 
          success: false,
          message: "An unexpected error occurred"
        });
      }
    }
  });

  // API routes for trial requests
  app.post("/api/trial", async (req, res) => {
    try {
      // Map incoming field name to schema field name
      const requestBody = {
        ...req.body,
        classType: req.body.class, // Map 'class' to 'classType'
      };

      const validatedData = insertTrialSchema.parse(requestBody);
      
      const trial = await storage.createTrialRequest({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        classType: validatedData.classType,
        goals: validatedData.goals || ""
      });
      
      res.status(201).json({ 
        success: true,
        message: "Trial request submitted successfully",
        data: trial
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false,
          message: "Validation error",
          errors: validationError.message
        });
      } else {
        res.status(500).json({ 
          success: false,
          message: "An unexpected error occurred"
        });
      }
    }
  });

  // For demo purposes - get all submissions (would be protected in production)
  app.get("/api/contact", async (_req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contact submissions" });
    }
  });

  app.get("/api/trial", async (_req, res) => {
    try {
      const trials = await storage.getAllTrialRequests();
      res.status(200).json(trials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch trial requests" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
