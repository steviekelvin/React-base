import { useSelector } from "react-redux";
import { InitialStateInterface } from "../../interfaces/InitialStateInterface";
import store from "../../redux/store";
import { changeTitle } from "../../redux/actions";
import { Button } from "primereact/button";

const HomeComponent = () => {
  const app_title: string = useSelector(
    (state: InitialStateInterface) => state.app_title
  );

  return (
    <>
      <h1>Home Component</h1>
      <h4 className="text-center">{app_title}</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() =>
            store.dispatch(
              changeTitle(Math.floor(Math.random() * 100) + 1 + " Titulo")
            )
          }
        >
          Mudar Valor
        </Button>
      </div>
    </>
  );
};

export default HomeComponent;
