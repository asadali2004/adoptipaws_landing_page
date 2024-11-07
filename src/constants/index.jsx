import { SearchCode, TriangleAlert, HandHelping, HeartPulse, CircleCheck, Users } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#feture" },
  { label: "Workflow", href: "#workflow" },
  { label: "Testimonials", href: "#test" },
  { label: "About Us", href: "#about" },

];

export const testimonials = [
  {
    user: "Gurpreet Singh",
    company: "Jalandhar",
    image: user1,
    text: "AdoptiPaws made it easy for me to find my best friend, Max. The process was straightforward, and I felt supported every step of the way!",
  },
  {
    user: "Simran Kaur",
    company: "Pet Shelter, Ludhiana",
    image: user2,
    text: "Thanks to AdoptiPaws, our NGO has received more leads and support for our rescues. It’s a game-changer for us.",
  },
  {
    user: "Vinod Kumar",
    company: "Adarsh Nagar, Delhi",
    image: user3,
    text: "Posting about a stray kitten I found was simple. Within hours, an NGO reached out and took her in. She's now thriving!",
  },
  {
    user: "Akshay Sharma",
    company: "Adopter",
    image: user4,
    text: "I never knew adopting could be this seamless. The site’s tools and updates kept me informed and reassured.",
  },
  {
    user: "Muhammad Ali",
    company: "Supporter",
    image: user5,
    text: "AdoptiPaws connects compassionate people and animals in need. It’s a vital platform for anyone wanting to make a difference.",
  },
  {
    user: "Ranu Mandal",
    company: "Animal shelter volunteer",
    image: user6,
    text: "This platform has revolutionized the way I interact with the local rescue community. The collaboration features are top-notch.",
  },
];

export const features = [
  {
    icon: <SearchCode />,
    text: "Seamless Pet Search",
    description:
      "Easily browse through a variety of adoptable pets, with filters for species, breed, age, and location, making it simple to find the perfect pet for your home.",
  },
  {
    icon: <TriangleAlert />,
    text: "Post Animals in Need",
    description:
      "Quickly report and post details of animals in distress, allowing NGOs to identify and respond to animals needing immediate help.",
  },
  {
    icon: <HandHelping />,
    text: "NGO Collaboration Hub",
    description:
      "A centralized space for NGOs to manage rescue operations, connect with adopters, and update the community on rescued animals ready for adoption.",
  },
  {
    icon: <HeartPulse />,
    text: "Health & Recovery Updates",
    description:
      "Receive real-time updates on animals under rescue care, including health status, recovery progress, and readiness for adoption.",
  },
  {
    icon: <CircleCheck />,
    text: "Adoption Application Tracking",
    description:
      "A streamlined process for adopters to apply, track their applications, and stay informed about their prospective pet's journey.",
  },
  {
    icon: <Users />,
    text: "Community Success Stories",
    description:
      "An inspiring collection of rescue and adoption stories from adopters and NGOs, showcasing the positive impact of every adoption.",
  },
];

export const checklistItems = [
  {
    title: "Report Animals in Need",
    description:
      "Users can easily post details of stray or injured animals in need of help, allowing nearby NGOs to quickly respond.",
  },
  {
    title: "NGO Rescue Operations",
    description:
      "Verified NGOs review posts and initiate rescue missions to provide medical attention and shelter to animals in need.",
  },
  {
    title: "Health & Recovery Monitoring",
    description:
      "Regular updates on the rescued animals' health and recovery status are provided, preparing them for eventual adoption.",
  },
  {
    title: "Simple Adoption Process",
    description:
      "Adopters can view ready-for-adoption animals, submit applications, and receive guidance throughout the adoption journey.",
  },
];


export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
