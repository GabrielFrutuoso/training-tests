import { Link } from "react-router-dom";

interface Props {
  id: string;
  name: string;
  icon: string;
}

export const ChampionIcon = ({ id, name, icon }: Props) => {
  return (
    <Link role="listitem" to={`/ChampionScreen?id=${id}&skin=0`} data-testid="champions card" title={name} className="flex flex-col">
      <img src={icon} alt={`icon of ${name}`} />
      <h1 className="text-neutral-300 ml-2">{name}</h1>
    </Link>
  );
};
