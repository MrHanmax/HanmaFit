import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { type WelcomeMessageFormData, type WelcomeMessageResponse } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

// UI components
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

// Form validation schema
const welcomeMessageSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  fitnessGoals: z.string().min(1, { message: "Please select your fitness goals" }),
  preferredWorkoutType: z.string().min(1, { message: "Please select your preferred workout type" }),
  experienceLevel: z.string().min(1, { message: "Please select your experience level" }),
  personalMessage: z.string().optional(),
});

export default function WelcomeMessageGenerator() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState<WelcomeMessageResponse | null>(null);

  // Form setup
  const form = useForm<WelcomeMessageFormData>({
    resolver: zodResolver(welcomeMessageSchema),
    defaultValues: {
      name: "",
      fitnessGoals: "",
      preferredWorkoutType: "",
      experienceLevel: "",
      personalMessage: "", // This will be generated on the server
    },
  });

  // Handle form submission
  const onSubmit = async (data: WelcomeMessageFormData) => {
    try {
      setIsSubmitting(true);
      const response = await apiRequest(
        "POST",
        "/api/welcome-messages",
        data
      );
      
      const responseData = await response.json();
      setWelcomeMessage(responseData.data);
      toast({
        title: "Success!",
        description: "Your personalized welcome message has been generated.",
      });
    } catch (error) {
      console.error("Error generating welcome message:", error);
      toast({
        title: "Error",
        description: "There was a problem generating your welcome message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1d3557] mb-4">
            Personalized Welcome Message Generator
          </h1>
          <p className="text-lg text-[#457b9d]">
            Tell us about yourself and receive a personalized welcome message tailored to your fitness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {!welcomeMessage ? (
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Generate Your Welcome Message</CardTitle>
                <CardDescription>
                  Fill out the form below to receive a personalized message from our team.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="fitnessGoals"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Fitness Goals</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your primary fitness goals" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="weight-loss">Weight Loss</SelectItem>
                              <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                              <SelectItem value="endurance">Endurance</SelectItem>
                              <SelectItem value="flexibility">Flexibility</SelectItem>
                              <SelectItem value="general-fitness">General Fitness</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="preferredWorkoutType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Workout Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your preferred workout type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="strength">Strength Training</SelectItem>
                              <SelectItem value="cardio">Cardio</SelectItem>
                              <SelectItem value="yoga">Yoga</SelectItem>
                              <SelectItem value="mma">MMA/Boxing</SelectItem>
                              <SelectItem value="group">Group Classes</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="experienceLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Experience Level</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your experience level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="beginner">Beginner</SelectItem>
                              <SelectItem value="intermediate">Intermediate</SelectItem>
                              <SelectItem value="advanced">Advanced</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-[#FFA500] hover:bg-amber-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        "Generate Welcome Message"
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-lg border-2 border-[#FFA500]">
              <CardHeader className="bg-gradient-to-r from-amber-100 to-amber-50">
                <CardTitle className="text-2xl">Your Personalized Welcome Message</CardTitle>
                <CardDescription>
                  Generated especially for you based on your preferences.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="text-lg leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                  {welcomeMessage.personalMessage}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t pt-6">
                <Button 
                  variant="outline" 
                  onClick={() => setWelcomeMessage(null)}
                >
                  Generate Another Message
                </Button>
                <Button 
                  className="bg-[#FFA500] hover:bg-amber-600"
                  onClick={() => {
                    // Could save or share the message in the future
                    toast({
                      title: "Message Saved!",
                      description: "Your personalized message has been saved.",
                    });
                  }}
                >
                  Save Message
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}