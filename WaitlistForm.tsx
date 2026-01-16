import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';

interface WaitlistFormProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function WaitlistForm({ variant = 'primary', className = '' }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    smsNotify: false,
    interest: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Mock submission - in production this would connect to Shopify/backend
    toast.success('Welcome to the LuxeLine family! We\'ll notify you at launch.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      smsNotify: false,
      interest: '',
    });
  };

  const isPrimary = variant === 'primary';

  return (
    <form onSubmit={handleSubmit} className={`w-full max-w-md ${className}`}>
      <div className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="bg-white border-[#72513C]/20 text-[#72513C] placeholder:text-[#72513C]/40 h-12"
            required
          />
        </div>

        <div>
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-white border-[#72513C]/20 text-[#72513C] placeholder:text-[#72513C]/40 h-12"
            required
          />
        </div>

        <div>
          <Input
            type="tel"
            placeholder="Phone Number (Optional)"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="bg-white border-[#72513C]/20 text-[#72513C] placeholder:text-[#72513C]/40 h-12"
          />
        </div>

        <div className="flex items-center space-x-2 py-2">
          <Checkbox
            id="smsNotify"
            checked={formData.smsNotify}
            onCheckedChange={(checked) => 
              setFormData({ ...formData, smsNotify: checked as boolean })
            }
            className="border-[#72513C]/30"
          />
          <label
            htmlFor="smsNotify"
            className="text-sm text-[#72513C]/80 cursor-pointer"
          >
            Notify me by SMS
          </label>
        </div>

        <div>
          <Select
            value={formData.interest}
            onValueChange={(value) => setFormData({ ...formData, interest: value })}
          >
            <SelectTrigger className="bg-white border-[#72513C]/20 text-[#72513C] h-12">
              <SelectValue placeholder="What interests you most?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="glueless">Glueless Wigs</SelectItem>
              <SelectItem value="lace-front">Lace Front</SelectItem>
              <SelectItem value="human-hair">Human Hair</SelectItem>
              <SelectItem value="colored">Colored Wigs</SelectItem>
              <SelectItem value="custom">Custom Units</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            type="submit"
            className="flex-1 h-12 bg-[#72513C] hover:bg-[#5d4230] text-white"
          >
            Join the Waitlist
          </Button>
          
          {isPrimary && (
            <Button
              type="button"
              variant="outline"
              className="flex-1 h-12 border-[#72513C] text-[#72513C] hover:bg-[#72513C]/5"
            >
              Get Early Access
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}
