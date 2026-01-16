import { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, ArrowLeft, X, Sparkles } from 'lucide-react';
import { Badge } from './ui/badge';

interface QuizProps {
  onClose: () => void;
}

interface QuizAnswer {
  question: string;
  answer: string;
}

export function WigQuiz({ onClose }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What's your hair styling experience level?",
      options: [
        { value: 'beginner', label: 'Beginner - New to wigs', recommendation: 'glueless' },
        { value: 'intermediate', label: 'Intermediate - Some experience', recommendation: 'lace-front' },
        { value: 'advanced', label: 'Advanced - Very experienced', recommendation: 'full-lace' },
      ]
    },
    {
      id: 2,
      question: "What's your preferred hair length?",
      options: [
        { value: 'short', label: 'Short (8-12 inches)', recommendation: 'short' },
        { value: 'medium', label: 'Medium (14-18 inches)', recommendation: 'medium' },
        { value: 'long', label: 'Long (20-26 inches)', recommendation: 'long' },
        { value: 'extra-long', label: 'Extra Long (28+ inches)', recommendation: 'extra-long' },
      ]
    },
    {
      id: 3,
      question: "What's your preferred hair texture?",
      options: [
        { value: 'straight', label: 'Straight & Sleek', recommendation: 'straight' },
        { value: 'wavy', label: 'Wavy & Natural', recommendation: 'wavy' },
        { value: 'curly', label: 'Curly & Bouncy', recommendation: 'curly' },
        { value: 'kinky', label: 'Kinky & Textured', recommendation: 'kinky' },
      ]
    },
    {
      id: 4,
      question: "How often will you wear your wig?",
      options: [
        { value: 'daily', label: 'Daily wear', recommendation: 'durable' },
        { value: 'weekly', label: 'Few times a week', recommendation: 'versatile' },
        { value: 'occasional', label: 'Special occasions', recommendation: 'glamorous' },
      ]
    },
    {
      id: 5,
      question: "What's your face shape?",
      options: [
        { value: 'oval', label: 'Oval - Balanced proportions', recommendation: 'any-style' },
        { value: 'round', label: 'Round - Soft, circular', recommendation: 'long-layers' },
        { value: 'square', label: 'Square - Strong jawline', recommendation: 'soft-waves' },
        { value: 'heart', label: 'Heart - Wider forehead', recommendation: 'side-part' },
      ]
    },
    {
      id: 6,
      question: "What's your budget range?",
      options: [
        { value: 'budget', label: 'Under $200', recommendation: 'affordable' },
        { value: 'mid', label: '$200 - $400', recommendation: 'premium' },
        { value: 'luxury', label: '$400+', recommendation: 'luxury' },
      ]
    },
  ];

  const handleAnswer = (option: { value: string; label: string; recommendation: string }) => {
    const newAnswers = [
      ...answers,
      { question: questions[currentQuestion].question, answer: option.label }
    ];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const getRecommendation = () => {
    // Based on answers, provide personalized recommendations
    const experience = answers[0]?.answer || '';
    const length = answers[1]?.answer || '';
    const texture = answers[2]?.answer || '';
    
    if (experience.includes('Beginner')) {
      return {
        title: 'Glueless Wonder Collection',
        description: 'Perfect for beginners! Our glueless wigs are easy to apply, comfortable, and look incredibly natural.',
        products: ['Glueless Bob Wig', 'Easy Wear Straight Wig', 'Beginner-Friendly Lace Front'],
        price: '$249 - $349'
      };
    } else if (texture.includes('Curly')) {
      return {
        title: 'Luxe Curly Collection',
        description: 'Embrace your curls! Our premium curly wigs feature bouncy, natural-looking textures.',
        products: ['Luxury Curly Lace Front', 'Deep Wave Wig', 'Spiral Curl Perfection'],
        price: '$299 - $449'
      };
    } else if (length.includes('Long') || length.includes('Extra Long')) {
      return {
        title: 'Long & Luxurious Collection',
        description: 'Make a statement! Our long-length wigs feature premium quality hair that flows beautifully.',
        products: ['24" Straight Goddess Wig', '26" Body Wave Luxury', '28" Silky Straight'],
        price: '$349 - $549'
      };
    } else {
      return {
        title: 'Classic Elegance Collection',
        description: 'Timeless beauty! Our versatile collection suits any occasion and style preference.',
        products: ['14" Classic Straight', 'Medium Wave Perfection', 'Elegant Layered Wig'],
        price: '$279 - $399'
      };
    }
  };

  if (showResults) {
    const recommendation = getRecommendation();
    
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121212]/80 backdrop-blur-sm">
        <div className="bg-[#FDFBF6] rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-[#FDFBF6] border-b border-[#72513C]/10 p-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="text-[#E8B4BC]" size={24} />
              <h2 className="text-2xl text-[#121212] luxury-heading">Your Perfect Match</h2>
            </div>
            <button
              onClick={onClose}
              className="text-[#72513C] hover:text-[#5d4230] transition-colors"
              aria-label="Close quiz"
            >
              <X size={24} />
            </button>
          </div>

          {/* Results */}
          <div className="p-8">
            <Badge className="mb-4 bg-[#E8B4BC] text-[#121212] hover:bg-[#E8B4BC]">
              Personalized Recommendation
            </Badge>
            
            <h3 className="text-3xl md:text-4xl text-[#121212] mb-4 luxury-heading">
              {recommendation.title}
            </h3>
            
            <p className="text-lg text-[#72513C] mb-8 leading-relaxed">
              {recommendation.description}
            </p>

            {/* Recommended Products */}
            <div className="bg-white rounded-2xl p-6 mb-6 border border-[#72513C]/10">
              <h4 className="text-[#72513C] mb-4" style={{ fontWeight: 600 }}>
                Recommended Styles
              </h4>
              <ul className="space-y-3">
                {recommendation.products.map((product, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#72513C]/80">
                    <div className="w-2 h-2 rounded-full bg-[#E8B4BC]"></div>
                    {product}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-[#72513C]/60">
                Price Range: {recommendation.price}
              </p>
            </div>

            {/* Your Answers Summary */}
            <div className="bg-[#f5f1ea] rounded-2xl p-6 mb-8">
              <h4 className="text-[#72513C] mb-4" style={{ fontWeight: 600 }}>
                Your Preferences
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {answers.map((answer, index) => (
                  <div key={index} className="text-sm">
                    <p className="text-[#72513C]/60">{answer.question}</p>
                    <p className="text-[#72513C]" style={{ fontWeight: 500 }}>{answer.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="flex-1 bg-[#72513C] hover:bg-[#5d4230] text-white"
                size="lg"
              >
                Shop Recommended Styles
              </Button>
              <Button
                onClick={handleRestart}
                variant="outline"
                className="flex-1 border-2 border-[#72513C] text-[#72513C] hover:bg-[#72513C] hover:text-white"
                size="lg"
              >
                Retake Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121212]/80 backdrop-blur-sm">
      <div className="bg-[#FDFBF6] rounded-3xl shadow-2xl max-w-2xl w-full">
        {/* Header */}
        <div className="border-b border-[#72513C]/10 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl text-[#121212] luxury-heading">Find Your Perfect Wig</h2>
            <p className="text-sm text-[#72513C]/60 mt-1">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#72513C] hover:text-[#5d4230] transition-colors"
            aria-label="Close quiz"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 pt-4">
          <div className="w-full bg-[#f5f1ea] rounded-full h-2">
            <div
              className="bg-[#E8B4BC] h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="p-8">
          <h3 className="text-2xl md:text-3xl text-[#121212] mb-8 luxury-heading">
            {questions[currentQuestion].question}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-4 rounded-xl border-2 border-[#72513C]/20 hover:border-[#72513C] hover:bg-[#f5f1ea] transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#72513C] group-hover:text-[#5d4230]" style={{ fontWeight: 500 }}>
                    {option.label}
                  </span>
                  <ArrowRight className="text-[#72513C]/40 group-hover:text-[#72513C] group-hover:translate-x-1 transition-all" size={20} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="border-t border-[#72513C]/10 p-6 flex items-center justify-between">
          <Button
            onClick={handleBack}
            variant="ghost"
            className="text-[#72513C] hover:text-[#5d4230] hover:bg-[#f5f1ea]"
            disabled={currentQuestion === 0}
          >
            <ArrowLeft size={20} className="mr-2" />
            Back
          </Button>
          <p className="text-sm text-[#72513C]/60">
            {currentQuestion + 1} / {questions.length}
          </p>
        </div>
      </div>
    </div>
  );
}
