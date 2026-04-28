import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

function DreamShaderTitle() {
  return (
    <span className="miku-brand" aria-label="DreamShaderLang">
      <span className="miku-brand-text">DreamShaderLang</span>
    </span>
  );
}

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <DreamShaderTitle />,
    },
  };
}
