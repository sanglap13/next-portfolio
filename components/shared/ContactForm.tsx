"use client";

import React from "react";
import { Input } from "../ui/input";
import { MailIcon, User } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Textarea id="name" placeholder="Name" />
        <User className="absolute top-4 right-6" size={20} />
      </div>
      <Button>Lets Talk</Button>
    </form>
  );
};

export default ContactForm;
