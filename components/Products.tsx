export default function Products() {
  return (
    <section id="products" className="py-16 bg-white w-full">
      <div className="max-w-7xl mx-auto px-12">
        {/* Heading and Description */}
        <div className="text-center mb-10">
          <h2
            className="text-3xl font-bold text-[#1B4D3E] mb-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Products
          </h2>
          <p
            className="text-lg text-[#1B4D3E] font-normal leading-relaxed"
            style={{ lineHeight: '1.8' }}
          >
            A research-use-only platform supporting hospitals, CROs, and pharma in research.
            Applications include early detection, patient stratification, and trial enrichment.
          </p>
        </div>

        {/* Three-Column Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Cardiology Card */}
          <div
            className="bg-gray-50 text-[#1B4D3E] rounded-2xl p-8 shadow-md flex flex-col border border-gray-200"
            style={{ minHeight: '420px' }}
          >
            <h3 className="text-2xl font-bold mb-4">Cardio Tool</h3>
            <p className="mb-6 flex-grow text-gray-700">
              This cardiology tool supports ASCVD and CH₂VC-D2 risk scoring, blood pressure–based risk stratification, and algorithmic ECG interpretation for research and clinical decision support.
            </p>

            {/* Image */}
            <div className="mb-6">
              <img
                src="/images/ascvd.png"
                alt="ASCVD Risk Chart"
                className="w-full rounded-lg shadow-sm"
              />
            </div>

            {/* Button */}
            <a
              href="https://cardio-tool.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#8daed6] text-white font-semibold rounded-full hover:bg-[#4782c9] transition-colors"
            >
              Access Cardio Tool
            </a>
          </div>

          {/* Neurology Card */}
          <div
            className="bg-gray-50 text-[#1B4D3E] rounded-2xl p-8 shadow-md flex flex-col border border-gray-200"
            style={{ minHeight: '420px' }}
          >
            <h3 className="text-2xl font-bold mb-4">AD Classifier</h3>
            <p className="mb-6 flex-grow text-gray-700">
              Designed for Alzheimer’s and neurodegenerative research, this RUO tool was built on data from the{' '}
              <a
                href="https://adni.loni.usc.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B4D3E] underline hover:text-green-800 transition-colors font-medium"
              >
                Alzheimer’s Disease Neuroimaging Initiative (ADNI)
              </a>
              : ADAS, CDR, FAQ, MOCA, and PTDEMOG with DXSUM. It was trained using XGBoost on a dataset of 2,618 patients with 94% accuracy.
            </p>

            {/* Image */}
            <div className="mb-6">
              <img
                src="/images/shap_global.png"
                alt="SHAP Global Importance"
                className="w-full rounded-lg shadow-sm"
              />
            </div>

            {/* Button */}
            <a
              href="https://alz-classifier.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#6195d4] text-white font-semibold rounded-full hover:bg-[#4782c9] transition-colors"
            >
              Access AD Classifier
            </a>
          </div>

          {/* Clinical Trial Planner Card */}
          <div
            className="bg-gray-50 text-[#1B4D3E] rounded-2xl p-8 shadow-md flex flex-col border border-gray-200"
            style={{ minHeight: '420px' }}
          >
            <h3 className="text-2xl font-bold mb-4">Trial Planner</h3>
            <p className="mb-6 flex-grow text-gray-700">
              This tool helps design clinical trials in cardiology, oncology, and neurology by integrating sample size calculations with patient risk assessment. It supports efficient trial planning and decision-making for CROs and pharma.
            </p>

            {/* Image */}
            <div className="mb-6">
              <img
                src="/images/trial_planner.png"
                alt="Trial Planner"
                className="w-full rounded-lg shadow-sm"
              />
            </div>

            {/* Button */}
            <a
              href="https://clinical-trial-planner.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-[#8ac6d1] text-white font-semibold rounded-full hover:bg-[#4782c9] transition-colors"
            >
              Access Trial Planner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
