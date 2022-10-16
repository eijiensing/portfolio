import * as React from "react";

export interface IAppProps {}

export function App(props: IAppProps) {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-t from-lime-900 via-emerald-800 to-black">
      <h1 className="font-mono text-7xl text-lime-100">Hello World!</h1>
    </div>
  );
}
