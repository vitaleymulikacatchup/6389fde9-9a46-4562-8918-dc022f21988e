"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ProductCardSix from '@/components/sections/product/ProductCardSix';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Sparkles, ChefHat, Heart, Wine, Users, Utensils, Flame } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="smallSizeLargeTitles"
      background="aurora"
      cardStyle="neon-glow"
      primaryButtonStyle="outline"
      secondaryButtonStyle="minimal"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535476930-5ojkgd9s.jpg"
          logoAlt="Gloria Restaurant Logo"
          brandName="Gloria"
          button={{
            text: "Reserve Table",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Gloria"
          description="Experience fine dining at its finest. Indulge in exquisitely crafted cuisine and impeccable service in an elegant, sophisticated atmosphere."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765540135647-q66hkdkh.jpg"
          imageAlt="Gloria Restaurant elegant interior dining experience"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Where tradition meets innovation, and every meal tells a story of passion, quality, and culinary excellence."
          features={[
            {
              icon: Sparkles,
              title: "Premium Ingredients",
              description: "We source only the finest ingredients from trusted local and international suppliers to ensure exceptional quality in every dish."
            },
            {
              icon: ChefHat,
              title: "Expert Culinary Team",
              description: "Our award-winning chefs bring years of international experience and dedication to creating unforgettable dining experiences."
            },
            {
              icon: Heart,
              title: "Warm Hospitality",
              description: "Every guest is treated like family. Our attentive staff ensures your comfort and satisfaction throughout your visit."
            },
            {
              icon: Wine,
              title: "Curated Wine Selection",
              description: "Discover our carefully curated wine collection featuring rare vintages and exceptional pairings for your meal."
            }
          ]}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="featured-dishes" data-section="featured-dishes">
        <ProductCardSix
          products={[
            {
              id: "1",
              name: "Pan-Seared Foie Gras",
              price: "$38",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535481279-qlgtzyox.jpg",
              imageAlt: "Pan-seared foie gras with truffle reduction"
            },
            {
              id: "2",
              name: "Prime Ribeye Selection",
              price: "$52",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765540136939-u141gep9.jpg",
              imageAlt: "Perfectly aged prime ribeye with seasonal vegetables"
            },
            {
              id: "3",
              name: "Chocolate Soufflé Perfection",
              price: "$16",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765540137890-c8kpgdps.jpg",
              imageAlt: "Warm chocolate soufflé with vanilla bean cream"
            }
          ]}
          title="Signature Dishes"
          description="Explore our most beloved creations, carefully crafted by our culinary team."
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="dining-experience" data-section="dining-experience">
        <FeatureCardFive
          features={[
            {
              title: "Intimate Ambiance",
              icon: Flame
            },
            {
              title: "Private Events",
              icon: Users
            },
            {
              title: "Wine Tastings",
              icon: Wine
            },
            {
              title: "Chef's Table",
              icon: Utensils
            }
          ]}
          title="Unforgettable Dining Experiences"
          description="Discover the perfect setting for every occasion"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          showIconBoxBackground={true}
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Food Critic",
              company: "Culinary Times",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765535486157-j0gwrloy.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",
              name: "James Richardson",
              role: "Restaurant Owner",
              company: "Fine Dining Society",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765540139764-65zm7fz9.jpg",
              imageAlt: "James Richardson"
            },
            {
              id: "3",
              name: "Elena Gonzalez",
              role: "Event Planner",
              company: "Luxury Events Co",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765540140623-q5gqqrt1.jpg",
              imageAlt: "Elena Gonzalez"
            },
            {
              id: "4",
              name: "Michael Chen",
              role: "Chef Instructor",
              company: "Culinary Academy",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/gallery/uploaded-1765540141460-ystsdex9.jpg",
              imageAlt: "Michael Chen"
            }
          ]}
          title="What Our Guests Say"
          description="Hear from those who have experienced Gloria's exceptional dining"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          faqs={[
            {
              id: "1",
              title: "How do I make a reservation?",
              content: "You can reserve your table through our website contact form, by calling us directly, or through our reservation partners. We recommend booking at least one week in advance, especially for weekends and special events."
            },
            {
              id: "2",
              title: "What are your operating hours?",
              content: "Gloria is open Tuesday through Thursday from 5:00 PM to 10:00 PM, Friday and Saturday from 5:00 PM to 11:00 PM, and Sunday from 5:00 PM to 9:00 PM. We are closed Mondays. Please call for holiday hours."
            },
            {
              id: "3",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely! We are happy to accommodate vegetarian, vegan, gluten-free, and other dietary needs. Please mention your requirements when making your reservation so our chefs can prepare special dishes for you."
            },
            {
              id: "4",
              title: "Can you host private events?",
              content: "Yes, Gloria offers private event spaces perfect for intimate celebrations, corporate dinners, and special occasions. Contact our events team for details about availability and custom menu options."
            },
            {
              id: "5",
              title: "What is your dress code?",
              content: "Smart casual is recommended for a pleasant dining experience. We appreciate guests dressing thoughtfully to match the upscale ambiance of Gloria."
            }
          ]}
          title="Frequently Asked Questions"
          description="Find answers to common questions about dining at Gloria"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Plan Your Visit"
          description="Reserve your table or inquire about special events and private dining experiences at Gloria."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "guests",
              type: "number",
              placeholder: "Number of Guests",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Preferred date, time, and any special requests...",
            rows: 5,
            required: true
          }}
          buttonText="Make Reservation"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Gloria"
          columns={[
            {
              items: [
                {
                  label: "Hours",
                  href: "#"
                },
                {
                  label: "Location",
                  href: "#"
                },
                {
                  label: "Phone",
                  href: "#"
                }
              ]
            },
            {
              items: [
                {
                  label: "Reservations",
                  href: "#contact"
                },
                {
                  label: "Private Events",
                  href: "#"
                },
                {
                  label: "Menu",
                  href: "#featured-dishes"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "#about"
                },
                {
                  label: "Contact",
                  href: "#contact"
                },
                {
                  label: "Careers",
                  href: "#"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}