import { Info, Shield, Vote } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">About BlockvoteX</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A revolutionary decentralized voting platform designed to enhance trust,
            transparency, and security in elections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <section className="bg-slate-800 rounded-lg p-8 border border-blue-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400">
                We leverage the power of blockchain technology to create a secure,
                tamper-proof, and fully transparent voting system that ensures the
                integrity of democratic processes.
              </p>
            </section>

            <section className="bg-slate-800 rounded-lg p-8 border border-blue-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Why BlockvoteX?</h2>
              <ul className="space-y-4 text-gray-400">
                <Feature
                  icon={<Shield className="w-6 h-6 text-blue-500" />}
                  title="Enhanced Security"
                  description="Military-grade encryption protects voter identity and votes from unauthorized access."
                />
                <Feature
                  icon={<Vote className="w-6 h-6 text-purple-500" />}
                  title="Transparency"
                  description="Every vote is recorded on the blockchain, ensuring complete auditability."
                />
                <Feature
                  icon={<Info className="w-6 h-6 text-blue-500" />}
                  title="Accessibility"
                  description="Vote securely from anywhere, making democratic participation easier than ever."
                />
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-slate-800 rounded-lg p-8 border border-blue-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400">
                We envision a future where elections are free from manipulation,
                voter fraud is eliminated, and trust in democratic processes is
                restored globally. BlockvoteX strives to set the standard for
                next-generation election systems that are fair, secure, and transparent.
              </p>
            </section>

            <section className="bg-slate-800 rounded-lg p-8 border border-blue-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Technology</h2>
              <p className="text-gray-400 mb-4">
                Our platform utilizes cutting-edge blockchain technology to ensure:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                <li>Immutable vote records</li>
                <li>End-to-end encryption</li>
                <li>Real-time vote verification</li>
                <li>Decentralized data storage</li>
                <li>Transparent audit trails</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <li className="flex items-start space-x-3">
    <div className="flex-shrink-0 mt-1">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </li>
);

export default About;