import { X } from 'lucide-react';
import { ModalProps } from '../types';

function Modal({ isOpen, onClose, title, children } : ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-50 w-[90%] max-w-md rounded-lg bg-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button onClick={onClose} className="p-1">
            <X className="h-6 w-6" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;