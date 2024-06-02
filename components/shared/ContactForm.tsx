"use client";

import React from "react";
import { Input } from "../ui/input";
import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input
          type="name"
          id="name"
          placeholder="Name"
          className="border-primary"
        />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          className="border-primary"
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Textarea
          id="message"
          placeholder="Type your message here"
          className="border-primary"
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px] ">
        Lets Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default ContactForm;
