import QRGenerator from '@/components/QRGenerator';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-2">
            Free QR Code Generator
          </h1>
          <p className="text-gray-600 text-center text-lg">
            Create QR codes instantly for URLs, text, emails, and more
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* QR Generator */}
        <div className="mb-12">
          <QRGenerator />
        </div>

        {/* Features Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
            Why Choose Our QR Generator?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 text-xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Instant Generation</h3>
              <p className="text-gray-600 text-sm">Create QR codes instantly with just one click</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 text-xl">✓</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">100% Free</h3>
              <p className="text-gray-600 text-sm">No registration, no limits, completely free</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 text-xl">📱</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mobile Friendly</h3>
              <p className="text-gray-600 text-sm">Works perfectly on all devices</p>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            About QR Code Generator
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">What is a QR Code?</h3>
              <p className="mb-4">
                A QR (Quick Response) code is a type of matrix barcode that can store various types of information such as URLs, text, contact information, and more. QR codes can be scanned using smartphones and dedicated QR code readers.
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Why Use QR Codes?</h3>
              <p>
                QR codes provide a quick and convenient way to share information. They&apos;re perfect for business cards, marketing materials, event tickets, restaurant menus, and contactless sharing of any digital content.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">How to Use This Generator</h3>
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Enter your text, URL, or any data in the input field</li>
                <li>Click the &quot;Generate QR Code&quot; button</li>
                <li>Your QR code will appear instantly</li>
                <li>Download the QR code as a PNG image</li>
                <li>Use it anywhere you need!</li>
              </ol>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Common Use Cases</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Website URLs and landing pages</li>
                <li>Wi-Fi passwords and network information</li>
                <li>Contact information (vCards)</li>
                <li>Social media profiles</li>
                <li>Event information and tickets</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-gray-500 text-center text-sm">
            © 2024 QR Code Generator. Free online QR code generator tool.
          </p>
        </div>
      </footer>
    </div>
  );
}
