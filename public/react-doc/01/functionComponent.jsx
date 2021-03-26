var title = "world";
var wow = [1, 2, 3];
function Main() {
  return (
    <div>
      <h1 y={`ab{1 + 2}cd`}>hello {title}</h1>
      <i>co2ol</i>
      wow
      {wow.map(function (w, i) {
        return <b key={w}>{w}</b>;
      })}
    </div>
  );
}
function FunctionComponentDemo() {
  return <Main />;
}
ReactDOM.render(
  React.createElement(FunctionComponentDemo),
  document.getElementById("root")
);
