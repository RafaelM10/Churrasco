export interface IChurras {
  id: string;
  date: string;
  name: string;
  people: [
    {
      id: string;
      name: string;
      value: number;
      status: boolean;
    },
  ];
}
