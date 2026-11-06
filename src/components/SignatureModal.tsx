import React, { useRef, useState, useEffect } from 'react';
import { X, Upload, PenTool, Trash2, Check, Sparkles, Image, RefreshCw } from 'lucide-react';

interface SignatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSignature?: string;
  onSave: (signatureDataUrl: string) => void;
  candidateName?: string;
}

export const SignatureModal: React.FC<SignatureModalProps> = ({
  isOpen,
  onClose,
  currentSignature = '',
  onSave,
  candidateName = 'Md. Shakil Hossain',
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'draw' | 'type'>('upload');
  const [previewUrl, setPreviewUrl] = useState<string>(currentSignature);
  const [penColor, setPenColor] = useState<string>('#0e417a');
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [typedName, setTypedName] = useState<string>(candidateName);
  const [selectedFont, setSelectedFont] = useState<'font1' | 'font2' | 'font3'>('font1');

  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (isOpen) {
      setPreviewUrl(currentSignature);
      if (!currentSignature) {
        // default to upload
        setActiveTab('upload');
      }
    }
  }, [isOpen, currentSignature]);

  // Handle Canvas Setup
  useEffect(() => {
    if (activeTab === 'draw' && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = penColor;
      }
    }
  }, [activeTab, penColor]);

  if (!isOpen) return null;

  // File Upload Handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setPreviewUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Canvas Drawing Handlers
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      setPreviewUrl(canvas.toDataURL('image/png'));
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setPreviewUrl('');
  };

  // Generate Digital Signature from Type
  const generateTypedSignature = (name: string, style: 'font1' | 'font2' | 'font3') => {
    const canvas = document.createElement('canvas');
    canvas.width = 460;
    canvas.height = 140;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = penColor;

    if (style === 'font1') {
      ctx.font = 'italic bold 38px "Dancing Script", "Brush Script MT", cursive';
    } else if (style === 'font2') {
      ctx.font = 'italic 36px "Great Vibes", "Segoe Script", cursive';
    } else {
      ctx.font = 'italic 34px "Lucida Handwriting", "Caveat", cursive';
    }

    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(name, canvas.width / 2, canvas.height / 2);

    const dataUrl = canvas.toDataURL('image/png');
    setPreviewUrl(dataUrl);
  };

  const handleApplySignature = () => {
    onSave(previewUrl);
    onClose();
  };

  const handleRemoveSignature = () => {
    setPreviewUrl('');
    onSave('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-[#0e417a] text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <PenTool className="w-4 h-4 text-blue-200" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base leading-tight">ডিজিটাল স্বাক্ষর (Signature)</h3>
              <p className="text-[11px] text-blue-100">সিভি ও কভার লেটারে সরাসরি প্রিন্ট হবে</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-semibold p-1.5 gap-1">
          <button
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors ${
              activeTab === 'upload'
                ? 'bg-white text-[#0e417a] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>ছবি আপলোড (Upload File)</span>
          </button>

          <button
            onClick={() => setActiveTab('draw')}
            className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors ${
              activeTab === 'draw'
                ? 'bg-white text-[#0e417a] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>স্ক্রিনে আঁকুন (Draw)</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('type');
              generateTypedSignature(typedName, selectedFont);
            }}
            className={`flex-1 py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors ${
              activeTab === 'type'
                ? 'bg-white text-[#0e417a] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>নাম লিখে জেনারেট (Type)</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 space-y-4">
          {/* TAB 1: UPLOAD */}
          {activeTab === 'upload' && (
            <div className="space-y-3">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept="image/*"
                className="hidden"
              />

              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-300 hover:border-blue-500 bg-slate-50/70 hover:bg-blue-50/40 rounded-xl p-6 text-center cursor-pointer transition-colors flex flex-col items-center justify-center gap-2"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shadow-xs">
                  <Upload className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-xs sm:text-sm">
                    স্বাক্ষরের ছবি নির্বাচন করতে এখানে ক্লিক করুন
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    সাদা কাগজের উপর সাইন করে ছবি বা স্ক্যান আপলোড করুন (PNG, JPG)
                  </p>
                </div>
                <button
                  type="button"
                  className="mt-1 px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-100"
                >
                  ফাইল সিলেক্ট করুন
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: DRAW */}
          {activeTab === 'draw' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">নিচের বক্সে মাউস বা আঙুল দিয়ে সাইন করুন:</span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setPenColor('#0e417a')}
                      className={`w-5 h-5 rounded-full bg-[#0e417a] border ${
                        penColor === '#0e417a' ? 'ring-2 ring-blue-500 ring-offset-1' : ''
                      }`}
                      title="Navy Blue"
                    />
                    <button
                      type="button"
                      onClick={() => setPenColor('#0f172a')}
                      className={`w-5 h-5 rounded-full bg-[#0f172a] border ${
                        penColor === '#0f172a' ? 'ring-2 ring-blue-500 ring-offset-1' : ''
                      }`}
                      title="Black"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={clearCanvas}
                    className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-[11px] font-medium flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>মুছে ফেলুন</span>
                  </button>
                </div>
              </div>

              <div className="border border-slate-300 rounded-xl overflow-hidden bg-white shadow-inner relative touch-none">
                <canvas
                  ref={canvasRef}
                  width={460}
                  height={150}
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                  className="w-full h-36 cursor-crosshair block"
                />
                <div className="absolute bottom-2 left-3 text-[10px] text-slate-300 pointer-events-none select-none">
                  Digital Sign Pad • {candidateName}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TYPE */}
          {activeTab === 'type' && (
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  আপনার নাম (স্বাক্ষর স্টাইলে দেখাবে):
                </label>
                <input
                  type="text"
                  value={typedName}
                  onChange={(e) => {
                    setTypedName(e.target.value);
                    generateTypedSignature(e.target.value, selectedFont);
                  }}
                  className="w-full border border-slate-300 rounded-lg p-2 text-xs font-medium focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-slate-600">স্টাইল নির্বাচন:</span>
                {(['font1', 'font2', 'font3'] as const).map((f, i) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => {
                      setSelectedFont(f);
                      generateTypedSignature(typedName, f);
                    }}
                    className={`px-3 py-1 text-xs rounded border transition-colors ${
                      selectedFont === f
                        ? 'bg-blue-50 border-blue-400 text-blue-800 font-bold'
                        : 'bg-white border-slate-300 text-slate-700'
                    }`}
                  >
                    স্টাইল {i + 1}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* PREVIEW CONTAINER */}
          {previewUrl ? (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-700 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  স্বাক্ষর প্রিভিউ:
                </span>
                <span className="text-[11px] text-slate-400">সিভি ও কভার লেটারে যেমন দেখাবে</span>
              </div>
              <div className="h-16 bg-white border border-dashed border-slate-300 rounded-lg flex items-center justify-center p-2">
                <img
                  src={previewUrl}
                  alt="Signature Preview"
                  className="max-h-full max-w-full object-contain filter contrast-125"
                />
              </div>
            </div>
          ) : (
            <div className="text-center py-2 text-xs text-slate-400">
              কোনো স্বাক্ষর নির্বাচন করা নেই।
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="bg-slate-50 border-t border-slate-200 px-5 py-3 flex items-center justify-between gap-3">
          {currentSignature ? (
            <button
              type="button"
              onClick={handleRemoveSignature}
              className="px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>স্বাক্ষর মুছে ফেলুন</span>
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
            >
              বাতিল
            </button>
            <button
              type="button"
              onClick={handleApplySignature}
              disabled={!previewUrl}
              className="px-4 py-2 text-xs font-bold text-white bg-[#0e417a] hover:bg-[#0c3563] disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-xs flex items-center gap-1.5 transition-colors"
            >
              <Check className="w-3.5 h-3.5" />
              <span>স্বাক্ষর সংরক্ষণ করুন (Apply)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
