import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' alessio.fano@gmx.ch');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="aboutme">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, ich bin Alessio</p>
              <p className="grid-subtext">
              Ich bin 17 Jahre alt, aus Bülach (ZH), und im zweiten Lehrjahr meiner Ausbildung zum Applikationsentwickler. In meiner Freizeit fahre ich Motorrad,
               fotografiere, filme und boxe.
              Andere kennen mich als hilfsbereite und empathische Person, die auch unter Druck
               ruhig bleibt. Ich stelle mich gerne neuen Herausforderungen und bin ehrgeizig, was sich auch in meinem Umfeld zeigt.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Bülach, Schweiz', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Lebenslauf</p>
              <p className="grid-subtext">Möchten Sie meinen Lebenslauf mit einer Übersicht meiner Fähigkeiten, einschliesslich der beherrschten Programmiersprachen, sehen? Klicken Sie unten, um ihn herunterzuladen!</p>
              <a href="assets/Lebenslauf_Alessio_Giuseppe_Fano.pdf" target="_blank" rel="noopener noreferrer">
              <Button name="Mein Lebenslauf" isBeam containerClass="w-full mt-10"/>
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <a href="https://github.com/aledog007" target="_blank" rel="noopener noreferrer">
            <img src="assets/github.png" alt="Github 3D" className="w-full sm:h-[276px] h-fit object-contain" />
            </a>
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
              Ich habe Erfahrung in diversen Programmiersprachen, Bibliotheken und Frameworks wie Angular, SDX, React, Tailwind CSS und Bootstrap. Mein Interesse an Cybersecurity hat mich dazu motiviert, Scripting mit Bash, PowerShell und Python zu lernen.

              Privat betreibe ich eigene Server, erstelle Cloud-Init Dateien und sicherte Systeme. In der Schule arbeite ich regelmässig an Projekten mit Java und React.

              Mehr über meine Projekte finden Sie auf meinem GitHub - klicken Sie einfach auf das Icon oben.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Meine Leidenschaft hinter dem Programmieren </p>
              <p className="grid-subtext">
              Schon früh hat mich der Computer fasziniert, egal ob es um die Hardware oder die Software ging.
              Meine Neugier und Begeisterung führten dazu, dass ich anfing, erste kleine Programme zu schreiben und eigene Projekte umzusetzen.
              Dabei habe ich viel experimentiert, Fehler gemacht und daraus gelernt ein Prozess, der mich bis heute begeistert.
              Ich liebe es, komplexe Herausforderungen anzupacken, dabei logisch zu denken und mit unterschiedlichen Technologien zu arbeiten.
              Jedes Projekt ist eine neue Gelegenheit, zu lernen, zu wachsen und etwas zu erschaffen, das einen echten Mehrwert bietet.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Kontaktiere mich</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">alessio.fano@gmx.ch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
