import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, phone, email, message } = req.body;
      
      // Log the contact form data (in production, this would send an email)
      console.log("=== Contact Form Submission ===");
      console.log("To: info@soiltech.com");
      console.log("From:", email);
      console.log("Name:", name);
      console.log("Phone:", phone);
      console.log("Message:", message);
      console.log("==============================");
      
      // In production, you would integrate with an email service here
      // For now, we just return success
      res.json({ 
        success: true, 
        message: "Mesajınız alındı. En kısa sürede size dönüş yapacağız." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Bir hata oluştu. Lütfen tekrar deneyin." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
