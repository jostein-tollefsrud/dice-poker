const checkOccurence = (
  array: number[],
  element: number,
  occurence: number
) => {
  let counter = 0;

  for (let item of array.flat()) {
    if (item == element) {
      counter++;
    }
  }

  return counter === occurence;
};

const getResult = (dices: any) => {
  let values: number[] = [];
  dices.forEach((dice: any) => {
    values.push(dice.value);
  });
  values.sort();

  /**
   * Ett par 1 + 1
   */
  const ettPar_1 = checkOccurence(values, 1, 2);
  const ettPar_2 = checkOccurence(values, 2, 2);
  const ettPar_3 = checkOccurence(values, 3, 2);
  const ettPar_4 = checkOccurence(values, 4, 2);
  const ettPar_5 = checkOccurence(values, 5, 2);
  const ettPar_6 = checkOccurence(values, 6, 2);

  /**
   * Tre like 1+1+1
   */
  const treLike_1 = checkOccurence(values, 1, 3);
  const treLike_2 = checkOccurence(values, 2, 3);
  const treLike_3 = checkOccurence(values, 3, 3);
  const treLike_4 = checkOccurence(values, 4, 3);
  const treLike_5 = checkOccurence(values, 5, 3);
  const treLike_6 = checkOccurence(values, 6, 3);

  /**
   * Fire like 1+1+1+1
   */
  const fireLike_1 = checkOccurence(values, 1, 4);
  const fireLike_2 = checkOccurence(values, 2, 4);
  const fireLike_3 = checkOccurence(values, 3, 4);
  const fireLike_4 = checkOccurence(values, 4, 4);
  const fireLike_5 = checkOccurence(values, 5, 4);
  const fireLike_6 = checkOccurence(values, 6, 4);

  /**
   * Fem like 1+1+1+1+1
   */
  const femLike_1 = checkOccurence(values, 1, 5);
  const femLike_2 = checkOccurence(values, 2, 5);
  const femLike_3 = checkOccurence(values, 3, 5);
  const femLike_4 = checkOccurence(values, 4, 5);
  const femLike_5 = checkOccurence(values, 5, 5);
  const femLike_6 = checkOccurence(values, 6, 5);

  /**
   * Fullt hus
   */
  // hus 1 1 1 + 2 2
  const hus_1_2 = treLike_1 && ettPar_2;
  const hus_1_3 = treLike_1 && ettPar_3;
  const hus_1_4 = treLike_1 && ettPar_4;
  const hus_1_5 = treLike_1 && ettPar_5;
  const hus_1_6 = treLike_1 && ettPar_6;

  // hus 2 2 2 + 1 1
  const hus_2_1 = treLike_2 && ettPar_1;
  const hus_2_3 = treLike_2 && ettPar_3;
  const hus_2_4 = treLike_2 && ettPar_4;
  const hus_2_5 = treLike_2 && ettPar_5;
  const hus_2_6 = treLike_2 && ettPar_6;

  // hus 3 3 3 + 1 1
  const hus_3_1 = treLike_3 && ettPar_1;
  const hus_3_2 = treLike_3 && ettPar_2;
  const hus_3_4 = treLike_3 && ettPar_3;
  const hus_3_5 = treLike_3 && ettPar_4;
  const hus_3_6 = treLike_3 && ettPar_5;

  // hus 4 4 4 + 1 1
  const hus_4_1 = treLike_4 && ettPar_1;
  const hus_4_2 = treLike_4 && ettPar_2;
  const hus_4_3 = treLike_4 && ettPar_3;
  const hus_4_5 = treLike_4 && ettPar_5;
  const hus_4_6 = treLike_4 && ettPar_6;

  // hus 5 5 5 + 1 1
  const hus_5_1 = treLike_5 && ettPar_1;
  const hus_5_2 = treLike_5 && ettPar_2;
  const hus_5_3 = treLike_5 && ettPar_3;
  const hus_5_4 = treLike_5 && ettPar_4;
  const hus_5_6 = treLike_5 && ettPar_6;

  // hus 6 6 6 + 1 1
  const hus_6_1 = treLike_6 && ettPar_1;
  const hus_6_2 = treLike_6 && ettPar_2;
  const hus_6_3 = treLike_6 && ettPar_3;
  const hus_6_4 = treLike_6 && ettPar_4;
  const hus_6_5 = treLike_6 && ettPar_5;

  // Liten straight 12345
  const litenStraight =
    values.every((f, index) => f - values[0] === index) && values[4] === 5;

  // Stor straight 23456
  const storStraight =
    values.every((f, index) => f - values[0] === index) && values[4] === 6;

  /**
   * Sjekk om vi har 5 like
   */
  if (femLike_6) {
    return {
      name: 'Fem like',
      point: 1000,
    };
  }
  if (femLike_5) {
    return {
      name: 'Fem like',
      point: 999,
    };
  }
  if (femLike_4) {
    return {
      name: 'Fem like',
      point: 998,
    };
  }
  if (femLike_3) {
    return {
      name: 'Fem like',
      point: 997,
    };
  }
  if (femLike_2) {
    return {
      name: 'Fem like',
      point: 996,
    };
  }
  if (femLike_1) {
    return {
      name: 'Fem like',
      point: 995,
    };
  }

  /**
   * Sjekk om vi har 4 like
   */
  if (fireLike_6) {
    return {
      name: 'Fire like',
      point: 994,
    };
  }
  if (fireLike_5) {
    return {
      name: 'Fire like',
      point: 993,
    };
  }
  if (fireLike_4) {
    return {
      name: 'Fire like',
      point: 992,
    };
  }
  if (fireLike_3) {
    return {
      name: 'Fire like',
      point: 991,
    };
  }
  if (fireLike_2) {
    return {
      name: 'Fire like',
      point: 990,
    };
  }
  if (fireLike_1) {
    return {
      name: 'Fire like',
      point: 989,
    };
  }

  /**
   * Sjekk om vi har fullt hus
   */
  // 6 på topp
  if (hus_6_5) {
    return {
      name: 'Fullt hus',
      point: 988,
    };
  }
  if (hus_6_4) {
    return {
      name: 'Fullt hus',
      point: 987,
    };
  }
  if (hus_6_3) {
    return {
      name: 'Fullt hus',
      point: 986,
    };
  }
  if (hus_6_2) {
    return {
      name: 'Fullt hus',
      point: 985,
    };
  }
  if (hus_6_1) {
    return {
      name: 'Fullt hus',
      point: 984,
    };
  }

  // 5 på topp
  if (hus_5_6) {
    return {
      name: 'Fullt hus',
      point: 983,
    };
  }
  if (hus_5_4) {
    return {
      name: 'Fullt hus',
      point: 982,
    };
  }
  if (hus_5_3) {
    return {
      name: 'Fullt hus',
      point: 981,
    };
  }
  if (hus_5_2) {
    return {
      name: 'Fullt hus',
      point: 980,
    };
  }
  if (hus_5_1) {
    return {
      name: 'Fullt hus',
      point: 979,
    };
  }

  // 4 på topp
  if (hus_4_6) {
    return {
      name: 'Fullt hus',
      point: 978,
    };
  }
  if (hus_4_5) {
    return {
      name: 'Fullt hus',
      point: 977,
    };
  }
  if (hus_4_3) {
    return {
      name: 'Fullt hus',
      point: 976,
    };
  }
  if (hus_4_2) {
    return {
      name: 'Fullt hus',
      point: 975,
    };
  }
  if (hus_4_1) {
    return {
      name: 'Fullt hus',
      point: 974,
    };
  }

  // 3 på topp
  if (hus_3_6) {
    return {
      name: 'Fullt hus',
      point: 973,
    };
  }
  if (hus_3_5) {
    return {
      name: 'Fullt hus',
      point: 972,
    };
  }
  if (hus_3_4) {
    return {
      name: 'Fullt hus',
      point: 971,
    };
  }
  if (hus_3_2) {
    return {
      name: 'Fullt hus',
      point: 970,
    };
  }
  if (hus_3_1) {
    return {
      name: 'Fullt hus',
      point: 969,
    };
  }

  // 2 på topp
  if (hus_2_6) {
    return {
      name: 'Fullt hus',
      point: 968,
    };
  }
  if (hus_2_5) {
    return {
      name: 'Fullt hus',
      point: 967,
    };
  }
  if (hus_2_4) {
    return {
      name: 'Fullt hus',
      point: 966,
    };
  }
  if (hus_2_3) {
    return {
      name: 'Fullt hus',
      point: 965,
    };
  }
  if (hus_2_1) {
    return {
      name: 'Fullt hus',
      point: 964,
    };
  }

  // 1 på topp
  if (hus_1_6) {
    return {
      name: 'Fullt hus',
      point: 963,
    };
  }
  if (hus_1_5) {
    return {
      name: 'Fullt hus',
      point: 962,
    };
  }
  if (hus_1_4) {
    return {
      name: 'Fullt hus',
      point: 961,
    };
  }
  if (hus_1_3) {
    return {
      name: 'Fullt hus',
      point: 960,
    };
  }
  if (hus_1_2) {
    return {
      name: 'Fullt hus',
      point: 959,
    };
  }

  /**
   * Sjekk om vi har stor straight
   */
  if (storStraight) {
    return {
      name: 'Stor straight',
      point: 958,
    };
  }

  /**
   * Sjekk om vi har liten straight
   */
  if (litenStraight) {
    return {
      name: 'Liten straight',
      point: 957,
    };
  }

  /**
   * Sjekk om vi har tre like
   */
  if (treLike_6) {
    return {
      name: 'Tre like',
      point: 956,
    };
  }
  if (treLike_5) {
    return {
      name: 'Tre like',
      point: 955,
    };
  }
  if (treLike_4) {
    return {
      name: 'Tre like',
      point: 954,
    };
  }
  if (treLike_3) {
    return {
      name: 'Tre like',
      point: 953,
    };
  }
  if (treLike_2) {
    return {
      name: 'Tre like',
      point: 952,
    };
  }
  if (treLike_1) {
    return {
      name: 'Tre like',
      point: 951,
    };
  }

  /**
   * Sjekk om vi har to par
   */
  // 6 på topp
  if (ettPar_6 && ettPar_5) {
    return {
      name: 'To par',
      point: 950,
    };
  }
  if (ettPar_6 && ettPar_4) {
    return {
      name: 'To par',
      point: 949,
    };
  }
  if (ettPar_6 && ettPar_3) {
    return {
      name: 'To par',
      point: 948,
    };
  }
  if (ettPar_6 && ettPar_2) {
    return {
      name: 'To par',
      point: 947,
    };
  }
  if (ettPar_6 && ettPar_1) {
    return {
      name: 'To par',
      point: 946,
    };
  }

  // 5 på topp
  if (ettPar_5 && ettPar_4) {
    return {
      name: 'To par',
      point: 945,
    };
  }
  if (ettPar_5 && ettPar_3) {
    return {
      name: 'To par',
      point: 944,
    };
  }
  if (ettPar_5 && ettPar_2) {
    return {
      name: 'To par',
      point: 943,
    };
  }
  if (ettPar_5 && ettPar_1) {
    return {
      name: 'To par',
      point: 942,
    };
  }

  // 4 på topp
  if (ettPar_4 && ettPar_3) {
    return {
      name: 'To par',
      point: 941,
    };
  }
  if (ettPar_4 && ettPar_2) {
    return {
      name: 'To par',
      point: 940,
    };
  }
  if (ettPar_4 && ettPar_1) {
    return {
      name: 'To par',
      point: 939,
    };
  }

  // 3 på topp
  if (ettPar_3 && ettPar_2) {
    return {
      name: 'To par',
      point: 938,
    };
  }
  if (ettPar_3 && ettPar_1) {
    return {
      name: 'To par',
      point: 937,
    };
  }

  // 2 på topp
  if (ettPar_2 && ettPar_1) {
    return {
      name: 'To par',
      point: 936,
    };
  }

  /**
   * Sjekk om ett par
   */
  if (ettPar_6) {
    return {
      name: 'Ett par',
      point: 935,
    };
  }
  if (ettPar_5) {
    return {
      name: 'Ett par',
      point: 934,
    };
  }
  if (ettPar_4) {
    return {
      name: 'Ett par',
      point: 933,
    };
  }
  if (ettPar_3) {
    return {
      name: 'Ett par',
      point: 932,
    };
  }
  if (ettPar_2) {
    return {
      name: 'Ett par',
      point: 931,
    };
  }
  if (ettPar_1) {
    return {
      name: 'Ett par',
      point: 930,
    };
  }

  return {
    name: 'Ingen terning treffer',
    point: 1,
  };
};

export { getResult };
