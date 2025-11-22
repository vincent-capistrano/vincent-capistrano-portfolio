import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import PixelButton from './PixelButton';
import PixelCard from './PixelCard';
import { profileData } from '../data/mock';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast({
      title: "Message Sent!",
      description: "Your message has been received. Vincent will get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FFB000] border-4 border-[#4A3728] px-6 py-3 mb-4">
            <h2 className="font-pixel text-2xl sm:text-3xl text-[#4A3728] uppercase">Insert Coin</h2>
          </div>
          <div className="h-1 w-32 bg-[#4A3728] mx-auto mb-4"></div>
          <p className="font-pixel text-sm text-[#4A3728] opacity-70">Start a New Game Together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <PixelCard hover={false}>
              <div className="bg-[#D4A574] border-4 border-[#4A3728] px-4 py-2 mb-6">
                <h3 className="font-pixel text-lg text-[#4A3728] uppercase">Contact Info</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#FFB000] border-4 border-[#4A3728] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#4A3728]" />
                  </div>
                  <div>
                    <p className="font-pixel text-xs text-[#4A3728] opacity-70 mb-1">Email</p>
                    <a href={`mailto:${profileData.email}`} className="text-[#4A3728] text-sm hover:text-[#FFB000] transition-colors" style={{ fontFamily: 'monospace' }}>
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#9BBC0F] border-4 border-[#4A3728] flex items-center justify-center flex-shrink-0">
                    <Github className="w-5 h-5 text-[#306230]" />
                  </div>
                  <div>
                    <p className="font-pixel text-xs text-[#4A3728] opacity-70 mb-1">GitHub</p>
                    <a href={profileData.social.github} target="_blank" rel="noopener noreferrer" className="text-[#4A3728] text-sm hover:text-[#9BBC0F] transition-colors" style={{ fontFamily: 'monospace' }}>
                      @vincent-capistrano
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[#FFB000] border-4 border-[#4A3728] flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-5 h-5 text-[#4A3728]" />
                  </div>
                  <div>
                    <p className="font-pixel text-xs text-[#4A3728] opacity-70 mb-1">LinkedIn</p>
                    <a href={profileData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#4A3728] text-sm hover:text-[#FFB000] transition-colors" style={{ fontFamily: 'monospace' }}>
                      vincent-capistrano
                    </a>
                  </div>
                </div>
              </div>
            </PixelCard>

            {/* Game Over Message */}
            <PixelCard hover={false} className="bg-[#D4A574]">
              <div className="text-center">
                <p className="font-pixel text-sm text-[#4A3728] mb-2">READY FOR CO-OP MODE?</p>
                <p className="text-[#4A3728] text-xs" style={{ fontFamily: 'monospace' }}>
                  Let's build something amazing together!
                </p>
              </div>
            </PixelCard>
          </div>

          {/* Contact Form */}
          <PixelCard hover={false}>
            <div className="bg-[#D4A574] border-4 border-[#4A3728] px-4 py-2 mb-6">
              <h3 className="font-pixel text-lg text-[#4A3728] uppercase">Send Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-pixel text-xs text-[#4A3728] mb-2 block uppercase">Player Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#F5E6D3] border-4 border-[#4A3728] px-4 py-3 text-[#4A3728] font-mono text-sm focus:outline-none focus:border-[#FFB000]"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="font-pixel text-xs text-[#4A3728] mb-2 block uppercase">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#F5E6D3] border-4 border-[#4A3728] px-4 py-3 text-[#4A3728] font-mono text-sm focus:outline-none focus:border-[#FFB000]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="font-pixel text-xs text-[#4A3728] mb-2 block uppercase">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#F5E6D3] border-4 border-[#4A3728] px-4 py-3 text-[#4A3728] font-mono text-sm focus:outline-none focus:border-[#FFB000] resize-none"
                  placeholder="Type your message here..."
                />
              </div>

              <PixelButton type="submit" variant="primary" className="w-full">
                <div className="flex items-center justify-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </div>
              </PixelButton>
            </form>
          </PixelCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;