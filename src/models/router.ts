export interface IRoute {
  name: string;
  component: React.FC;
  options?: any;

  // extra
  key: string; // unique id
}
