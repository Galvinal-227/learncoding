import { useState } from 'react';
import { Link } from 'react-router-dom';
import { rootCategories } from '../data/index.js';
import { IoAccessibility } from "react-icons/io5";
import { FaAws, FaCode, FaInternetExplorer } from "react-icons/fa";
import { TbFileLambdaFilled, TbGridPatternFilled } from "react-icons/tb";
import { VscCodeReview, VscTerminalPowershell } from "react-icons/vsc";
import { GrLinkedin } from "react-icons/gr";
import { BsOpenai, BsFan } from "react-icons/bs";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  FiCode,
  FiLayers,
  FiBox,
  FiBookOpen,
  FiArrowRight,
  FiCheck,
  FiDatabase,
  FiGitBranch,
  FiServer,
  FiStar,
  FiGlobe,
  FiShield,
  FiZap,
  FiLayout,
  FiCpu,
  FiAward,
  FiUsers,
  FiLock,
  FiCloud,
  FiTool,
  FiSmartphone,
  FiMonitor,
  FiPenTool,
  FiCommand,
  FiPackage,
  FiFolder,
  FiBarChart2,
  FiBarChart
} from 'react-icons/fi';

// Import Simple Icons
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiSass,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiSequelize,
  SiSupabase,
  SiFirebase,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiNetlify,
  SiLinux,
  SiNginx,
  SiGoogleanalytics,
  SiFigma,
  SiStorybook,
  SiJest,
  SiCypress,
  SiTestinglibrary,
  SiEslint,
  SiPrettier,
  SiWebpack,
  SiVite,
  SiBabel,
  SiNpm,
  SiYarn,
  SiPnpm,
  SiThreedotjs,
  SiFramer,
  SiGreensock,
  SiChartdotjs,
  SiGraphql,
  SiSocketdotio,
  SiAuth0,
  SiStripe,
  SiScrumalliance,
  SiUpwork,
  SiThealgorithms,
  SiGooglesearchconsole,
  SiOwasp,
  SiLighthouse,
  SiSentry,
  SiWebassembly,
  SiLerna,
  SiStrapi,
  SiGooglechrome,
  SiMarkdown,
  SiReactquery,
  SiRedux,
  SiDiscorddotjs
} from 'react-icons/si';

const iconMap = {
  // Simple Icons (Si)
  SiReact: <SiReact />,
  SiNextdotjs: <SiNextdotjs />,
  SiTypescript: <SiTypescript />,
  SiJavascript: <SiJavascript />,
  SiHtml5: <SiHtml5 />,
  SiCss: <SiCss />,
  SiTailwindcss: <SiTailwindcss />,
  SiSass: <SiSass />,
  SiBootstrap: <SiBootstrap />,
  SiGit: <SiGit />,
  SiGithub: <SiGithub />,
  SiNodedotjs: <SiNodedotjs />,
  SiExpress: <SiExpress />,
  SiNestjs: <SiNestjs />,
  SiPostgresql: <SiPostgresql />,
  SiMongodb: <SiMongodb />,
  SiMysql: <SiMysql />,
  SiPrisma: <SiPrisma />,
  SiSequelize: <SiSequelize />,
  SiSupabase: <SiSupabase />,
  SiFirebase: <SiFirebase />,
  SiRedis: <SiRedis />,
  SiDocker: <SiDocker />,
  SiKubernetes: <SiKubernetes />,
  FaAws: <FaAws />,
  SiVercel: <SiVercel />,
  SiNetlify: <SiNetlify />,
  SiLinux: <SiLinux />,
  SiNginx: <SiNginx />,
  BsOpenai: <BsOpenai />,
  SiGoogleanalytics: <SiGoogleanalytics />,
  SiFigma: <SiFigma />,
  SiStorybook: <SiStorybook />,
  SiJest: <SiJest />,
  SiCypress: <SiCypress />,
  SiTestinglibrary: <SiTestinglibrary />,
  SiEslint: <SiEslint />,
  SiPrettier: <SiPrettier />,
  SiWebpack: <SiWebpack />,
  SiVite: <SiVite />,
  SiBabel: <SiBabel />,
  SiNpm: <SiNpm />,
  SiYarn: <SiYarn />,
  SiPnpm: <SiPnpm />,
  SiThreedotjs: <SiThreedotjs />,
  SiFramer: <SiFramer />,
  SiGreensock: <SiGreensock />,
  SiChartdotjs: <SiChartdotjs />,
  SiDiscorddotjs: <SiDiscorddotjs />,
  SiGraphql: <SiGraphql />,
  SiSocketdotio: <SiSocketdotio />,
  SiAuth0: <SiAuth0 />,
  SiStripe: <SiStripe />,
  SiScrumalliance: <SiScrumalliance />,
  GrLinkedin: <GrLinkedin />,
  SiUpwork: <SiUpwork />,
  VscCodeReview: <VscCodeReview />,
  TbGridPatternFilled: <TbGridPatternFilled />,
  FaCode : <FaCode  />,
  SiThealgorithms: <SiThealgorithms />,
  IoAccessibility: <IoAccessibility />,
  SiGooglesearchconsole: <SiGooglesearchconsole />,
  SiOwasp: <SiOwasp />,
  SiLighthouse: <SiLighthouse />,
  SiSentry: <SiSentry />,
  SiWebassembly: <SiWebassembly />,
  TbFileLambdaFilled: <TbFileLambdaFilled />,
  SiLerna: <SiLerna />,
  SiStrapi: <SiStrapi />,
  SiGooglechrome: <SiGooglechrome />,
  BiLogoVisualStudio: <BiLogoVisualStudio />,
  SiMarkdown: <SiMarkdown />,
  VscTerminalPowershell: <VscTerminalPowershell />,
  FaInternetExplorer: <FaInternetExplorer />,
  BsFan: <BsFan />,
  SiReactquery: <SiReactquery />,
  SiRedux: <SiRedux />,
};

