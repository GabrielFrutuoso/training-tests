import { useEffect, useState } from "react";
import apiClients from "../../services/apiClients";
import { ChampionIcon } from "../../components/ChampionIcon/ChampionIcon";

export const Home = () => {
  useEffect(() => {
    apiClients.championsInfos("");
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [champions, setChampions] = useState<any[]>([]);
  useEffect(() => {
    apiClients.championsInfos.get("").then((response) => {
      setChampions(Object.values(response.data.data));
    });
  }, []);

  console.log(champions);

  return (
    <div className="h-screen relative flex justify-center items-center">
      <div
        data-testid="home"
        className={`absolute top-0 right-0 h-screen w-screen bg-[url('https://www.lolvvv.com/_next/image?url=https%3A%2F%2Fwww.lolvvv.com%2Fwp-content%2Fuploads%2F2022%2F07%2Fsummoners-rift.jpg&w=1200&q=75')] bg-no-repeat bg-cover bg-center brightness-50 -z-10`}
      ></div>
      <div role="list" className="grid grid-cols-8 gap-2 h-[80vh] overflow-y-auto">
        {champions.map((champion) => (
          <ChampionIcon
            key={champion.id}
            id={champion.id}
            name={champion.name}
            icon={`https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion/${champion.id}.png`}
          />
        ))}
      </div>
    </div>
  );
};
