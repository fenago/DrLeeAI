import {
  Ear as EarIcon,
  Microphone as MicrophoneIcon,
  SmileySticker as SmileyIcon,
  Article as ArticleIcon
} from "@phosphor-icons/react";

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

// Import IconProps type from Phosphor icons
import { IconProps } from '@phosphor-icons/react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<IconProps>;
  linkUrl?: string;
}

const FeatureCard = ({ title, description, icon: Icon, linkUrl }: FeatureCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <div className="flex items-center mb-4">
      <Icon size={32} className="text-blue-600 mr-3" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-700 mb-4">{description}</p>
    {linkUrl && (
      <Link href={linkUrl} className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
        Learn more →
      </Link>
    )}
  </div>
);

const StaticHomePage = () => {
  return (
    <div className="min-w-screen min-h-screen bg-neutral-100 font-main font-thin text-neutral-800 p-6">
      <Head>
        <title>Dr. Lee's Expression Analysis</title>
        <meta name="title" content="Dr. Lee's Expression Analysis" />
        <meta name="description" content="Comprehensive emotional analysis platform powered by Hume AI technology" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <img src="/drlee_logo_v2.png" alt="Dr. Lee Logo" width={300} className="mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Dr. Lee's Expression Analysis</h1>
          <p className="text-xl mb-8">Comprehensive emotional analysis platform with advanced detection capabilities</p>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-12">
            <h2 className="text-2xl font-semibold mb-3 text-blue-800">About This Project</h2>
            <p className="mb-4 text-gray-700 text-lg">
              Dr. Lee's Expression Analysis platform represents a breakthrough in emotion recognition technology, 
              capable of detecting and analyzing human emotions across multiple modalities. Our system leverages 
              cutting-edge AI to provide unprecedented insight into human emotional states.
            </p>
            <p className="text-gray-700 text-lg">
              For the best interactive experience, we recommend running the application locally as it uses WebSocket 
              technology for real-time analysis. The locally-running version provides access to your camera and microphone 
              for live emotion detection.
            </p>

          </div>
          
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Detection Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard 
              title="Facial Expression Detection" 
              icon={SmileyIcon}
              linkUrl="/face"
              description="Our advanced facial expression analysis can detect 48 distinct emotional states from facial cues, including subtle microexpressions. This technology helps understand emotional responses in real-time, with applications ranging from market research to mental health monitoring."
            />
            
            <FeatureCard 
              title="Vocal Burst Analysis" 
              icon={MicrophoneIcon}
              linkUrl="/burst"
              description="Vocal bursts—non-verbal utterances like laughs, sighs, and gasps—contain rich emotional information. Our system detects and analyzes these sounds to reveal emotional states that might not be expressed through words, providing deeper insights into genuine reactions."
            />
            
            <FeatureCard 
              title="Speech Prosody Analysis" 
              icon={EarIcon}
              linkUrl="/prosody"
              description="Beyond just words, how we speak reveals our emotional state. Our speech prosody analysis examines pitch, rhythm, intonation, and vocal quality to identify emotions in spoken language, enabling more nuanced understanding of communication."
            />
            
            <FeatureCard 
              title="Written Language Analysis" 
              icon={ArticleIcon}
              linkUrl="/language"
              description="Our text analysis capability identifies emotional content and sentiment in written language. By processing nuanced emotional expressions in text, we can understand sentiment in everything from social media posts to customer feedback."
            />
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Applications & Benefits</h2>
            <ul className="text-left list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Market Research:</strong> Understand genuine emotional responses to products and advertisements</li>
              <li><strong>Healthcare:</strong> Support mental health monitoring and emotional well-being assessment</li>
              <li><strong>Education:</strong> Gauge student engagement and emotional responses to learning material</li>
              <li><strong>Customer Experience:</strong> Analyze customer satisfaction and emotional reactions to services</li>
              <li><strong>Human-Computer Interaction:</strong> Create more emotionally responsive AI systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticHomePage;