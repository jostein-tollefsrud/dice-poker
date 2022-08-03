import { useState } from 'react';

type PlayerProps = {
  name: string;
};

const INITIAL_DICES = [
  {
    id: 0,
    value: 0,
    checked: false,
  },
  {
    id: 1,
    value: 0,
    checked: false,
  },
  {
    id: 2,
    value: 0,
    checked: false,
  },
  {
    id: 3,
    value: 0,
    checked: false,
  },
  {
    id: 4,
    value: 0,
    checked: false,
  },
];

const Player = ({ name }: PlayerProps) => {
  const [dices, setDices] = useState([...INITIAL_DICES]);

  let coins = 30;

  const throwDice = () => {
    let newArr = dices.map((item) => {
      const value = item.checked
        ? item.value
        : Math.floor(Math.random() * 6 + 1);

      return { ...item, value };
    });
    setDices(newArr);
  };

  const getResult = (dices: any) => {
    let values: number[] = [];

    dices.forEach((dice: any) => {
      values.push(dice.value);
    });

    values.sort();

    // values = [2, 3, 4, 5, 6];

    const first = values[0];
    const smallStraight =
      values.every((f, index) => f - first === index) && values[4] === 5;

    const largeStraight =
      values.every((f, index) => f - first === index) && values[4] === 6;

    return (
      (smallStraight && 'small straight') || (largeStraight && 'large straight')
    );
  };
  const test = getResult(dices);
  console.log(test);

  return (
    <section>
      <h2>{name}</h2>
      <p>evCoin: {coins}</p>
      {/* {p1Dices.map((dice, index) => (
            <button onClick={() => checkDice(index, 1)} key={dice.id}>
              {dice.value}
            </button>
          ))} */}
      {dices.map((dice: any, index: number) => (
        <button key={dice.id}>{dice.value}</button>
      ))}
      <button onClick={() => throwDice()}>Kast terninger</button>
      {/* <button onClick={() => throwDice(1)}>Kast terninger</button> */}
    </section>
  );
};

export default Player;
