type PageIntroProps = {
  title: string;
  description: string;
};

export function PageIntro({ title, description }: PageIntroProps) {
  return (
    <div className="space-y-5">
      <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight text-text-primary md:text-5xl">
        {title}
      </h1>
      <p className="prose-shell text-pretty text-lg text-text-secondary">{description}</p>
    </div>
  );
}
