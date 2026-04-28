import { baseOptions } from '@/lib/layout.shared';
import { BookOpen, CodeXml, GitBranch, Package, Puzzle, Sparkles } from 'lucide-react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import Link from 'next/link';

const features = [
  {
    icon: CodeXml,
    title: 'DreamShaderLang',
    text: '为了代替虚幻引擎材质“连连看”而生，把节点连接写成可读、可复用的文本。',
  },
  {
    icon: Puzzle,
    title: 'DreamShader 插件',
    text: '把语言文件接入 Unreal 工作流，生成材质资产，并保留清晰的编译诊断路径。',
  },
  {
    icon: Package,
    title: '社区包索引',
    text: 'PackageStore Index 用来组织可复用包，让团队和社区可以共享 DreamShaderLang 片段。',
  },
];

const quickLinks = [
  {
    title: '快速开始',
    text: '安装准备、第一个材质和项目布局。',
    href: '/docs/getting-started/installation',
  },
  {
    title: '语言核心',
    text: '文件模型、顶层声明、类型、函数与 Graph。',
    href: '/docs/syntax/file-model',
  },
  {
    title: '语言参考',
    text: '材质设置、输出绑定、UE 节点入口和包。',
    href: '/docs/reference/material-settings',
  },
];

export default function HomePage() {
  return (
    <HomeLayout
      {...baseOptions()}
      githubUrl="https://github.com/TypeDreamMoon/DreamShader"
      links={[
        {
          text: 'Docs',
          url: '/docs',
          active: 'nested-url',
        },
        {
          text: 'Packages',
          url: '/docs/workflows/package-authoring',
          active: 'nested-url',
        },
        {
          text: 'VSCode',
          url: 'https://github.com/TypeDreamMoon/dreamshader-language-support',
          external: true,
        },
      ]}
      nav={{
        ...baseOptions().nav,
        transparentMode: 'top',
      }}
      className="home-shell"
    >
      <section className="home-hero">
        <div className="home-hero-scene" aria-hidden="true">
          <div className="home-scene-grid" />
          <div className="home-wire home-wire-a" />
          <div className="home-wire home-wire-b" />
          <div className="home-wire home-wire-c" />
          <div className="home-node home-node-main">
            <span>Material</span>
            <strong>DreamShader</strong>
          </div>
          <div className="home-node home-node-cyan">
            <span>Function</span>
            <strong>FresnelRim</strong>
          </div>
          <div className="home-node home-node-pink">
            <span>Output</span>
            <strong>Emissive</strong>
          </div>
          <div className="home-node home-node-yellow">
            <span>Package</span>
            <strong>Index</strong>
          </div>
          <div className="home-code-panel">
            <span>shader NeonIdol</span>
            <span>property tint: float3 = mikuBlue</span>
            <span>graph baseColor = texture * tint</span>
            <span>output emissive = rim * 1.8</span>
          </div>
          <div className="home-wave" />
        </div>

        <div className="home-hero-content">
          <p className="home-eyebrow">
            <Sparkles aria-hidden="true" />
            DreamShader documentation
          </p>
          <h1>DreamShaderLang</h1>
          <p className="home-lede">
            为了代替虚幻引擎材质“连连看”而生的语言。用文本描述材质节点、属性、输出和共享逻辑，让材质像代码一样可阅读、可维护、可复用。
          </p>
          <div className="home-actions">
            <Link className="home-button home-button-primary" href="/docs">
              <BookOpen aria-hidden="true" />
              开始阅读
            </Link>
            <Link
              className="home-button home-button-secondary"
              href="https://github.com/TypeDreamMoon/DreamShader"
            >
              <GitBranch aria-hidden="true" />
              GitHub
            </Link>
          </div>
          <div className="home-metrics" aria-label="Documentation coverage">
            <span>Language Reference</span>
            <span>HLSL / GLSL</span>
            <span>Plugin Guide</span>
          </div>
        </div>
      </section>

      <section className="home-section" aria-labelledby="home-feature-title">
        <div className="home-section-header">
          <p>Documentation map</p>
          <h2 id="home-feature-title">为语言、插件和生态放在同一个入口</h2>
        </div>

        <div className="home-feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="home-feature-card" key={feature.title}>
                <span className="home-feature-icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="home-band" aria-labelledby="home-links-title">
        <div>
          <p>Quick start</p>
          <h2 id="home-links-title">从这里进入最常用的页面</h2>
        </div>
        <div className="home-link-grid">
          {quickLinks.map((item) => (
            <Link className="home-link-card" href={item.href} key={item.href}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </Link>
          ))}
        </div>
      </section>
    </HomeLayout>
  );
}
