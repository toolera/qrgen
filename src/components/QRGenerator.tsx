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
        // Clear the canvas first
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        // Generate QR code
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
      } else {
        setError('Canvas not available');
      }
    } catch (err) {
      console.error('QR Generation Error:', err);
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
    <div className="w-full bg-white rounded-xl shadow-sm border p-6 md:p-8">
      <div className="space-y-6">
        {/* Input Section */}
        <div className="space-y-4">
          <div className="relative">
            <textarea
              id="text-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your text, URL, email, phone number, or any data..."
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none h-28 text-gray-700 placeholder-gray-400"
              maxLength={1000}
            />
            <div className="absolute bottom-3 right-3 text-xs text-gray-400 bg-white px-1">
              {text.length}/1000
            </div>
          </div>
          {error && (
            <div className="flex items-center gap-2 text-red-600 text-sm">
              <span className="text-red-500">⚠</span>
              {error}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={generateQR}
            disabled={isLoading || !text.trim()}
            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Generating...
              </span>
            ) : (
              'Generate QR Code'
            )}
          </button>
          {(qrCode || text) && (
            <button
              onClick={clearAll}
              className="sm:w-auto bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors"
            >
              Clear
            </button>
          )}
        </div>

        {/* Canvas - Always present but hidden when no QR code */}
        <canvas
          ref={canvasRef}
          width={300}
          height={300}
          className="hidden"
        />

        {/* QR Code Display */}
        {qrCode && (
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <img
                src={qrCode}
                alt="Generated QR Code"
                className="mx-auto rounded-lg shadow-sm max-w-full h-auto"
                style={{ maxWidth: '300px' }}
              />
            </div>
            
            <div className="text-center">
              <button
                onClick={downloadQR}
                className="inline-flex items-center gap-2 bg-green-600 text-white py-3 px-6 rounded-xl font-medium hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
              >
                <span>📥</span>
                Download PNG
              </button>
            </div>
          </div>
        )}

        {/* Quick Tips */}
        {!qrCode && (
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <h3 className="font-medium text-blue-900 mb-2">💡 Quick Tips:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Paste any URL to create a clickable QR code</li>
              <li>• Add contact info like email@example.com</li>
              <li>• Perfect for sharing WiFi passwords or social links</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}