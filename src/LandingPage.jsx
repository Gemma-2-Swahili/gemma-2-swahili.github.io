import React from 'react';
import { 
  Brain, 
  Globe, 
  ChevronRight, 
  Book, 
  Cpu, 
  Code,
  MessageSquare,
  Pen,
  Calculator 
} from 'lucide-react';

// Model description component
const ModelCard = ({ icon: Icon, title, description, specs }) => (
  <div className="bg-white/5 rounded-lg p-6 mb-6">
    <Icon className="h-10 w-10 mb-4" />
    <h3 className="text-xl font-medium mb-3">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="text-sm text-gray-500">{specs}</div>
  </div>
);

const ModelExample = ({ title, prompt, response }) => (
  <div className="bg-white/5 rounded-lg p-6 mb-6">
    <h4 className="text-lg font-medium mb-3">{title}</h4>
    <div className="mb-4">
      <div className="text-sm text-gray-400 mb-2">Prompt:</div>
      <div className="bg-white/10 rounded p-3 text-sm">{prompt}</div>
    </div>
    <div>
      <div className="text-sm text-gray-400 mb-2">Response:</div>
      <div className="bg-white/10 rounded p-3 text-sm">{response}</div>
    </div>
  </div>
);

const BenchmarkGraph = ({ title, imagePath, description }) => (
  <div className="bg-white/5 rounded-lg p-6 mb-12">
    <h4 className="text-lg font-medium mb-3">{title}</h4>
    <img src={imagePath} alt={title} className="w-full rounded mb-3" />
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-sm text-center text-gray-400">January 15, 2025</p>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-display mb-6">
          Introducing Gemma 2 Swahili
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          A comprehensive suite of Swahili variations of Gemma 2 language models, bringing advanced AI capabilities to 200M+ speakers.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="https://huggingface.co/collections/Alfaxad/gemma-2-swahili-678c96591c0169c0bc1d4c34" 
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-white text-black px-6 py-2 rounded-full flex items-center hover:bg-gray-200"
          >
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
          <a 
            href="technical-reports.html" 
            target="_blank"
            rel="noopener noreferrer" 
            className="text-white border border-white/20 px-6 py-2 rounded-full flex items-center hover:bg-white/10"
          >
            Technical Reports
            <Book className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="max-w-6xl mx-auto px-4 mb-24">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/images/kilimanjaro.jpg"
            alt="Kilimanjaro landscape"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>

      {/* Model Icons */}
      <div className="max-w-3xl mx-auto px-4 mb-24">
        <div className="bg-white/5 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-sm mt-2">2B Instruction-tuned Model</span>
              <span className="text-xs text-gray-400">Lightweight</span>
            </div>
            <div className="flex flex-col items-center">
              <Cpu className="h-8 w-8 text-green-400" />
              <span className="text-sm mt-2">9B Instruction-tuned Model</span>
              <span className="text-xs text-gray-400">Balanced</span>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-8 w-8 text-purple-400" />
              <span className="text-sm mt-2">27B Instruction-tuned Model</span>
              <span className="text-xs text-gray-400">Advanced</span>
            </div>
            <div className="flex flex-col items-center">
              <Code className="h-8 w-8 text-yellow-400" />
              <span className="text-sm mt-2">2B Preview</span>
              <span className="text-xs text-gray-400">Experimental</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 mb-24">
        <h2 className="text-3xl font-medium mb-12 text-center">Our Models</h2>
        
        <ModelCard 
          icon={Brain}
          title="Gemma2-2B-Swahili-Preview"
          description="A specialized (continual-pretrained) model focused on Swahili language understanding."
          specs="2 billion parameters • 8K context window • Base model adaptation"
        />
        
        <ModelCard 
          icon={Code}
          title="Gemma2-2B-Swahili-IT"
          description="Lightweight instruction-tuned model optimized for efficient Swahili text generation and task completion."
          specs="2 billion parameters • LoRA fine-tuned • High efficiency"
        />
        
        <ModelCard 
          icon={Cpu}
          title="Gemma2-9B-Swahili-IT"
          description="Balanced model offering enhanced capabilities while maintaining reasonable compute requirements."
          specs="9 billion parameters • LoRA fine-tuned • Optimal performance trade-off"
        />
        
        <ModelCard 
          icon={Globe}
          title="Gemma2-27B-Swahili-IT"
          description="Our flagship instruction-tuned model delivering state-of-the-art Swahili language understanding."
          specs="27 billion parameters • QLoRA fine-tuned • Best performance"
        />
      </div>

      {/* Model Capabilities section */}
      <div className="max-w-4xl mx-auto px-4 mb-24">
        <h2 className="text-3xl font-medium mb-8 text-center">Model Capabilities</h2>
        <ModelExample 
          title="Creative Writing Saample (Model: Gemma 2B swahili IT)"
          prompt="Tunga hadithi fupi kuhusu Twiga"
          response={
            <div className="space-y-4">
              {[
                "Twiga alikuwa mnyama mwitu wa asili ambaye alikuwa na furaha ya kuishi katika jiji la bandarini. Alikuwa amefungwa kwa nyumba yake ya kawaida, lakini kwa sababu ya uchovu wake, alikuwa hana muda wa kucheza.",
                
                "Hata hivyo, wakati huo huo, jiji lake lilikuwa ikipigwa na mabadiliko ya hali ya hewa. Maji yalikuwa ya kupotea, na mnamo siku moja, Twiga aliona kuwa kuna maji ya ziwa yalipotea. Kulikuwa na hali mbaya kwa Twiga, kwani alikuwa na hofu ya kuchelewesha mabadiliko hayo na kupoteza nyumba yake ya kawaida.",
                
                "Twiga alitaka kupata maji ya ziwa, lakini hakujua jinsi ya kufanya hivyo. Alitumia wakati wake kuangalia kwenye barabara, lakini hakuwa na uhakika jinsi ya kufikia ziwa.",
                
                "Baada ya muda, Twiga alimwona mtu aliyeketi kwenye kiti karibu na ziwa na alimwomba msaada.",
                
                "Mtu huyo alisema kuwa alikuwa na mtihani wa kufikia ziwa, na Twiga alimfuatilia. Kisha, mtihani huo ulikuwa wa kufikiria na kuwasiliana na kila kitu kilichopo karibu. Twiga alipata msaada na aliweza kufikia ziwa.",
                
                "Twiga alimwona watu wengi waliokuwa wakifanya kazi kwenye ziwa, na aliona kuwa unaweza kufanya kazi yake kama mnyama.",
                
                "Baada ya siku, Twiga alitambua kuwa alikuwa mnyama mwitu na alikuwa amefurahi kufanya kazi. Alikuwa na furaha ya kufanya kazi kwa sababu ya kuwa mnyama mwitu na kuwa na uhakika kwamba angeweza kufanya kazi kwa ajili ya taifa lake."
              ].map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          }
        />
        <ModelExample 
          title="Comprehensive Writing Sample (Model: Gemma 2B Swahili IT)"
          prompt="Eleza dhana ya uchumi wa kidijitali na umuhimu wake katika ulimwengu wa leo"
          response={
            <div className="space-y-4">
              {[
                "Uchumi wa kidijitali ni uchumi uliofungwa na mbinu ya teknolojia ya mtandaoni. Huonyesha mifumo ya uhamasishaji, ufuatiliaji wa biashara, na ufuatiliaji wa rasilimali. Uhamasishaji wa kidijitali ni muhimu kwa biashara, watu wanapojaribu kuingia kwenye soko la bidhaa au huduma. Ufuatiliaji wa rasilimali unafanya kazi kwa kutoa ufahamu juu ya utendaji wa biashara. Ufuatiliaji wa biashara unafanya kazi kwa kutoa ufahamu juu ya utendaji wa biashara.",
                
                "Uchumi wa kidijitali ni muhimu kwa sababu inawezesha mawasiliano yenye haraka na yenye gharama nafuu, na inawezesha biashara za muda mrefu na za muda mfupi. Inasaidia watu kuingia kwenye soko la bidhaa na huduma, na inapunguza gharama za biashara kwa kuweka rasilimali za mawasiliano ya ndani.",
                
                "Uchumi wa kidijitali unahusishwa na uhamasishaji wa bidhaa, ambayo ni muhimu kwa sababu inaleta faida kwa watu wanaofanya biashara. Uhamasishaji wa kidijitali unaweza kuongeza ufanisi na ufanisi wa biashara, na kuongeza faida za biashara.",
                
                "Uchumi wa kidijitali ni muhimu sana katika ulimwengu wa leo. Inawezesha biashara, watu wanaofanya biashara, na watu wengine wanaofanya biashara. Uhamasishaji wa kidijitali ni muhimu kwa biashara, watu wanaofanya biashara, na watu wengine wanaofanya biashara. Ufuatiliaji wa rasilimali na biashara ni muhimu kwa biashara, watu wanaofanya biashara, na watu wengine wanaofanya biashara. Uchumi wa kidijitali ni muhimu sana katika ulimwengu wa leo, na inahusishwa na mawasiliano yenye haraka, yenye gharama nafuu, na uhamasishaji wa bidhaa."
              ].map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          }
        />
      </div>

      {/* Benchmarks section - Full width graphs */}
      <div className="max-w-5xl mx-auto px-4 mb-24">
        <h2 className="text-3xl font-medium mb-12 text-center">Performance Benchmarks</h2>
        
        <BenchmarkGraph 
          title="MMLU (Massive Multitask Language Understanding) Performance Comparison"
          imagePath="/images/mmlu-graph.png"
          description="Comparison of model performance on Swahili MMLU benchmark across different model sizes"
        />
        
        <BenchmarkGraph 
          title="Sentiment Analysis Results"
          imagePath="/images/sentiment-graph.png"
          description="Swahili Sentiment analysis performance improvements after fine-tuning"
        />
      </div>

      {/* Applications Section */}
      <div className="max-w-4xl mx-auto px-4 mb-24">
        <h2 className="text-3xl font-medium mb-8 text-center">Applications</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/5 p-6 rounded-lg text-center">
            <Pen className="h-8 w-8 mx-auto mb-3 text-blue-400" />
            <h4 className="font-medium mb-2">Content Creation</h4>
            <p className="text-sm text-gray-400">Generate creative and technical content in Swahili</p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg text-center">
            <Calculator className="h-8 w-8 mx-auto mb-3 text-green-400" />
            <h4 className="font-medium mb-2">Analysis</h4>
            <p className="text-sm text-gray-400">Process and analyze Swahili text data</p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg text-center">
            <MessageSquare className="h-8 w-8 mx-auto mb-3 text-purple-400" />
            <h4 className="font-medium mb-2">Conversation</h4>
            <p className="text-sm text-gray-400">Natural language interaction in Swahili</p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg text-center">
            <Globe className="h-8 w-8 mx-auto mb-3 text-yellow-400" />
            <h4 className="font-medium mb-2">Translation</h4>
            <p className="text-sm text-gray-400">Enhanced English-Swahili translation</p>
          </div>
        </div>
      </div>

      {/* Enhanced Call to Action */}
      <div className="max-w-3xl mx-auto px-4 text-center pb-36">
        <h2 className="text-3xl font-medium mb-6">Start Building with Gemma 2 Swahili</h2>
        <p className="text-gray-400 mb-8">
          Explore our models, documentation, and examples to start building Swahili-native AI applications.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a 
            href="https://huggingface.co/collections/Alfaxad/gemma-2-swahili-678c96591c0169c0bc1d4c34" 
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-white text-black px-8 py-3 rounded-full flex items-center hover:bg-gray-200"
          >
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
          <a 
            href="https://www.kaggle.com/code/alfaxadeyembe/introducing-gemma-2-swahili?kernelSessionId=217688347" 
            target="_blank"
            rel="noopener noreferrer" 
            className="text-white border border-white/20 px-8 py-3 rounded-full flex items-center hover:bg-white/10"
          >
            View Documentation
            <Book className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

