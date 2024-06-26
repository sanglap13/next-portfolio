import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const ContactMe = () => {
  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40 ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-xl text-center mb-8">
            Liked my Portfolio? Have a interest on Software Development or Tech
            Communities?
          </h2>
          <Link href="/contact">
            <Button>Contact Me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
