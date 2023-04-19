import Counter from "../components/Counter/Counter";

export default function Component(props:any) {
  return (
    <div>
      <Counter values={props.values} />
    </div>
  );
}