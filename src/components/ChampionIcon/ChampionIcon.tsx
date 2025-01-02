interface Props {
  name: string;
  icon: string;
}

export const ChampionIcon = ({ name, icon }: Props) => {
  return (
    <div data-testid="champions card" title={name} className="flex flex-col">
      <img src={icon} alt={`icon of ${name}`} />
      <h1 className="text-neutral-300 ml-2">{name}</h1>
    </div>
  );
};
