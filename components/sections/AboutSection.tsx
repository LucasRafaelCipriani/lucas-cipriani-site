import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-10 md:py-20 bg-white scroll-mt-[60px]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                My Journey
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I have been fortunate enough to spend about eight years working
                in the development sector with a range of technologies and
                people. Every experience adds to my skill set, but I am
                confident that I will continuously work hard at being as good as
                I can be at being a professional.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                In recent years working in e-commerce has given me extremely
                useful insights into how the industry operates. I have had a
                well-rounded experience in e-commerce, which has given me a good
                understanding of what e-commerce is.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My education was in Information Systems and I specialize in
                Frontend. I am a technical developer able to leverage core web
                technologies like JavaScript, HTML and CSS and am skilled with
                frameworks/libraries like React and Vue. Technical ability is
                one of my strengths as a developer.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I have every intention to continue to develop myself and embrace
                my enthusiasm for technology. I am excited to explore new
                technologies. I get joy out of learning and I aspire to use the
                knowledge I have gained over the years to provide as much value
                to society as I can possibly provide. My goal is to fulfil what
                is asked of me but also provide meaning to my work and
                contribute to society.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  🎯 Specialization
                </h4>
                <p className="text-gray-600">
                  Frontend Development and E-commerce &amp; Marketplaces
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  🌱 Current Interests
                </h4>
                <p className="text-gray-600">
                  Coding, new technologies, applied artificial intelligence,
                  reading, gaming, travel, gym
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  💼 Available For
                </h4>
                <p className="text-gray-600">
                  Digital transformation projects and opportunities in roles
                  such as Frontend Developer and Frontend Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
