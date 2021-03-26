var title = "world";
var wow = [1, 2, 3];
class Main extends React.Component {
  render() {
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
}
function ClassComponent() {
  return <Main />;
}
ReactDOM.render(<ClassComponent />, document.getElementById("root"));
