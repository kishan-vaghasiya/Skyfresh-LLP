import React, { useState, useRef, useEffect } from 'react';
import './WhatsAppFloat.css';

// Replace with your WhatsApp number in international format (no + or leading zeros)
const WHATSAPP_NUMBER = '917041900308';

// Default pre-filled message that will appear in the chat input when user opens WhatsApp.
// Edit the text below as needed.
const DEFAULT_MESSAGE = 'Hi SkyFresh team, I would like to enquire about your export products and pricing.';

const QUICK_MESSAGES = [
  'Hey, how can I help you?',
  "Let's connect on WhatsApp — tell us what you need!",
  'I want pricing and bulk order info.'
];

const WhatsAppFloat = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const popupRef = useRef(null);

  const openWhatsApp = (text) => {
    const encoded = encodeURIComponent(text);
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
    window.open(link, '_blank', 'noopener');
  };

  // Close when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (open && popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [open]);

  return (
    <>
      <button
        className="whatsapp-float"
        type="button"
        onClick={(e) => { e.stopPropagation(); setOpen((v) => !v); }}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Open SkyFresh chat"
      >
        <svg viewBox="0 0 24 24" className="whatsapp-icon" aria-hidden="true">
          <path fill="currentColor" d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.373 0 .06 5.313.06 11.94c0 2.1.55 4.15 1.6 5.95L0 24l6.35-1.6c1.73 1 3.7 1.55 5.65 1.55 6.627 0 12-5.373 12-12 0-3.2-1.24-6.2-3.5-8.35zM12 21.8c-1.8 0-3.58-.48-5.12-1.38l-.36-.22-3.77.95.95-3.66-.24-.37A9.05 9.05 0 0 1 2.1 11.94 9.9 9.9 0 0 1 12 2.04c5.5 0 9.96 4.46 9.96 9.9 0 5.48-4.42 9.86-9.96 9.86z" />
          <path fill="currentColor" d="M17.2 14.1c-.3-.15-1.72-.85-1.98-.95-.26-.1-.45-.15-.64.15-.18.3-.7.95-.86 1.15-.16.2-.32.22-.61.08-.3-.15-1.25-.46-2.38-1.46-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.13-.12.3-.32.45-.48.15-.16.2-.27.3-.45.1-.18.05-.34-.03-.49-.08-.15-.64-1.54-.88-2.12-.23-.55-.47-.47-.64-.48l-.55-.01c-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.2 0 1.3.94 2.55 1.07 2.72.12.18 1.85 2.92 4.48 3.98 2.03.86 2.95.93 3.19.82.24-.1.78-.31.89-.61.12-.3.12-.55.08-.61-.05-.06-.18-.1-.38-.2z" />
        </svg>
      </button>

      {open && (
        <div className="whatsapp-popup" ref={popupRef} role="dialog" aria-label="SkyFresh chat popup">
          <header className="whatsapp-popup-header">
            <div className="brand">
              <div className="brand-dot" aria-hidden></div>
              <div className="brand-name">SkyFresh</div>
            </div>
            <button className="popup-close" onClick={() => setOpen(false)} aria-label="Close chat">✕</button>
          </header>

          <div className="whatsapp-messages">
            <div className="msg bot">Hello 👋</div>
            <div className="msg bot">{"Hi, how can I help you today?"}</div>
            <div className="msg suggestion">Try: <strong>"I want pricing and bulk order info."</strong></div>
          </div>

          <div className="quick-replies">
            {QUICK_MESSAGES.map((q) => (
              <button key={q} className="quick-btn" onClick={() => setMessage(q)}>
                {q}
              </button>
            ))}
          </div>

          <div className="popup-actions">
            <input
              className="popup-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-label="Message to send"
            />
            <button className="start-chat" onClick={() => openWhatsApp(message)}>Start Chat</button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppFloat;
