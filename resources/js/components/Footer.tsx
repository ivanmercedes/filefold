import Copyright from "./Copyright";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-white">
        <div className="flex container mx-auto  min-h-[278px] w-full flex-col items-center gap-10 py-8 xl:flex-row">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 sm:gap-10 xl:gap-3 w-fit">
            <img
              src={`${route('home.index')}/assets/images/logo-inafocam-2024.png`}
              alt="Logo - Inafocam"
              className="w-full max-w-[250px] lg:max-w-[480px] "
            />
          </div>
          <div className="grid min-h-[119px] w-full grid-cols-1 gap-8 text-black xs:grid-cols-2 xs:text-left lg:flex justify-between lg:gap-5">
            <div className="flex flex-col gap-5">
              <h4 className="font-bold uppercase text-center lg:text-left text-inafocam-blue">
                CONTÁCTANOS
              </h4>
              <div className="flex flex-col lg:items-start items-center text-[14px] ">
                <span> Tel: (809) 535-8006 </span>
                <span> Fax: (809) 535-3067 </span>
                <span>
                  Correo:
                  <a
                    href="mailto: libreacceso@inafocam.edu.do"
                    className="w-fit hover:underline underline-offset-2 mx-2"
                  >
                    libreacceso@inafocam.edu.do
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="font-bold uppercase text-center lg:text-left text-inafocam-blue">
                dirección
              </h4>
              <div className="flex flex-col  items-center lg:items-start text-[14px] ">
                <span>
                  C/ Flercy Pichardo No. 4, Bella Vista, <br />
                  Santo Domingo, R.D.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="font-bold uppercase text-center lg:text-left text-inafocam-blue">
                INFÓRMATE
              </h4>
              <div className="flex flex-col lg:items-start items-center text-[14px] ">
                <span> Tel: (809) 535-8006 </span>
                <span> Fax: (809) 535-3067 </span>
                <span>
                  Correo:
                  <a
                    href="mailto: libreacceso@inafocam.edu.do"
                    className="w-fit hover:underline underline-offset-2"
                  >
                    libreacceso@inafocam.edu.do
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container px-5 mx-auto py-3">
        <div className="flex flex-wrap items-end justify-between">
          <div className="flex flex-wrap gap-4 justify-center">
            <div
              className="relative"
              title="Norma sobre Publicación de Datos Abiertos del Gobierno Dominicano."
            >
              <a
                aria-label="Norma sobre Publicación de Datos Abiertos del Gobierno Dominicano."
                target="_blank"
                rel="noopener"
                className="absolute h-[85px] w-[85px]"
                href="http://nortic.ogtic.gob.do/instituciones/DIGEIG"
              ></a>
              <iframe
                title="Norma sobre Publicación de Datos Abiertos del Gobierno Dominicano."
                src="https://be.nortic.ogtic.gob.do/StampProcesses/Stamp/518"
                className="h-[85px] w-[85px] m-[-8px]"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
