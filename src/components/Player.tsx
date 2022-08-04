import { useEffect, useState } from 'react';
import { getResult } from '../lib/getResult';

type PlayerProps = {
  name: string;
  coins: number;
};

interface PointsProps {
  name?: string;
  point: number;
}

const INITIAL_DICES = [
  {
    id: 0,
    value: 0,
    hold: false,
  },
  {
    id: 1,
    value: 0,
    hold: false,
  },
  {
    id: 2,
    value: 0,
    hold: false,
  },
  {
    id: 3,
    value: 0,
    hold: false,
  },
  {
    id: 4,
    value: 0,
    hold: false,
  },
];

const Player = ({ name, coins }: PlayerProps) => {
  const [dices, setDices] = useState([...INITIAL_DICES]);
  const [rolls, setRolls] = useState(0);
  const [points, setPoints] = useState<PointsProps>({ point: 0 });

  const throwDice = () => {
    if (rolls < 2) {
      let newArr = dices.map((item) => {
        const value = item.hold
          ? item.value
          : Math.floor(Math.random() * 6 + 1);

        return { ...item, value };
      });
      setDices(newArr);
      setRolls((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    const result = getResult(dices);
    setPoints(result);
  }, [dices]);

  /**
   * Markerer en terning som ikke skal kastes på nytt
   */
  const holdDice = (index: number) => {
    let newArr = dices.map((item, i) => {
      if (index === i) {
        return { ...item, hold: !dices[index].hold };
      } else {
        return item;
      }
    });
    setDices(newArr);
  };

  return (
    <section className='player'>
      <h2>{name}</h2>
      <p>evCoin: {coins}</p>
      {points.point > 0 && <p>{points.name}</p>}

      <div className='dices'>
        {dices.map((dice: any, index: number) => (
          <button
            key={dice.id}
            onClick={() => holdDice(index)}
            // style={{ borderColor: dice.hold ? 'red' : 'black' }}
            className={`dice ${dice.hold && 'select'}`}
          >
            {dice.value}
          </button>
        ))}
      </div>
      <button className='btn' onClick={() => throwDice()} disabled={rolls >= 2}>
        Kast terninger
      </button>
    </section>
  );
};

export default Player;
