import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Users, BookOpen, Zap, Target, Download, Shield, Clock } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ultimate AI Prompting Guide - Master ChatGPT & AI Tools | 200+ Proven Prompts",
  description:
    "Transform your AI interactions from basic to extraordinary with 200+ proven prompts, 8 comprehensive chapters, and industry applications. Get instant access for just $4.99!",
  keywords:
    "AI prompts, ChatGPT prompts, AI tools, prompt engineering, AI guide, ChatGPT guide, AI productivity, prompt templates",
  authors: [{ name: "AI Prompting Guide" }],
  openGraph: {
    title: "Ultimate AI Prompting Guide - Master ChatGPT & AI Tools",
    description: "Transform your AI interactions with 200+ proven prompts. Get the complete guide for just $4.99!",
    type: "website",
    url: "https://your-domain.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ultimate AI Prompting Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ultimate AI Prompting Guide - Master ChatGPT & AI Tools",
    description: "Transform your AI interactions with 200+ proven prompts. Get the complete guide for just $4.99!",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Ultimate AI Prompting Guide",
            description:
              "Master ChatGPT and AI Tools with Expert Techniques. 200+ Proven Prompts, 8 Comprehensive Chapters, Industry Applications.",
            image: "https://your-domain.com/product-image.jpg",
            brand: {
              "@type": "Brand",
              name: "AI Prompting Guide",
            },
            offers: {
              "@type": "Offer",
              price: "4.99",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              seller: {
                "@type": "Organization",
                name: "AI Prompting Guide",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "2847",
            },
          }),
        }}
      />
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            AI Prompting <span className="text-purple-400">Guide</span>
          </div>
          <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
            Get Instant Access
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center" aria-label="Hero Section">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-purple-600 text-white px-4 py-2 text-sm">
            🚀 Transform Your AI Interactions Today
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Master ChatGPT & AI Tools with
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Expert Techniques
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your AI interactions from basic to extraordinary with 200+ proven prompts, 8 comprehensive
            chapters, and real-world industry applications that save hours of work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Get Instant Access - $4.99
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20 px-8 py-4 text-lg"
            >
              Preview Sample Chapter
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-purple-400" />
              <span>200+ Proven Prompts</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-purple-400" />
              <span>8 Comprehensive Chapters</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-purple-400" />
              <span>Industry Applications</span>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white/5 backdrop-blur-sm py-16" aria-label="Social Proof">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join 10,000+ Professionals Who've Transformed Their AI Workflow
            </h2>
            <div className="flex justify-center items-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-white ml-2 text-lg">4.9/5 from 2,847 reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Sarah Chen",
                role: "Marketing Director",
                content:
                  "This guide completely transformed how I use AI for content creation. I'm now 10x more efficient and the quality is incredible.",
                avatar: "SC",
              },
              {
                name: "Michael Rodriguez",
                role: "Software Developer",
                content:
                  "The technical prompts section alone saved me 20+ hours per week. The code review templates are game-changing.",
                avatar: "MR",
              },
              {
                name: "Emily Johnson",
                role: "Business Consultant",
                content:
                  "From strategy development to client presentations, this guide has become my secret weapon for delivering exceptional results.",
                avatar: "EJ",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="container mx-auto px-4 py-20" aria-label="What's Inside">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">What's Inside The Ultimate AI Prompting Guide</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            8 comprehensive chapters packed with actionable strategies, proven templates, and real-world applications
            that deliver immediate results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              chapter: "01",
              title: "Introduction to AI Prompting",
              description: "Foundation concepts, psychology behind effective prompting, and common mistakes to avoid",
              highlights: ["Understanding AI behavior", "Cognitive triggers", "Processing mechanics"],
            },
            {
              chapter: "02",
              title: "Fundamental Principles",
              description: "Core techniques including the CLEAR framework, context setting, and role-based prompting",
              highlights: ["CLEAR Framework", "Context layers", "Chain-of-thought reasoning"],
            },
            {
              chapter: "03",
              title: "Advanced Techniques",
              description: "Professional-level strategies including few-shot learning and prompt chaining",
              highlights: ["Few-shot examples", "Prompt sequencing", "Parameter optimization"],
            },
            {
              chapter: "04",
              title: "Category-Specific Templates",
              description: "Ready-to-use prompts for business, creative writing, technical assistance, and research",
              highlights: ["Business templates", "Content creation", "Technical prompts"],
            },
            {
              chapter: "05",
              title: "Engineering Strategies",
              description: "Systematic approaches to developing, testing, and optimizing prompts",
              highlights: ["A/B testing", "Version control", "Error handling"],
            },
            {
              chapter: "06",
              title: "Industry Applications",
              description: "Real-world implementations across marketing, customer service, and software development",
              highlights: ["Marketing campaigns", "Customer service", "Code generation"],
            },
            {
              chapter: "07",
              title: "Troubleshooting Guide",
              description: "Solutions for common challenges and recovery strategies",
              highlights: ["Error diagnosis", "Recovery methods", "Quality assurance"],
            },
            {
              chapter: "08",
              title: "Future of AI Prompting",
              description: "Emerging trends, advanced techniques, and staying ahead of the curve",
              highlights: ["Emerging trends", "Advanced strategies", "Future-proofing"],
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-lg font-bold text-sm">
                    {item.chapter}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-purple-600/20 text-purple-300 border-purple-600/30"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 py-20" aria-label="Benefits">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Transform Your AI Results in Just 24 Hours</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stop wasting time with generic prompts that deliver mediocre results. Start getting professional-quality
              outputs that save hours of work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Save 20+ Hours Per Week",
                description:
                  "Stop struggling with ineffective prompts. Get the exact templates that deliver results immediately.",
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "10x Better Results",
                description:
                  "Transform generic AI outputs into professional-quality content that exceeds expectations.",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Instant Implementation",
                description:
                  "Copy-paste proven templates and start seeing improvements in your very first interaction.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Industry-Specific Solutions",
                description: "Get specialized prompts for marketing, development, customer service, and more.",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Avoid Costly Mistakes",
                description: "Learn from common pitfalls and implement best practices from day one.",
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Comprehensive Coverage",
                description: "From beginner fundamentals to advanced engineering strategies - everything you need.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
                <CardContent className="p-8">
                  <div className="text-purple-400 mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20" aria-label="Pricing">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get Instant Access Today</h2>
          <p className="text-xl text-gray-300 mb-12">
            Join thousands of professionals who've already transformed their AI workflow
          </p>

          <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/50 max-w-2xl mx-auto">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-white mb-2">$4.99</div>
                <div className="text-gray-300 text-lg">One-time payment • Instant download</div>
                <div className="text-sm text-gray-400 line-through mt-2">Regular price: $19.99</div>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "200+ Proven AI Prompts & Templates",
                  "8 Comprehensive Chapters (150+ Pages)",
                  "Industry-Specific Applications",
                  "Advanced Engineering Strategies",
                  "Troubleshooting & Error Recovery Guide",
                  "Lifetime Updates & New Techniques",
                  "30-Day Money-Back Guarantee",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-left">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 text-lg mb-4"
              >
                <Download className="mr-2 h-5 w-5" />
                Get Instant Access - $4.99
              </Button>

              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <Shield className="h-4 w-4" />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center gap-1">
                  <Download className="h-4 w-4" />
                  <span>Instant Download</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <p className="text-gray-400 mt-8 max-w-2xl mx-auto">
            <strong className="text-white">30-Day Money-Back Guarantee:</strong> If you don't see immediate improvements
            in your AI interactions within 30 days, we'll refund every penny. No questions asked.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white/5 backdrop-blur-sm py-20" aria-label="FAQ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Is this suitable for beginners?",
                answer:
                  "The guide starts with fundamental concepts and gradually progresses to advanced techniques. Chapter 1 covers the basics, while later chapters dive into professional-level strategies.",
              },
              {
                question: "What AI tools does this work with?",
                answer:
                  "The techniques work with ChatGPT, Claude, Gemini, and virtually any text-based AI system. The principles are universal and platform-agnostic.",
              },
              {
                question: "How quickly will I see results?",
                answer:
                  "Most users see immediate improvements in their first session. The ready-to-use templates in Chapter 4 can be implemented right away for instant results.",
              },
              {
                question: "Is there a money-back guarantee?",
                answer:
                  "Yes! We offer a 30-day money-back guarantee. If you don't see improvements in your AI interactions, we'll refund your purchase completely.",
              },
              {
                question: "Do I get updates when new techniques are discovered?",
                answer:
                  "Yes! You'll receive lifetime updates as we discover new techniques and as AI technology evolves. Your investment is future-proofed.",
              },
              {
                question: "How is this delivered?",
                answer:
                  "Instant digital download. After purchase, you'll immediately receive a PDF that works on all devices - computer, tablet, or phone.",
              },
            ].map((faq, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-20 text-center" aria-label="Final Call to Action">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Don't Let Another Day Pass With Mediocre AI Results</h2>
          <p className="text-xl text-gray-300 mb-8">
            Every day you wait is another day of wasted time and missed opportunities. Join the thousands who've already
            transformed their AI workflow.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-xl mb-6"
          >
            <Download className="mr-2 h-6 w-6" />
            Transform Your AI Results Now - $4.99
          </Button>

          <p className="text-gray-400">
            ⚡ Instant access • 💰 30-day guarantee • 🔄 Lifetime updates • 💸 Less than a coffee!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-white mb-4">
            AI Prompting <span className="text-purple-400">Guide</span>
          </div>
          <p className="text-gray-400 mb-6">Transform your AI interactions from basic to extraordinary</p>
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact Support
            </a>
          </div>
          <p className="text-gray-500 text-sm mt-6">© 2024 AI Prompting Guide. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
