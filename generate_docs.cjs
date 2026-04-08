const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'ref', 'www.cimatron.com', 'en');
const outDir = path.join(__dirname, 'src', 'pages');

const mapping = [
    { file: 'cimatron-die.html', comp: 'DieDesign' },
    { file: 'cimatron-electrodes.html', comp: 'ElectrodesDesign' },
    { file: 'cimatron-nc-programming.html', comp: 'NCProgramming' },
    { file: 'cimatron-viewer.html', comp: 'CimatronViewer' },
    { file: 'cimatron-cad.html', comp: 'CimatronCAD' },
    { file: 'cimatron-cad-ai.html', comp: 'CimatronCADAI' },
    { file: 'cimatron-diequote.html', comp: 'CimatronDieQuote' },
    { file: 'inspire-mold.html', comp: 'AltairInspireMold' }
];

for (let item of mapping) {
    const htmlPath = path.join(srcDir, item.file);
    if (!fs.existsSync(htmlPath)) continue;
    const html = fs.readFileSync(htmlPath, 'utf8');

    let h1Match = html.match(/<h1>(.*?)<\/h1>/);
    let h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '') : item.comp;
    
    let subtitleMatch = html.match(/<h2>(.*?)<\/h2>\s*<p>(.*?)<\/p>/s);
    let subtitle = subtitleMatch ? subtitleMatch[1] : h1;
    let description = subtitleMatch ? subtitleMatch[2].replace(/<[^>]+>/g, '').trim() : "Advanced engineering capabilities.";

    // Remove quotes inside the text arrays to avoid JSX parser breaking
    h1 = h1.replace(/"/g, "'");
    subtitle = subtitle.replace(/"/g, "'");
    description = description.replace(/"/g, "'");

    let heroImgMatch = html.match(/poster="([^"]+)"/) || html.match(/<img[^>]+src="([^"]+)"/);
    let heroImg = heroImgMatch ? heroImgMatch[1].replace('../', '/').replace('collateral/', 'images/') : '/images/products/mold-design.jpg';

    let keyBenefits = [];
    const kbRegex = /<div class="grid-card[^>]*>.*?<img[^>]*src="([^"]+)".*?<h3>(.*?)<\/h3>.*?<p>(.*?)<\/p>/gs;
    let kbMatch;
    while ((kbMatch = kbRegex.exec(html)) !== null) {
        keyBenefits.push({
            icon: kbMatch[1].replace('../', '/').replace('collateral/', 'images/'),
            title: kbMatch[2].replace(/<[^>]+>/g, '').trim().replace(/"/g, "'").replace(/{/g, '(').replace(/}/g, ')'),
            desc: kbMatch[3].replace(/<[^>]+>/g, '').trim().replace(/"/g, "'").replace(/{/g, '(').replace(/}/g, ')')
        });
    }

    let features = [];
    const featRegex = /<img[^>]*src="([^"]+)"[^>]*>.*?<h3>(.*?)<\/h3>.*?<p>(.*?)<\/p>/gs;
    let fMatch;
    while ((fMatch = featRegex.exec(html)) !== null) {
        let img = fMatch[1].replace('../', '/').replace('collateral/', 'images/');
        let title = fMatch[2].replace(/<[^>]+>/g, '').trim().replace(/"/g, "'").replace(/{/g, '(').replace(/}/g, ')');
        if (!keyBenefits.find(b => b.title === title) && title.length < 150) {
            let desc = fMatch[3].replace(/<[^>]+>/g, '').trim().replace(/"/g, "'").replace(/{/g, '(').replace(/}/g, ')');
            features.push({ img, title, desc });
        }
    }

    let halfPoint = Math.ceil(features.length / 2);
    let gridFeatures = features.slice(0, halfPoint);
    let zigZagFeatures = features.slice(halfPoint);

    // Build the React component fully as a string without literals conflicting
    let compStr = "import React from 'react';\nimport Reveal from '../components/Reveal';\n\n";
    compStr += "const KeyBenefits = " + JSON.stringify(keyBenefits, null, 2) + ";\n";
    compStr += "const GridFeatures = " + JSON.stringify(gridFeatures, null, 2) + ";\n";
    compStr += "const Capabilities = " + JSON.stringify(zigZagFeatures, null, 2) + ";\n\n";
    
    compStr += "const " + item.comp + " = () => {\n";
    compStr += "  return (\n    <main className=\"pt-24 lg:pt-32 pb-0 bg-[#f9fafb]\">\n";
    
    // Hero
    compStr += "      <section className=\"relative bg-[#eceff3] pt-24 pb-20 lg:pt-32 lg:pb-32 border-b border-slate-200 overflow-hidden\">\n";
    compStr += "        <div className=\"absolute inset-0 z-0\">\n";
    compStr += "          <img src=\"" + heroImg + "\" alt=\"Background\" className=\"w-full h-full object-cover opacity-[0.25] object-center\" />\n";
    compStr += "          <div className=\"absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/40 to-transparent\"></div>\n";
    compStr += "        </div>\n";
    compStr += "        <div className=\"relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16\">\n";
    compStr += "          <div className=\"w-full lg:w-[55%]\">\n";
    compStr += "            <Reveal><h1 className=\"font-heading text-4xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl tracking-tight\">" + h1 + "</h1></Reveal>\n";
    compStr += "            <Reveal delay={100}><div className=\"w-20 h-1.5 bg-brand-orange mt-6 rounded-full shadow-sm\"></div></Reveal>\n";
    compStr += "            <Reveal delay={200}><h2 className=\"mt-8 text-2xl font-bold text-white drop-shadow-md lg:text-3xl\">" + subtitle + "</h2></Reveal>\n";
    compStr += "            <Reveal delay={300}><p className=\"mt-5 text-lg text-zinc-100 drop-shadow max-w-2xl font-medium leading-relaxed\">" + description + "</p></Reveal>\n";
    compStr += "            <Reveal delay={400}><div className=\"mt-10 flex flex-wrap gap-5\"><a href=\"/#contact\" className=\"btn-primary shadow-[0_8px_20px_rgb(242,106,33,0.3)] hover:shadow-[0_12px_25px_rgb(242,106,33,0.4)] text-base px-8 py-4\">Request a Free Consultation</a></div></Reveal>\n";
    compStr += "          </div>\n";
    compStr += "          <div className=\"hidden lg:block w-full lg:w-[45%]\">\n";
    compStr += "            <Reveal delay={500} className=\"transform translate-x-4\">\n";
    compStr += "              <div className=\"rounded-2xl overflow-hidden shadow-[0_30px_60px_rgb(0,0,0,0.2)] border-[8px] border-white/90 bg-white\">\n";
    compStr += "                <img src=\"" + heroImg + "\" alt=\"Interface\" className=\"w-full h-auto aspect-[4/3] object-cover\" />\n";
    compStr += "              </div>\n";
    compStr += "            </Reveal>\n";
    compStr += "          </div>\n";
    compStr += "        </div>\n";
    compStr += "      </section>\n\n";

    // Benefits
    compStr += "      {KeyBenefits.length > 0 && (\n";
    compStr += "      <section className=\"py-24 bg-white relative\">\n";
    compStr += "        <div className=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\">\n";
    compStr += "          <Reveal>\n";
    compStr += "            <div className=\"text-center max-w-3xl mx-auto mb-16\">\n";
    compStr += "              <h2 className=\"font-heading text-4xl font-extrabold text-[#162737]\">Key Benefits</h2>\n";
    compStr += "              <div className=\"w-12 h-1 bg-brand-orange mt-5 mx-auto rounded-full\"></div>\n";
    compStr += "            </div>\n";
    compStr += "          </Reveal>\n";
    compStr += "          <div className=\"grid gap-6 md:grid-cols-2 lg:grid-cols-4\">\n";
    compStr += "            {KeyBenefits.map((benefit, i) => (\n";
    compStr += "              <Reveal key={i} delay={i * 100} className=\"bg-[#f07127] rounded-xl p-8 flex flex-col text-left shadow-md transition-all hover:shadow-xl hover:-translate-y-1\">\n";
    compStr += "                <div className=\"mb-8 w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10\">\n";
    compStr += "                  <img src={benefit.icon} alt={benefit.title} className=\"w-8 h-8 object-contain filter invert brightness-0\" />\n";
    compStr += "                </div>\n";
    compStr += "                <h3 className=\"font-heading font-extrabold text-xl mb-4 text-white leading-tight\">{benefit.title}</h3>\n";
    compStr += "                <p className=\"text-white/95 font-medium text-[0.9rem] leading-relaxed\">{benefit.desc}</p>\n";
    compStr += "              </Reveal>\n";
    compStr += "            ))}\n";
    compStr += "          </div>\n";
    compStr += "        </div>\n";
    compStr += "      </section>\n";
    compStr += "      )}\n\n";

    // Grid Features
    compStr += "      {GridFeatures.length > 0 && (\n";
    compStr += "      <section className=\"py-24 bg-[#f8fbff] border-t border-slate-100\">\n";
    compStr += "        <div className=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\">\n";
    compStr += "          <Reveal>\n";
    compStr += "            <div className=\"text-center max-w-3xl mx-auto mb-20\">\n";
    compStr += "              <h2 className=\"font-heading text-4xl font-extrabold text-[#165A72] mb-6\">Core Production Tools</h2>\n";
    compStr += "              <p className=\"text-lg text-brand-slate font-medium\">A specialized toolset structurally bridging the gap between digital modeling and precise physical manufacturing.</p>\n";
    compStr += "            </div>\n";
    compStr += "          </Reveal>\n";
    compStr += "          <div className=\"grid gap-6 md:grid-cols-2 lg:grid-cols-2\">\n";
    compStr += "            {GridFeatures.map((feature, i) => (\n";
    compStr += "              <Reveal key={i} delay={(i % 2) * 100} className=\"group bg-white p-7 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all flex flex-col h-full\">\n";
    compStr += "                <div className=\"w-full aspect-[2/1] rounded-xl overflow-hidden bg-slate-50 mb-6 relative\">\n";
    compStr += "                  <img src={feature.img} alt={feature.title} className=\"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105\" />\n";
    compStr += "                  <div className=\"absolute inset-0 border border-black/5 rounded-xl pointer-events-none\"></div>\n";
    compStr += "                </div>\n";
    compStr += "                <h4 className=\"font-heading font-extrabold text-[1.35rem] text-[#165A72] mb-3 group-hover:text-brand-orange transition-colors\">{feature.title}</h4>\n";
    compStr += "                <p className=\"text-[#475569] text-[0.95rem] font-medium leading-relaxed flex-grow\">{feature.desc}</p>\n";
    compStr += "              </Reveal>\n";
    compStr += "            ))}\n";
    compStr += "          </div>\n";
    compStr += "        </div>\n";
    compStr += "      </section>\n";
    compStr += "      )}\n\n";

    // capabilities
    compStr += "      {Capabilities.length > 0 && (\n";
    compStr += "      <section className=\"py-32 bg-white relative overflow-hidden border-t border-slate-200\">\n";
    compStr += "        <div className=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\">\n";
    compStr += "          <Reveal>\n";
    compStr += "            <div className=\"text-center max-w-3xl mx-auto mb-24\">\n";
    compStr += "              <h2 className=\"font-heading text-4xl sm:text-[2.5rem] font-extrabold text-brand-ink mb-6\">Advanced Engineering Capabilities</h2>\n";
    compStr += "              <div className=\"w-16 h-1.5 bg-brand-orange mx-auto mb-8 rounded-full\"></div>\n";
    compStr += "            </div>\n";
    compStr += "          </Reveal>\n";
    compStr += "          <div className=\"flex flex-col gap-32\">\n";
    compStr += "            {Capabilities.map((feature, i) => {\n";
    compStr += "              const isEven = i % 2 === 0;\n";
    compStr += "              return (\n";
    compStr += "                <div key={i} className={'flex flex-col ' + (isEven ? 'lg:flex-row' : 'lg:flex-row-reverse') + ' items-center gap-12 lg:gap-24'}>\n";
    compStr += "                  <div className=\"w-full lg:w-1/2\">\n";
    compStr += "                    <Reveal delay={100} className=\"relative group\">\n";
    compStr += "                      <div className={'absolute inset-0 bg-brand-orange/10 transform rounded-[2rem] transition-transform duration-500 group-hover:translate-y-4 ' + (isEven ? 'translate-x-4 translate-y-4 group-hover:translate-x-6' : '-translate-x-4 translate-y-4 group-hover:-translate-x-6')}></div>\n";
    compStr += "                      <div className=\"relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-8 border-white bg-slate-100 aspect-video z-10\">\n";
    compStr += "                         <img src={feature.img} alt={feature.title} className=\"w-full h-full object-cover transition-transform duration-700 group-hover:scale-105\" />\n";
    compStr += "                      </div>\n";
    compStr += "                    </Reveal>\n";
    compStr += "                  </div>\n";
    compStr += "                  <div className=\"w-full lg:w-1/2\">\n";
    compStr += "                    <Reveal delay={200}>\n";
    compStr += "                      <div className=\"flex flex-col max-w-lg mx-auto lg:mx-0\">\n";
    compStr += "                        <div className=\"w-12 h-1.5 bg-brand-orange mb-8 rounded-full\"></div>\n";
    compStr += "                        <h3 className=\"font-heading text-3xl sm:text-[2.5rem] font-extrabold text-[#165A72] mb-6 leading-tight\">{feature.title}</h3>\n";
    compStr += "                        <p className=\"text-lg text-slate-600 font-medium leading-relaxed\">{feature.desc}</p>\n";
    compStr += "                      </div>\n";
    compStr += "                    </Reveal>\n";
    compStr += "                  </div>\n";
    compStr += "                </div>\n";
    compStr += "              );\n";
    compStr += "            })}\n";
    compStr += "          </div>\n";
    compStr += "        </div>\n";
    compStr += "      </section>\n";
    compStr += "      )}\n\n";

    compStr += "    </main>\n  );\n};\n\nexport default " + item.comp + ";\n";

    fs.writeFileSync(path.join(outDir, item.comp + '.jsx'), compStr);
    console.log("Generated " + item.comp);
}
