import { useState } from "react";

export default () => {
  const [state, setState] = useState<Boolean>(false);
  return (
    <div className="bg-inafocam-blue">
      <div className="container px-5 mx-auto">
        <div className={` w-full transition-all container mx-auto`}>
          <div className="layout flex min-h-[27px] justify-between gap-2 md:justify-start text-white">
            <div className="flex items-center gap-2">
              <img
                alt="DOM_Flag"
                src="/assets/images/do.webp"
                className="w-4 h-3"
              />
              <span className="text-[2.3vw] xs:text-[10.6px] md:text-[12px]">
                Esta es una web oficial del Gobierno de la República Dominicana.
              </span>
            </div>
            <button
              type="button"
              title="Así es como puedes saberlo"
              className="flex items-center text-[2.3vw] xs:text-[10.6px] md:text-[12px] font-semibold underline text-[#9CD1FF]"
              onClick={() => setState(!state)}
            >
              <span className="md:flex">Así es como puedes saberlo</span>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all"
                height="14"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
          <div className={`${!state && "hidden"} py-10 grid lg:grid-cols-2`}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-inafocam-blue p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Los sitios web oficiales utilizan .gob.do, .gov.do o .mil.do
                </h2>
                <p className="text-white">
                  Un sitio .gob.do, .gov.do o .mil.do significa que pertenece a
                  una organización oficial del Estado dominicano.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-inafocam-blue p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">
                  Los sitios web oficiales .gob.do, .gov.do o .mil.do seguros
                  usan HTTPS
                </h2>
                <p className="text-white">
                  Un candado (🔒) o https:// significa que estás conectado a un
                  sitio seguro dentro de .gob.do o .gov.do. Comparte información
                  confidencial solo en los sitios seguros de .gob.do o gov.do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
