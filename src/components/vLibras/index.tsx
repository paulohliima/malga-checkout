import { useEffect } from "react";

export default function VLibrasWidget() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://vlibras.gov.br/app/vlibras-plugin.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        // Inicializa o widget após o carregamento do script
        if (window.VLibras) {
          new window.VLibras.Widget("https://vlibras.gov.br/app");
        }
      };
    } else {
      // Script já carregado, só inicializa
      if (window.VLibras) {
        new window.VLibras.Widget("https://vlibras.gov.br/app");
      }
    }
  }, []);

  return (
    <div
      id="vlibras-container"
      dangerouslySetInnerHTML={{
        __html: `
          <div vw class="enabled">
            <div vw-access-button class="active"></div>
            <div vw-plugin-wrapper>
              <div class="vw-plugin-top-wrapper"></div>
            </div>
          </div>
        `,
      }}
    />
  );
}
