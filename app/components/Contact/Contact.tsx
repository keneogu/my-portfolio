"use client";
import Link from "next/link";
import Container from "../Container";
import {
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/app/common/IconifyIcons";
import ContactForm from "./ContactForm";
import { useFormik } from "formik";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {
      return null;
    },
  });
  return (
    <section id="contact">
      <Container>
        <div className="w-full bg-gradient1 dark:bg-gradient2 p-6 rounded-lg">
        <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
            Contact Me!
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h4>Let's connect</h4>
              <p>
                I'm currently looking for new opportunity, my inbox is always
                open. Whether you have a question or just want to say hi! I'll
                try my best to get back to you!
              </p>
              <div className="flex gap-6">
                <Link href="https://github.com/keneogu">
                  <GithubIcon />
                </Link>
                <Link href="https://www.linkedin.com/in/kene-ogu/">
                  <LinkedInIcon />
                </Link>
                <Link href="https://twitter.com/keneogu">
                  <TwitterIcon />
                </Link>
              </div>
            </div>
            <div>
              <ContactForm formik={formik} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
