class Player {
  name: string;
  coins: number;
  dices: any;

  constructor(name: string) {
    this.name = name;
    this.coins = 30;
    this.dices = [
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
  }

  getRandomNum() {
    return Math.floor(Math.random() * 6 + 1);
  }

  throwDice() {
    for (let i = 0; i < 5; i++) {
      if (this.dices[i].checked === false) {
        this.dices[i].value = this.getRandomNum();
      }
    }
    console.log(this.dices);
  }

  // checkDice(index: number) {
  //   this.dices[index].checked = !this.dices[index].checked;
  //   console.log(this.dices[index].checked);
  // }
}

export default Player;
