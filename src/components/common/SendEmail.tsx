import { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import Alerta from "./Alerta";

// Componente Sendemail para enviar e-mails e exibir alertas
function Sendemail() {
  // Hook para usar a biblioteca de internacionalização
  const { t } = useTranslation();

  // Estados para armazenar os valores dos campos do formulário
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Estado para gerenciar as mensagens de alerta
  const [alerta, setAlerta] = useState({ msg: "", tipo: "", key: Date.now() });

  // Função para lidar com o envio do formulário
  function sendemail(e: FormEvent) {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    // Reseta o estado de alerta
    setAlerta({ msg: "", tipo: "", key: Date.now() });

    // Verifica se todos os campos estão preenchidos
    if (name === "" || email === "" || message === "") {
      // Define uma mensagem de erro se algum campo estiver vazio
      setAlerta({ msg: t("erro mensage"), tipo: "erro", key: Date.now() });
      return;
    }

    // Parâmetros para o template de e-mail
    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    // Envia o e-mail usando a biblioteca emailjs
    emailjs
      .send(
        "service_edsgycq", // ID do serviço
        "template_c0rrx9o", // ID do template
        templateParams, // Parâmetros do template
        "01_uZAHchHYCFapPF" // Chave pública do usuário
      )
      .then(
        () => {
          // Define uma mensagem de sucesso e limpa os campos após o envio
          setAlerta({
            msg: t("Success mesage"),
            tipo: "sucesso",
            key: Date.now(),
          });
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          // Define uma mensagem de erro se o envio falhar
          setAlerta({ msg: "ERRO: " + err, tipo: "erro", key: Date.now() });
        }
      );
  }

  // Renderiza o formulário e os alertas
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={sendemail} className="space-y-4">
        {/* Campos de entrada para nome, e-mail e mensagem */}
        <input
          className="w-full border-2 border-gray-300 dark:bg-gray-900 dark:border-white rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-purple-500"
          type="text"
          placeholder={t("placeholder name")}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <input
          className="w-full border-2 border-gray-300 dark:bg-gray-900 dark:border-white rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-purple-500"
          type="text"
          placeholder={t("placeholder email")}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <textarea
          className="w-full border-2 h-35 resize-none  border-gray-300 dark:bg-gray-900 dark:border-white rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 dark:focus:border-purple-500"
          placeholder={t("placeholder message")}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>

        <button
          type="submit"
          className="w-full border bg-blue-500 dark:bg-gray-900 text-white rounded-md px-4 py-2 hover:bg-blue-600 dark:hover:bg-gray-950 cursor-pointer transition duration-500 ease-in-out transform hover:scale-105 dark:hover:text-purple-600 dark:hover:border-purple-600"
        >
          {t("Send")}
        </button>
      </form>
      {/* Exibe o componente Alerta se houver uma mensagem */}
      {alerta.msg && (
        <Alerta msg={alerta.msg} tipo={alerta.tipo} key={alerta.key} />
      )}
    </div>
  );
}

export default Sendemail;
