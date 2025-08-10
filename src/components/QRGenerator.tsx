'use client';

import { useState, useRef } from 'react';
import QRCode from 'qrcode';

export default function QRGenerator() {
  const [text, setText] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQR = async () => {
    if (!text.trim()) {
      setError('Please enter some text or URL');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const canvas = canvasRef.current;
      if (canvas) {
        await QRCode.toCanvas(canvas, text, {
          width: 300,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#ffffff'
          }
        });
        
        const dataURL = canvas.toDataURL('image/png');
        setQrCode(dataURL);
      }
    } catch {
      setError('Failed to generate QR code');
    } finally {
      setIsLoading(false);
    }
  };

  const downloadQR = () => {
    if (qrCode) {
      const link = document.createElement('a');
      link.download = 'qrcode.png';
      link.href = qrCode;
      link.click();
    }
  };

  const clearAll = () => {
    setText('');
    setQrCode('');
    setError('');
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="space-y-6">
        {/* Input Section */}
        <div className="space-y-4">
          <label htmlFor="text-input" className="block text-lg font-semibold text-gray-700">
            Enter text or URL to generate QR code
          </label>
          <div className="relative">
            <textarea
              id="text-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your text, URL, email, phone number, or any data..."
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none h-24 text-gray-700"
              maxLength={1000}
            />
            <div className="absolute bottom-2 right-2 text-xs text-gray-400">
              {text.length}/1000
            </div>
          </div>
          {error && (
            <div className="text-red-500 text-sm font-medium">{error}</div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={generateQR}
            disabled={isLoading || !text.trim()}
            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Generating...' : 'Generate QR Code'}
          </button>
          <button
            onClick={clearAll}
            className="flex-1 sm:flex-initial bg-gray-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
          >
            Clear All
          </button>
        </div>

        {/* QR Code Display */}
        <div className="space-y-4">
          <canvas
            ref={canvasRef}
            className={`mx-auto border-2 border-gray-200 rounded-lg ${qrCode ? 'block' : 'hidden'}`}
          />
          
          {qrCode && (
            <div className="text-center">
              <button
                onClick={downloadQR}
                className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Download QR Code
              </button>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
          <h3 className="font-semibold mb-2">How to use:</h3>
          <ul className="space-y-1">
            <li>• Enter any text, URL, email, or phone number</li>
            <li>• Click &ldquo;Generate QR Code&rdquo; to create your QR code</li>
            <li>• Download the QR code as a PNG image</li>
            <li>• Scan with any QR code reader or smartphone camera</li>
          </ul>
        </div>
      </div>
    </div>
  );
}