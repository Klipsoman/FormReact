import Form from "./components/Form/Form";
import Title from "./components/UI/Title/Title";
import Modal from "./components/UI/Modals/ModalSubmit/ModalSubmit";
import ModalConf from "./components/UI/Modals/ModalConf/ModalConf";

function App() {
  return (
    <div className="App">
      <div className="container main-container">
        <Title>Анкета соискателя</Title>
        <Form />
        <Modal />
        <ModalConf />
      </div>
    </div>
  );
}

export default App;