// Warna default
const defaultIcon = <FiBookOpen />;
const defaultColor = "#6B7280";
const defaultBg = "bg-white/5";

// Level badge colors
const levelColors = {
  Beginner: "text-green-400 border-green-400/30 bg-green-400/10",
  Intermediate: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
  Advanced: "text-red-400 border-red-400/30 bg-red-400/10",
};

const Learn = () => {
  const [activeDifficulty, setActiveDifficulty] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  // Ambil data dari rootCategories
  const tutorials = rootCategories
    .filter((cat) => cat.isPublished === true)
    .sort((a, b) => a.order - b.order);

  // Filter berdasarkan difficulty
  const filteredTutorials =
    activeDifficulty === 'All'
      ? tutorials
      : tutorials.filter((t) => t.difficulty === activeDifficulty);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Hitung total chapters
  const totalChapters = tutorials.reduce((sum, t) => sum + (t.totalChapters || 0), 0);

  return (
    <section className="py-20 px-6" id="learn">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-xs text-apple-gray-medium tracking-[0.2em] uppercase mb-3">
            Learning Path
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Learn Coding with GWD
          </h2>
          <p className="text-sm text-apple-gray-medium mt-3">
            {tutorials.length} modules • {totalChapters} chapters
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveDifficulty('All')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeDifficulty === 'All'
                ? 'bg-white text-black'
                : 'text-apple-gray-medium hover:text-white border border-white/10 hover:border-white/30'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveDifficulty('Beginner')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeDifficulty === 'Beginner'
                ? 'bg-green-500 text-white'
                : 'text-apple-gray-medium hover:text-white border border-white/10 hover:border-white/30'
            }`}
          >
            Beginner
          </button>
          <button
            onClick={() => setActiveDifficulty('Intermediate')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeDifficulty === 'Intermediate'
                ? 'bg-yellow-500 text-white'
                : 'text-apple-gray-medium hover:text-white border border-white/10 hover:border-white/30'
            }`}
          >
            Intermediate
          </button>
          <button
            onClick={() => setActiveDifficulty('Advanced')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeDifficulty === 'Advanced'
                ? 'bg-red-500 text-white'
                : 'text-apple-gray-medium hover:text-white border border-white/10 hover:border-white/30'
            }`}
          >
            Advanced
          </button>
        </div>

        {/* Tutorial List */}
        <div className="space-y-3">
          {filteredTutorials.map((tutorial) => {
            const IconComponent = iconMap[tutorial.icon] || defaultIcon;
            const levelColor = levelColors[tutorial.difficulty] || 'text-gray-400 border-gray-400/30 bg-gray-400/10';

            return (
              <div
                key={tutorial.slug}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  expandedId === tutorial.slug
                    ? 'border-white/20 bg-white/[0.02]'
                    : 'border-white/10 bg-transparent hover:border-white/20'
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => toggleExpand(tutorial.slug)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                >
                  <div className="flex items-center space-x-4 min-w-0">
                    <div className={`p-2.5 rounded-xl flex-shrink-0`} style={{ backgroundColor: tutorial.color ? `${tutorial.color}20` : defaultBg }}>
                      <span style={{ color: tutorial.color || defaultColor }}>
                        {IconComponent}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center flex-wrap gap-2">
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border ${levelColor}`}>
                          {tutorial.difficulty}
                        </span>
                        <span className="text-[10px] text-apple-gray-medium">
                          {tutorial.totalChapters || 0} chapters
                        </span>
                        <h3 className="text-lg font-semibold text-white truncate">
                          {tutorial.title}
                        </h3>
                      </div>
                      <p className="text-sm text-apple-gray-medium mt-1 line-clamp-1">
                        {tutorial.description}
                      </p>
                    </div>
                  </div>
                  <FiArrowRight
                    className={`text-apple-gray-medium transition-transform duration-300 flex-shrink-0 ml-4 ${
                      expandedId === tutorial.slug ? 'rotate-90' : ''
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                {expandedId === tutorial.slug && (
                  <div className="px-5 pb-5 space-y-2">
                    <div className="border-t border-white/5 pt-4">
                      <p className="text-sm text-apple-gray-medium mb-3">
                        {tutorial.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-apple-gray-medium">
                        <span>📚 {tutorial.totalChapters || 0} chapters</span>
                        <span>•</span>
                        <span>📊 {tutorial.difficulty}</span>
                        {tutorial.color && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: tutorial.color }} />
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <Link
                      to={`/learn/${tutorial.slug}`}
                      className="flex items-center justify-center space-x-2 w-full py-2.5 mt-2 bg-white/10 text-white rounded-full font-semibold text-sm hover:bg-apple-gray-light transition-all duration-300"
                    >
                      <span>Mulai Belajar</span>
                      <FiArrowRight />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredTutorials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-apple-gray-medium">No modules found for this level yet.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Learn;