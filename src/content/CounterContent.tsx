import Counter from "../components/Counter/Counter";

export default function Component(props:any) {
  return (
    <div>
      <h1>Props from father value: {props.values}</h1>
      <Counter />
    </div>
  );
}