import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { TrialFormData } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const trialFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(8, { message: "Please enter a valid phone number" }),
  classInterest: z.string().optional(),
  howHeard: z.string().optional()
});

const TrialForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<TrialFormData>({
    resolver: zodResolver(trialFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      classInterest: "",
      howHeard: ""
    }
  });
  
  const onSubmit = async (data: TrialFormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/trial-leads", data);
      
      toast({
        title: "Success!",
        description: "Thank you for your interest! We will contact you shortly to schedule your free trial class.",
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong.",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="flex flex-col lg:flex-row items-center bg-[#1d3557] rounded-lg overflow-hidden shadow-xl">
      <div className="lg:w-1/2 p-8 lg:p-12 text-white">
        <h2 className="font-bold text-3xl md:text-4xl mb-6">CLAIM YOUR FREE TRIAL CLASS</h2>
        <p className="text-lg mb-6">
          Experience the Hanma difference with a complimentary trial class. Fill out the form, and our team will contact you to schedule your visit to our Gulistan-e-Johar studio.
        </p>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <div className="text-[#e63946] mt-1 mr-3 text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Try any group class: MMA, Strength, Zumba, or Aerobics</span>
          </li>
          <li className="flex items-start">
            <div className="text-[#e63946] mt-1 mr-3 text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Meet our expert coaches and tour the facility</span>
          </li>
          <li className="flex items-start">
            <div className="text-[#e63946] mt-1 mr-3 text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Receive a complimentary fitness consultation</span>
          </li>
          <li className="flex items-start">
            <div className="text-[#e63946] mt-1 mr-3 text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Female-only hours available</span>
          </li>
          <li className="flex items-start">
            <div className="text-[#e63946] mt-1 mr-3 text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <span>No obligation or pressure to join</span>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <a href="tel:03167911505" className="flex items-center text-white hover:text-[#e63946] transition-colors duration-300">
            <Phone className="mr-2" size={18} />
            <span>03167911505</span>
          </a>
          <a href="https://wa.me/923167911505" className="flex items-center text-white hover:text-[#e63946] transition-colors duration-300">
            <FaWhatsapp className="mr-2" size={18} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
      
      <div className="lg:w-1/2 p-8 lg:p-12 bg-white w-full">
        <h3 className="font-bold text-2xl mb-6 text-[#1d3557] text-center">BOOK YOUR FREE TRIAL NOW</h3>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Your email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="classInterest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Which class are you interested in?</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a class" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="mma">MMA Training</SelectItem>
                      <SelectItem value="strength">Strength Training</SelectItem>
                      <SelectItem value="zumba">Zumba/Aerobics</SelectItem>
                      <SelectItem value="personal">Personal Training</SelectItem>
                      <SelectItem value="general">Not sure yet</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="howHeard"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How did you hear about us?</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="friend">Friend/Family</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="pt-2">
              <Button 
                type="submit" 
                className="w-full bg-[#e63946] hover:bg-red-700 text-white font-bold text-lg h-12"
                disabled={isSubmitting}
              >
                {isSubmitting ? "SUBMITTING..." : "CLAIM MY FREE CLASS"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default TrialForm;
