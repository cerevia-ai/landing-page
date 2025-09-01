// components/Products.tsx

export default function Products() {
  return (
    <section id="products" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid: Two Columns */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Cardiology Card */}
          <div
            className="bg-green-700 text-white rounded-2xl p-8 shadow-lg flex flex-col"
            style={{ minHeight: '400px' }}
          >
            <h3 className="text-2xl font-bold mb-4">Cardiology Risk Assessor</h3>
            <p className="mb-6 flex-grow">
              A research-use-only platform supporting hospitals, CROs, and pharma in cardiovascular research.
              Applications include early detection, patient stratification, and trial enrichment.
            </p>
            <div className="space-y-4">
              <a
                href="https://cerevia.streamlit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white underline hover:text-green-200 font-medium"
              >
                👉 Try the Cardio-Tool
              </a>
              {/* Button now links directly to Streamlit */}
              <a
                href="https://cerevia.streamlit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white text-green-700 font-semibold rounded-full text-center hover:bg-gray-100 transition"
              >
                Launch App
              </a>
            </div>
          </div>

          {/* Neurology Card */}
          <div
            className="bg-green-700 text-white rounded-2xl p-8 shadow-lg flex flex-col"
            style={{ minHeight: '400px' }}
          >
            <h3 className="text-2xl font-bold mb-4">Neurology Risk Assessor</h3>
            <p className="mb-6 flex-grow">
              Designed for Alzheimer’s and neurodegenerative research, this RUO tool helps hospitals and CROs
              identify at-risk populations and supports pharma in clinical trial recruitment and monitoring.
            </p>
            <div className="space-y-4">
              <a
                href="https://alz-classifier.streamlit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white underline hover:text-green-200 font-medium"
              >
                👉 Try the AD Classifier
              </a>
              {/* Button now links directly to Streamlit */}
              <a
                href="https://alz-classifier.streamlit.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-white text-green-700 font-semibold rounded-full text-center hover:bg-gray-100 transition"
              >
                Launch App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}