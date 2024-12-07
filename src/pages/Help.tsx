import { HelpCircle, Book, FileText, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const Help = () => {
  const [activeTab, setActiveTab] = useState('faq');

  return (
    <div className="min-h-screen pt-20 pb-12 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Help & Support</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions and learn how to use BlockvoteX.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-64 flex-shrink-0">
            <nav className="space-y-2">
              <TabButton
                active={activeTab === 'faq'}
                onClick={() => setActiveTab('faq')}
                icon={<HelpCircle className="w-5 h-5" />}
                text="FAQ"
              />
              <TabButton
                active={activeTab === 'guides'}
                onClick={() => setActiveTab('guides')}
                icon={<Book className="w-5 h-5" />}
                text="Guides"
              />
              <TabButton
                active={activeTab === 'docs'}
                onClick={() => setActiveTab('docs')}
                icon={<FileText className="w-5 h-5" />}
                text="Documentation"
              />
              <TabButton
                active={activeTab === 'support'}
                onClick={() => setActiveTab('support')}
                icon={<MessageSquare className="w-5 h-5" />}
                text="Support"
              />
            </nav>
          </aside>

          <div className="flex-grow">
            {activeTab === 'faq' && <FAQSection />}
            {activeTab === 'guides' && <GuidesSection />}
            {activeTab === 'docs' && <DocsSection />}
            {activeTab === 'support' && <SupportSection />}
          </div>
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ active, onClick, icon, text }: { active: boolean; onClick: () => void; icon: React.ReactNode; text: string }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
      active
        ? 'bg-blue-500 text-white'
        : 'text-gray-400 hover:bg-slate-800 hover:text-white'
    }`}
  >
    {icon}
    <span>{text}</span>
  </button>
);

const FAQSection = () => (
  <div className="space-y-6">
    <FAQItem
      question="How do I register to vote?"
      answer="You can register by clicking the 'Register Now' button on the homepage. You'll need to provide your email, government ID, and other required information."
    />
    <FAQItem
      question="Is my vote secure?"
      answer="Yes, your vote is secured using blockchain technology and military-grade encryption. Each vote is anonymously recorded and cannot be altered."
    />
    <FAQItem
      question="How can I track my vote?"
      answer="After casting your vote, you'll receive a unique transaction ID. You can use this ID to track your vote's status in real-time."
    />
    <FAQItem
      question="What if I encounter technical issues?"
      answer="Our support team is available Monday to Friday, 9 AM to 6 PM (UTC). You can reach us through the contact form or email at support@blockvotex.com."
    />
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="bg-slate-800 rounded-lg p-6 border border-blue-500/20">
    <h3 className="text-xl font-semibold text-white mb-2">{question}</h3>
    <p className="text-gray-400">{answer}</p>
  </div>
);

const GuidesSection = () => (
  <div className="grid md:grid-cols-2 gap-6">
    <GuideCard
      title="Getting Started"
      description="Learn the basics of BlockvoteX and how to set up your account."
    />
    <GuideCard
      title="Voting Process"
      description="A step-by-step guide to casting your vote securely."
    />
    <GuideCard
      title="Security Features"
      description="Understanding the security measures protecting your vote."
    />
    <GuideCard
      title="Tracking Your Vote"
      description="How to monitor your vote's status using the blockchain."
    />
  </div>
);

const GuideCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-slate-800 rounded-lg p-6 border border-blue-500/20">
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <button className="text-blue-500 hover:text-blue-400">Read More →</button>
  </div>
);

const DocsSection = () => (
  <div className="bg-slate-800 rounded-lg p-6 border border-blue-500/20">
    <h2 className="text-2xl font-bold text-white mb-4">Documentation</h2>
    <p className="text-gray-400 mb-6">
      Comprehensive documentation for users and administrators.
    </p>
    <div className="space-y-4">
      <DocLink title="User Guide" />
      <DocLink title="Security Overview" />
      <DocLink title="API Documentation" />
      <DocLink title="Blockchain Integration" />
    </div>
  </div>
);

const DocLink = ({ title }: { title: string }) => (
  <a href="#" className="block text-blue-500 hover:text-blue-400">
    {title} →
  </a>
);

const SupportSection = () => (
  <div className="bg-slate-800 rounded-lg p-6 border border-blue-500/20">
    <h2 className="text-2xl font-bold text-white mb-4">Support</h2>
    <p className="text-gray-400 mb-6">
      Need help? Our support team is here to assist you.
    </p>
    <div className="space-y-4">
      <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200">
        Contact Support
      </button>
      <button className="w-full bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-600 transition-colors duration-200">
        Submit a Ticket
      </button>
    </div>
  </div>
);

export default Help;