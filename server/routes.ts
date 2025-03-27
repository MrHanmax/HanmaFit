import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertTrialLeadSchema, insertContactInquirySchema, insertWelcomeMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from 'zod-validation-error';
import nodemailer from 'nodemailer';

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for trial lead submissions
  app.post("/api/trial-leads", async (req, res) => {
    try {
      const validatedData = insertTrialLeadSchema.parse(req.body);
      const createdLead = await storage.createTrialLead(validatedData);

      // Only attempt to send email if SMTP credentials are configured
      if (process.env.SMTP_USER && process.env.SMTP_PASS && process.env.NOTIFICATION_EMAIL) {
        try {
          console.log(`Attempting to send trial lead email using: ${process.env.SMTP_USER}`);
          
          const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
            tls: {
              rejectUnauthorized: false
            }
          });

          await transporter.sendMail({
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: process.env.NOTIFICATION_EMAIL,
            subject: 'New Trial Class Request',
            text: `
New trial class request:
Name: ${validatedData.name}
Email: ${validatedData.email}
Phone: ${validatedData.phone}
Class Interest: ${validatedData.classInterest}
How they heard about us: ${validatedData.howHeard}
            `,
          });
          console.log("Trial lead notification email sent successfully");
        } catch (emailError) {
          // Log email error but continue with the request
          console.error("Failed to send email notification:", emailError);
        }
      }

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

      // Only attempt to send email if SMTP credentials are configured
      if (process.env.SMTP_USER && process.env.SMTP_PASS && process.env.NOTIFICATION_EMAIL) {
        try {
          console.log(`Attempting to send contact inquiry email using: ${process.env.SMTP_USER}`);
          
          const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
            tls: {
              rejectUnauthorized: false
            }
          });

          await transporter.sendMail({
            from: process.env.SMTP_FROM || process.env.SMTP_USER,
            to: process.env.NOTIFICATION_EMAIL,
            subject: 'New Contact Form Submission',
            text: `
New contact form submission:
Name: ${validatedData.name}
Email: ${validatedData.email}
Phone: ${validatedData.phone}
Service Interest: ${validatedData.serviceInterest}
Message: ${validatedData.message}
            `,
          });
          console.log("Contact inquiry notification email sent successfully");
        } catch (emailError) {
          // Log email error but continue with the request
          console.error("Failed to send email notification:", emailError);
        }
      }

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

  // API routes for welcome messages
  app.post("/api/welcome-messages", async (req, res) => {
    try {
      const validatedData = insertWelcomeMessageSchema.parse(req.body);

      // Generate personalized message based on user preferences
      let personalizedGreeting = "";

      // Personalize based on experience level
      if (validatedData.experienceLevel === "beginner") {
        personalizedGreeting = `Welcome ${validatedData.name}! We're thrilled you're starting your fitness journey with us. Our expert coaches will help you build a solid foundation step by step.`;
      } else if (validatedData.experienceLevel === "intermediate") {
        personalizedGreeting = `Welcome ${validatedData.name}! You've made great progress already. Our trainers are excited to help you reach the next level in your fitness journey.`;
      } else if (validatedData.experienceLevel === "advanced") {
        personalizedGreeting = `Welcome ${validatedData.name}! As an experienced fitness enthusiast, you'll love our challenging programs and advanced equipment.`;
      } else {
        personalizedGreeting = `Welcome ${validatedData.name}! We're excited to have you join the Hanma Fitness family!`;
      }

      // Add workout type recommendations
      let workoutRecommendation = "";
      if (validatedData.preferredWorkoutType === "strength") {
        workoutRecommendation = "Our strength training programs will help you build muscle and increase power.";
      } else if (validatedData.preferredWorkoutType === "cardio") {
        workoutRecommendation = "Our cardio classes will boost your endurance and help you burn calories efficiently.";
      } else if (validatedData.preferredWorkoutType === "yoga") {
        workoutRecommendation = "Our yoga sessions will improve your flexibility and provide mental clarity.";
      } else if (validatedData.preferredWorkoutType === "mma") {
        workoutRecommendation = "Our MMA training combines strength, agility, and technique for a complete workout.";
      } else if (validatedData.preferredWorkoutType === "group") {
        workoutRecommendation = "Our group classes provide motivation and community while working toward your goals.";
      }

      // Add goal-specific information
      let goalMessage = "";
      if (validatedData.fitnessGoals === "weight-loss") {
        goalMessage = "For your weight loss goals, we recommend a combination of cardio, strength training, and nutrition guidance.";
      } else if (validatedData.fitnessGoals === "muscle-gain") {
        goalMessage = "To build muscle effectively, our trainers will help you with progressive resistance training and proper nutrition.";
      } else if (validatedData.fitnessGoals === "endurance") {
        goalMessage = "To improve your endurance, we'll focus on gradually increasing workout intensity and duration.";
      } else if (validatedData.fitnessGoals === "flexibility") {
        goalMessage = "Our stretching routines and mobility work will significantly improve your flexibility over time.";
      } else if (validatedData.fitnessGoals === "general-fitness") {
        goalMessage = "For overall fitness, we'll create a balanced program incorporating strength, cardio, and flexibility.";
      }

      // Combine all parts into a personalized message
      const fullMessage = `${personalizedGreeting} ${workoutRecommendation} ${goalMessage} Our team at Hanma Fitness is committed to helping you achieve your fitness goals in a supportive and motivating environment.`;

      // Save the message with the generated personal message
      const messageToSave = {
        ...validatedData,
        personalMessage: fullMessage
      };

      const createdMessage = await storage.createWelcomeMessage(messageToSave);

      res.status(201).json({
        message: "Welcome message created successfully",
        data: createdMessage
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({
          message: "Validation error",
          errors: validationError.message
        });
      } else {
        console.error("Error creating welcome message:", error);
        res.status(500).json({
          message: "An error occurred while creating the welcome message"
        });
      }
    }
  });

  app.get("/api/welcome-messages", async (req, res) => {
    try {
      const messages = await storage.getWelcomeMessages();
      res.status(200).json(messages);
    } catch (error) {
      console.error("Error fetching welcome messages:", error);
      res.status(500).json({
        message: "An error occurred while fetching welcome messages"
      });
    }
  });

  app.get("/api/welcome-messages/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({
          message: "Invalid ID format"
        });
      }

      const message = await storage.getWelcomeMessage(id);
      if (!message) {
        return res.status(404).json({
          message: "Welcome message not found"
        });
      }

      res.status(200).json(message);
    } catch (error) {
      console.error("Error fetching welcome message:", error);
      res.status(500).json({
        message: "An error occurred while fetching the welcome message"
      });
    }
  });

  app.get("/api/welcome-messages/name/:name", async (req, res) => {
    try {
      const { name } = req.params;

      const message = await storage.getWelcomeMessageByName(name);
      if (!message) {
        return res.status(404).json({
          message: "Welcome message not found"
        });
      }

      res.status(200).json(message);
    } catch (error) {
      console.error("Error fetching welcome message by name:", error);
      res.status(500).json({
        message: "An error occurred while fetching the welcome message by name"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}