import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type InsertInquiry } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from "lucide-react";

export function ContactForm() {
  const { mutate, isPending } = useCreateInquiry();
  
  const form = useForm<InsertInquiry>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertInquiry) => {
    mutate(data, {
      onSuccess: () => {
        form.reset();
      }
    });
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-3xl shadow-xl shadow-primary/5 p-6 md:p-8 border border-border/50">
      <div className="mb-6">
        <h3 className="text-2xl font-display font-bold text-foreground">Envie uma mensagem</h3>
        <p className="text-muted-foreground mt-2 text-sm">Preencha o formulário abaixo e entraremos em contato para agendar sua avaliação.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} className="rounded-xl border-border/60 focus:border-primary bg-muted/30" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/80">Telefone / WhatsApp</FormLabel>
                  <FormControl>
                    <Input placeholder="(00) 00000-0000" {...field} className="rounded-xl border-border/60 focus:border-primary bg-muted/30" />
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
                  <FormLabel className="text-foreground/80">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="seu@email.com" type="email" {...field} className="rounded-xl border-border/60 focus:border-primary bg-muted/30" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80">Como podemos ajudar?</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Gostaria de saber mais sobre clareamento..." 
                    className="min-h-[120px] rounded-xl border-border/60 focus:border-primary bg-muted/30 resize-none" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={isPending}
            className="w-full h-12 rounded-xl text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Solicitar Agendamento
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
