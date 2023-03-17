import s from "./index.module.scss";

import reactionIcon from "../../assets/images/icon-reaction.svg";
import memoryIcon from "../../assets/images/icon-memory.svg";
import verbalIcon from "../../assets/images/icon-verbal.svg";
import visualIcon from "../../assets/images/icon-visual.svg";

type IconType = "reaction" | "memory" | "verbal" | "visual";

type SummaryCardProps = {
  type?: IconType;
  value?: number;
};

type CardDataType = {
  [key in IconType]: {
    name: string;
    icon: string;
    class: string;
  };
};

const cardData: CardDataType = {
  reaction: {
    name: "Reaction",
    icon: reactionIcon,
    class: s.reaction,
  },
  memory: {
    name: "Memory",
    icon: memoryIcon,
    class: s.memory,
  },
  verbal: {
    name: "Verbal",
    icon: verbalIcon,
    class: s.verbal,
  },
  visual: {
    name: "Visual",
    icon: visualIcon,
    class: s.visual,
  },
};

function SummaryCard({ type = "reaction", value = 0 }: SummaryCardProps) {
  const card = cardData[type];
  const chosenCardName = card.name;
  const chosenIcon = card.icon;
  const chosenClass = card.class;

  return (
    <div className={`${s.card} ${chosenClass}`}>
      <img src={chosenIcon} draggable={false} width={20} height={20} style={{ userSelect: "none" }} />
      <h3 className={s.name}>{chosenCardName}</h3>
      <p className={s.value}>
        <span className={s.highlightValue}>{value}</span> / 100
      </p>
    </div>
  );
}

export default SummaryCard;
