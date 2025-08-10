import QRGenerator from '@/components/QRGenerator';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Free QR Code Generator
          </h1>
          <p className="text-gray-600 text-center mt-2 text-lg">
            Create QR codes instantly for URLs, text, emails, and more
          </p>
        </div>
      </header>

      {/* Ad Space - Top Banner */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
            Advertisement Space - 728x90
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* QR Generator - Main Content */}
          <div className="lg:col-span-3">
            <QRGenerator />
          </div>

          {/* Sidebar with Ad Space */}
          <aside className="space-y-6">
            {/* Ad Space - Sidebar */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="h-96 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
                Advertisement Space - 300x250
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Features</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  100% Free to use
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  No registration required
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  High quality PNG download
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Mobile responsive design
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Supports URLs, text, emails
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/* SEO Content Section */}
        <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
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
              <ol className="list-decimal list-inside space-y-2">
                <li>Enter your text, URL, or any data in the input field</li>
                <li>Click the &quot;Generate QR Code&quot; button</li>
                <li>Your QR code will appear instantly</li>
                <li>Download the QR code as a PNG image</li>
                <li>Use it anywhere you need!</li>
              </ol>
              <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-4">Common Use Cases</h3>
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

        {/* Bottom Ad Space */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-4">
          <div className="h-24 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
            Advertisement Space - Bottom Banner 728x90
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 QR Code Generator. Free online QR code generator tool.
          </p>
        </div>
      </footer>
    </div>
  );
}
