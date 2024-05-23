import { ThemeToggle } from "@/components/themeToggle";
import { A, H1, H2, H3, P } from "@/components/ui/typography";
import React from "react";

export default function Home() {
  return (
    <main className="flex w-full flex-1 justify-center px-4 py-4 sm:py-16">
      <section className="flex w-full max-w-screen-md flex-col">
        <div className="flex w-full flex-row items-center justify-between space-y-0">
          <H1>Hi, I&apos;m Andrew 👋</H1>
          <ThemeToggle />
        </div>
        <div className="h-4" />
        <P>
          Welcome to my personal website! I have some basic info about myself,
          what I do for work, and how you can get in touch with me.
        </P>
        <div className="h-4 sm:hidden" />
        <div className="flex w-full flex-col sm:hidden">
          <H3>On this page:</H3>
          <ul className="list-disc pl-5 pt-2 sm:pl-4">
            <li>
              <a
                href="#about-me"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#interests"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Interests
              </a>
            </li>
            <li>
              <a
                href="#get-in-touch"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
        <div className="h-8" />
        <H2 id="about-me">About me</H2>
        <P>
          My name is Andrew, and I’m a Software Engineer based out of San
          Francisco, California. I’m currently working at&nbsp;
          <A href="https://asana.com/">Asana</A> on the Core Performance team,
          working to make the webapp as fast and snappy as possible.
        </P>
        <P>
          Before Asana, I graduated from the&nbsp;
          <A href="https://usc.edu">University of Southern California</A>
          &nbsp;with a degree in Computer Science. In the past, I have interned
          as a Software Engineer at Microsoft, Honey (acquired by PayPal), and
          American Express
        </P>
        <div className="h-8" />
        <H2 id="interests">Interests</H2>
        <P>
          Outside of tech, some of my hobbies include: teaching/mentoring,
          playing Super Smash Bros (Bowser and Ike mains for those who care),
          and binging anime. I&apos;m also really passionate about empowering
          fellow minorities to pursue careers in STEM. At school I was involved
          with the&nbsp;
          <A href="https://shpe.org/">
            Society of Hispanic Professional Engineers
          </A>
          , whose focus is to promote Hispanic & Latino excellence within STEM
          fields in industry & academia.
        </P>
        <div className="h-8" />
        <H2 id="get-in-touch">Get in touch</H2>
        <P>
          Feel free to email me at&nbsp;
          <A href="mailto:contact@amanzanero.com">info@amanzanero.com</A>
        </P>

        <P>Other places you can find me:</P>
        <ul className="list-disc pl-5 sm:pl-4">
          <li>
            <A href="https://github.com/amanzanero">github.com/amanzanero</A>
          </li>
          <li>
            <A href="https://twitter.com/AndrewManzanero">
              twitter.com/AndrewManzanero
            </A>
            &nbsp;(I don&apos;t tweet much)
          </li>
        </ul>
      </section>
    </main>
  );
}
