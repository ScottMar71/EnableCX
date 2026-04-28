type PageIntroProps = {
  title: string;
  description: string;
};

export function PageIntro({ title, description }: PageIntroProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-semibold text-text-primary md:text-5xl">{title}</h1>
      <p className="prose-shell text-lg text-text-secondary">{description}</p>
    </div>
  );
}
