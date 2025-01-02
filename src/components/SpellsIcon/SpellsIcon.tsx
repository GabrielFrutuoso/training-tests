interface SpellsProps {
  image: string;
  alt: string;
  description: string;
}

const SpellsIcon = ({ image, alt, description }: SpellsProps) => {
  return (
    <div data-testid="spellIcon" className="relative group">
      <div className="p-2 rounded-md bg-zinc-800 text-white absolute  left-1/2 -translate-x-1/2 -translate-y-full min-w-96 hidden group-hover:flex">
        <p>{description}</p>
      </div>
      <img
        src={image}
        alt={alt}
        className="rounded-full group-hover:cursor-pointer"
      />
    </div>
  );
};

export default SpellsIcon;
